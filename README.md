# luci-app-vidbee

A lightweight bilingual LuCI entry for the VidBee Web UI. It adds **Services → VidBee**; VidBee continues to provide the application and API.

简体中文 | [English](#english)

## 简体中文

这是一个轻量级的 VidBee LuCI 入口插件，在 LuCI 的 **服务 → VidBee** 中显示 VidBee Web 界面。VidBee 本体及 API 仍需单独部署。

### 要求

- 已安装 LuCI 的 OpenWrt
- VidBee Web UI 可通过访问 LuCI 时使用的主机名，在 **3000** 端口访问

插件会嵌入 `http://<路由器主机名>:3000`，也提供在新标签页打开的链接。如果 VidBee 使用其他主机或端口，请在构建前修改 `htdocs/luci-static/resources/view/vidbee.js`。

### 构建

将本目录放到 OpenWrt 构建树的 `package/luci-app-vidbee`，并确保已安装 LuCI feed：

```sh
make package/luci-app-vidbee/compile
```

安装生成的 IPK。此插件不包含或启动 VidBee 服务。

简体中文界面翻译位于 `po/zh_Hans/vidbee.po`。LuCI 选择简体中文时显示中文；其他语言默认显示英文。

### 注意

VidBee 或反向代理的 frame 限制可能阻止页面嵌入；此时可使用“在新标签页中打开 VidBee”。本插件不代理 VidBee 流量，也不改变 LuCI 身份验证。

## English

This package adds a lightweight **Services → VidBee** entry to LuCI. It embeds the VidBee Web UI; the VidBee application and API must be deployed separately.

### Requirements

- OpenWrt with LuCI
- VidBee Web UI reachable on port **3000** using the same hostname as LuCI

The page embeds `http://<router-hostname>:3000` and provides a link to open VidBee in a new tab. If VidBee uses another host or port, edit `htdocs/luci-static/resources/view/vidbee.js` before building.

### Build

Place this directory at `package/luci-app-vidbee` in an OpenWrt build tree with the LuCI feed installed, then run:

```sh
make package/luci-app-vidbee/compile
```

Install the resulting IPK. This package does not include or start the VidBee service.

Simplified Chinese translations are in `po/zh_Hans/vidbee.po`. LuCI uses them when Simplified Chinese is selected; English source strings are the fallback.

### Notes

VidBee or reverse-proxy frame restrictions may prevent embedding. Use **Open VidBee in a new tab** in that case. This package does not proxy VidBee traffic or change LuCI authentication.
