(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{286:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("hjm-certcheck 安装完成后将注册为 systemd 服务.")]),s._v(" "),a("h2",{attrs:{id:"启用-开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-开机自启"}},[s._v("#")]),s._v(" 启用(开机自启)")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" hjm-certcheck.service\n")])])]),a("h2",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start hjm-certcheck.service\n")])])]),a("h2",{attrs:{id:"停止服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止服务"}},[s._v("#")]),s._v(" 停止服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl stop hjm-certcheck.service\n")])])]),a("h2",{attrs:{id:"重启服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启服务"}},[s._v("#")]),s._v(" 重启服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl restart hjm-certcheck.service\n")])])]),a("h2",{attrs:{id:"查看服务状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务状态"}},[s._v("#")]),s._v(" 查看服务状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl status hjm-certcheck.service --no-pager\n")])])]),a("h2",{attrs:{id:"查看服务日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务日志"}},[s._v("#")]),s._v(" 查看服务日志")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("journalctl -u hjm-certcheck.service -f\n")])])]),a("h2",{attrs:{id:"停用服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停用服务"}},[s._v("#")]),s._v(" 停用服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl disable hjm-certcheck.service\n")])])]),a("h2",{attrs:{id:"删除服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除服务"}},[s._v("#")]),s._v(" 删除服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl stop hjm-certcheck.service\nsystemctl disable hjm-certcheck.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /etc/systemd/system/hjm-certcheck.service\nsystemctl daemon-reload\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);