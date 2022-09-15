#! /bin/sh
# 设置出错退出
set -e
# 设置命令回显
# set -x
# 获取参数设为版本号
version=$1
# 判断版本号参数是否为空
if [ -z "$version" ]; then
    echo "请输入版本号"
    exit 1
fi
echo "version: $version"

# 获取操作系统类型
os_type=$(uname -s)
echo "os_type: $os_type"
# 操作系统不是Linux退出
if [ "$os_type" != "Linux" ]; then
    echo "This script only supports Linux"
    exit 1
fi
# 获取CPU架构
arch=$(uname -m)
echo "CPU架构: $arch"
# 根据CPU架构生成下载地址参数
if [ "$arch" = "x86_64" ]; then
    arch="amd64"
elif [ "$arch" = "i386" ]; then
    arch="386"
elif [ "$arch" = "i686" ]; then
    arch="386"
elif [ "$arch" = "aarch64" ]; then
    arch="arm64"
elif [ "$arch" = "armv7l" ]; then
    arch="arm"
else
    echo "Unsupported CPU architecture: $arch"
    exit 1
fi
echo "CPU架构: $arch"
# 获取脚本所在目录
SCRIPT_DIR=$(
    cd $(dirname $0)
    pwd
)
echo "应用安装目录: $SCRIPT_DIR"
# 判断当前用户是否为root，不是则退出
if [ $(id -u) != "0" ]; then
    echo "Error: You must be root to run this script, please use root to install, you can use the command: sudo -i to login root user"
    echo "Error: 请使用root用户运行,你可以使用命令: sudo -i 切换到root用户."

    exit 1
fi

# 下载traefik安装包
curl -L -o $SCRIPT_DIR/traefik_${version}_linux_${arch}.tar.gz https://gh.hjmcloud.cn/github.com/traefik/traefik/releases/download/${version}/traefik_${version}_linux_${arch}.tar.gz
# 解压安装包
tar -zxvf $SCRIPT_DIR/traefik_${version}_linux_${arch}.tar.gz
# 删除安装包
rm -rf $SCRIPT_DIR/traefik_${version}_linux_${arch}.tar.gz
# 设置traefik可执行权限
chmod +x $SCRIPT_DIR/traefik
# 判断traefik.yaml文件是否存在
if [ ! -f "$SCRIPT_DIR/traefik.yaml" ]; then
    echo "traefik.yaml文件不存在,写入默认配置"
    # 创建traefik.yaml文件
    touch $SCRIPT_DIR/traefik.yaml
    # 写入traefik.yaml文件内容
    cat >$SCRIPT_DIR/traefik.yaml <<EOF
# traefik.yaml
providers:
  file:
    directory: "./conf.d/"
    watch: true
entryPoints:
  web:
    address: ":80"
    forwardedHeaders:
      insecure: true
  websecure:
    address: ":443"
    forwardedHeaders:
      insecure: true
api:
  insecure: true
  dashboard: true
EOF
fi
# 判断conf.d目录是否存在
if [ ! -d "$SCRIPT_DIR/conf.d" ]; then
    echo "conf.d目录不存在,创建目录"
    # 创建conf.d目录
    mkdir -p $SCRIPT_DIR/conf.d
fi
# 安装traefik服务
cat >/etc/systemd/system/traefik.service <<EOF
[Unit]
Description=traefik
Documentation=https://traefik.io
After=network-online.target
Wants=network-online.target
[Service]
User=root
Group=root
Type=simple
WorkingDirectory=$SCRIPT_DIR
ExecStart=$SCRIPT_DIR/traefik --configfile=$SCRIPT_DIR/traefik.yaml
Restart=on-failure
RestartSec=5s
[Install]
WantedBy=multi-user.target
EOF
# 重新加载systemd
systemctl daemon-reload
# 启动traefik服务
systemctl start traefik
# 设置开机启动
systemctl enable traefik
# 查看traefik服务状态
# systemctl status traefik
# 提示安装完成
echo "traefik服务安装完成"
