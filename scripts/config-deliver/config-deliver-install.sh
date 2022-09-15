#! /bin/sh
# -----------------------------------------------------------------------------
# Install config-deliver
# Author: LiDong
# Email: cnlidong@live.cn
# Date: 2022-08-10
# -----------------------------------------------------------------------------
# 出错时退出
set -e
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
    echo "Error: You must be root to run this script, please use root to install, you can use the command: sudo -i to login root user."
    echo "Error: 请使用root用户运行,你可以使用命令: sudo -i 切换到root用户."
    exit 1
fi
# 下载config-deliver安装文件
curl -L -o $SCRIPT_DIR/config-deliver https://github.com/hjmcloud/config-deliver/releases/latest/download/config-deliver_linux_$arch
# 设置config-deliver可执行权限
chmod +x $SCRIPT_DIR/config-deliver
# 检测是否存在config.yaml文件，如果不存在，则下载
if [ ! -f $SCRIPT_DIR/config.yaml ]; then
    echo "开始下载config.yaml配置文件"
    curl -L -o $SCRIPT_DIR/config.yaml https://hjmcloud.cn/scripts/config-deliver/config.yaml
    # 判断下载是否成功
    if [ ! -f $SCRIPT_DIR/config.yaml ]; then
        echo "下载config.yaml配置文件失败"
        exit 1
    fi
fi
# 检测是否已安装systemd 
if [ -f /usr/bin/systemctl ]; then
    echo "已安装systemd"
else
    echo "当前操作系统不支持systemd,请安装systemd后再运行该脚本"
    exit 1
fi
# 安装为系统服务
# 写入config-deliver.service文件
cat >/etc/systemd/system/config-deliver.service <<EOF
[Unit]
Description=Config Deliver Service
After=network-online.target
Wants=network-online.target
[Service]
Type=simple
WorkingDirectory=$SCRIPT_DIR
ExecStart=$SCRIPT_DIR/config-deliver
Restart=on-failure
[Install]
WantedBy=multi-user.target
EOF
# 加载服务
systemctl daemon-reload
# # 注册服务
# systemctl enable config-deliver.service
# # 启动服务
# systemctl start config-deliver.service
# # 查看服务状态,不分页
# systemctl status config-deliver.service --no-pager

# 输出完成信息
echo "config-deliver服务安装完成"