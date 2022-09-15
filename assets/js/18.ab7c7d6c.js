(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{285:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h2",{attrs:{id:"_1-下载脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载脚本"}},[s._v("#")]),s._v(" 1. 下载脚本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o hjm-certcheck-install.sh https://hjmcloud.cn/scripts/hjm-certcheck/hjm-certcheck-install.sh\n")])])]),t("h2",{attrs:{id:"_2-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[s._v("#")]),s._v(" 2. 安装")]),s._v(" "),t("h3",{attrs:{id:"github-下载安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-下载安装"}},[s._v("#")]),s._v(" GitHub 下载安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x hjm-certcheck-install.sh\n./hjm-certcheck-install.sh\n")])])]),t("h3",{attrs:{id:"使用镜像下载安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用镜像下载安装"}},[s._v("#")]),s._v(" 使用镜像下载安装：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x hjm-certcheck-install.sh\n./hjm-certcheck-install.sh https://gh.hjmcloud.cn/\n")])])]),t("h2",{attrs:{id:"_3-在线一键安装-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-在线一键安装-推荐"}},[s._v("#")]),s._v(" 3. 在线一键安装(推荐)")]),s._v(" "),t("h3",{attrs:{id:"github-下载安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-下载安装-2"}},[s._v("#")]),s._v(" GitHub 下载安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://hjmcloud.cn/scripts/hjm-certcheck/hjm-certcheck-install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),t("h3",{attrs:{id:"使用镜像下载安装-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用镜像下载安装-2"}},[s._v("#")]),s._v(" 使用镜像下载安装：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://hjmcloud.cn/scripts/hjm-certcheck/hjm-certcheck-install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -s https://gh.hjmcloud.cn/\n")])])]),t("h2",{attrs:{id:"安装脚本当前内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装脚本当前内容"}},[s._v("#")]),s._v(" 安装脚本当前内容")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -----------------------------------------------------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install hjm-certcheck")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: LiDong")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Email: cnlidong@live.cn")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Date: 2022-08-08")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -----------------------------------------------------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 出错时退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示安装开始")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Installing hjm-certcheck"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始安装hjm-certcheck"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取参数 mirror")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mirror")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取操作系统类型")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OS_TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"操作系统类型：'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OS_TYPE")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果不是Linux系统，退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OS_TYPE")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Linux"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"该脚本仅支持Linux系统"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取当前CPU架构")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"当前CPU架构：'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据CPU架构生成下载地址参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x86_64"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"amd64"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i386"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"386"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i686"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"386"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aarch64"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arm64"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"armv7l"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"arm"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unsupported CPU architecture: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CPU架构: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取脚本所在目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SCRIPT_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$(")]),s._v("readlink -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"应用安装目录：'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断当前用户是否为root用户,如果不是，退出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"该脚本仅支持root用户运行,你可以使用 sudo -i 切换到root用户后运行"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载hjm-certcheck 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始下载hjm-certcheck文件"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/hjm-certcheck "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${mirror}")]),s._v("https://github.com/hjmcloud/hjm-certcheck/releases/latest/download/hjm-certcheck_linux_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$arch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断下载是否成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/hjm-certcheck "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"下载hjm-certcheck安装文件失败"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示下载成功")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"下载hjm-certcheck安装文件成功"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给予运行权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/hjm-certcheck\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测是否存在config.yaml文件，如果不存在，则下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/config.yaml "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始下载config.yaml配置文件"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/config.yaml https://hjmcloud.cn/scripts/hjm-certcheck/config.yaml\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断下载是否成功")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/config.yaml "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"下载config.yaml配置文件失败"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测是否已安装systemd ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f /usr/bin/systemctl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"已安装systemd"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"当前操作系统不支持systemd,请安装systemd后再运行该脚本"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测是否已存在systemd service文件，如果存在，则删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f /etc/systemd/system/hjm-certcheck.service "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"删除已存在的hjm-certcheck.service文件"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f /etc/systemd/system/hjm-certcheck.service\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入systemd service文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"写入hjm-certcheck.service文件"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/systemd/system/hjm-certcheck.service "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=hjm-certcheck\nAfter=network.target\n[Service]\nType=simple\nWorkingDirectory="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("\nExecStart="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SCRIPT_DIR")]),s._v("/hjm-certcheck\nRestart=always\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重载systemd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"重载systemd"')]),s._v("\nsystemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示安装完成")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安装hjm-certcheck完成"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);