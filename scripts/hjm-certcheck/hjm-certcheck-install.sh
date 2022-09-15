#! /bin/sh
# -----------------------------------------------------------------------------
# Install hjm-certcheck
# Author: LiDong
# Email: cnlidong@live.cn
# Date: 2022-08-08
# -----------------------------------------------------------------------------
# 出错时退出
set -e
# 提示安装开始
echo "Installing hjm-certcheck"
echo "开始安装hjm-certcheck"
# 获取参数 mirror
mirror=$1

# 获取操作系统类型
OS_TYPE=$(uname -s)
echo "操作系统类型：$OS_TYPE"
# 如果不是Linux系统，退出
if [ "$OS_TYPE" != "Linux" ]; then
    echo "该脚本仅支持Linux系统"
    exit 1
fi
# 获取当前CPU架构
arch=$(uname -m)
echo "当前CPU架构：$arch"
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
SCRIPT_DIR=$(dirname $(readlink -f "$0"))
echo "应用安装目录：$SCRIPT_DIR"
# 判断当前用户是否为root用户,如果不是，退出
if [ "$(id -u)" != "0" ]; then
    echo "该脚本仅支持root用户运行,你可以使用 sudo -i 切换到root用户后运行"
    exit 1
fi
# 下载hjm-certcheck 文件
echo "开始下载hjm-certcheck文件"
curl -L -o $SCRIPT_DIR/hjm-certcheck ${mirror}https://github.com/hjmcloud/hjm-certcheck/releases/latest/download/hjm-certcheck_linux_$arch
# 判断下载是否成功
if [ ! -f $SCRIPT_DIR/hjm-certcheck ]; then
    echo "下载hjm-certcheck安装文件失败"
    exit 1
fi
# 提示下载成功
echo "下载hjm-certcheck安装文件成功"
# 给予运行权限
chmod +x $SCRIPT_DIR/hjm-certcheck
# 检测是否存在config.yaml文件，如果不存在，则下载
if [ ! -f $SCRIPT_DIR/config.yaml ]; then
    echo "开始下载config.yaml配置文件"
    curl -L -o $SCRIPT_DIR/config.yaml https://hjmcloud.cn/scripts/hjm-certcheck/config.yaml
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
# 检测是否已存在systemd service文件，如果存在，则删除
if [ -f /etc/systemd/system/hjm-certcheck.service ]; then
    echo "删除已存在的hjm-certcheck.service文件"
    rm -f /etc/systemd/system/hjm-certcheck.service
fi
# 写入systemd service文件
echo "写入hjm-certcheck.service文件"
cat > /etc/systemd/system/hjm-certcheck.service <<EOF
[Unit]
Description=hjm-certcheck
After=network.target
[Service]
Type=simple
WorkingDirectory=$SCRIPT_DIR
ExecStart=$SCRIPT_DIR/hjm-certcheck
Restart=always
[Install]
WantedBy=multi-user.target
EOF
# 重载systemd
echo "重载systemd"
systemctl daemon-reload
# 提示安装完成
echo "安装hjm-certcheck完成"
