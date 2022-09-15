#!/bin/sh
###############################################################################
# Install Gitea 安装Gitea,仅限linux系统.                                        #
# Author: LiDong                                                              #
# Email: cnlidong@live.cn                                                     #
# Date: 2022-02-02                                                            #
###############################################################################
# 出错退出
set -e
# 获取第一个参数设为版本号
VERSION=$1
# 判断版本号参数是否为空
if [ -z "$VERSION" ]; then
    echo "请输入版本号"
    exit 1
fi
echo "version: $VERSION"
# 获取第二个参数为镜像地址前缀
PREFIX=$2
# 判断镜像地址前缀参数是否为空
if [ -z "$PREFIX" ]; then
    PREFIX="https://dl.gitea.io/gitea/"
fi
echo "prefix: $PREFIX"
# 判断当前用户是否为root，不是则退出
if [ $(id -u) != "0" ]; then
    echo "Error: You must be root to run this script, please use root to install, you can use the command: sudo -i to login root user"
    echo "Error: 请使用root用户运行,你可以使用命令: sudo -i 切换到root用户."

    exit 1
fi

# 获取当前操作系统
OS=$(uname)
# 判断是否是Linux系统,如果不是则退出
if [ $OS != "Linux" ]; then
    echo "Not Linux system, exit..."
    exit
else
    OS="linux"
fi
# 获取CPU类型
ARCH=$(uname -m)
# 转换CPU类型为go env arch格式
if [ $ARCH = "x86_64" ]; then
    ARCH="amd64"
elif [ $ARCH = "i686" ]; then
    ARCH="386"
# elif [ $ARCH = "armv6l" ]; then
#     ARCH="armv6l"
elif [ $ARCH = "aarch64" ]; then
    ARCH="arm64"
else
    echo "Not support CPU, exit..."
    exit
fi
# 检测是否已安装systemd
if [ -f /usr/bin/systemctl ]; then
    echo "已安装systemd"
else
    echo "当前操作系统不支持systemd,请安装systemd后再运行该脚本"
    exit 1
fi
# 下载Gitea
echo "Download Gitea..."
echo ${PREFIX}${VERSION}/gitea-${VERSION}-$OS-$ARCH
curl -L ${PREFIX}${VERSION}/gitea-${VERSION}-$OS-$ARCH -o /tmp/gitea
# 设置可执行权限
chmod +x /tmp/gitea
# 安装Gitea
echo "Install Gitea..."
# 检测当前git版本是否大于等于2.0
if [ $(git --version | awk '{print $3}' | awk -F. '{print $1}') -ge 2 ]; then
    echo "git version >= 2.0"
else
    echo "git version < 2.0"
    echo "请先升级git版本"
    exit 1
fi

# 安装为服务
echo "Install Gitea as service..."

# 检测是否存在git用户
if id "git" >/dev/null 2>&1; then
    echo "git用户已存在"
else
    echo "git用户不存在,正在创建git用户"
    useradd -m -d /home/git -s /bin/bash git
fi

# 复制gitea到home目录
cp /tmp/gitea /home/git/gitea
# 设置git用户的权限
chown git:git /home/git/gitea
# 给予gitea可执行权限
chmod +x /home/git/gitea
# 允许监听1024以下的端口
setcap CAP_NET_BIND_SERVICE=+eip /home/git/gitea
# 创建gitea服务文件
cat >/etc/systemd/system/gitea.service <<EOF
[Unit]
Description=Gitea (Git with a cup of tea)
After=syslog.target
After=network.target
[Service]
Type=simple
User=git
Group=git
WorkingDirectory=/home/git
ExecStart=/home/git/gitea web
Restart=always
Environment=USER=git HOME=/home/git GITEA_WORK_DIR=/home/git
[Install]
WantedBy=multi-user.target
EOF

# 重载服务
systemctl daemon-reload
# 启动服务
systemctl start gitea
# 设置开机启动
systemctl enable gitea
# 查看服务状态 不分页
systemctl status gitea --no-pager
