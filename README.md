# luci-app-vidbee

A lightweight bilingual LuCI entry for the VidBee Web UI. It adds **Services → VidBee**, embeds the VidBee interface, and provides a new-tab shortcut. VidBee itself must be installed and run separately.

简体中文 | [English](#english)

## 简体中文

这是一个轻量级的 VidBee LuCI 入口插件，在 LuCI 的 **服务 → VidBee** 中嵌入 VidBee 界面，并提供新标签页打开入口。VidBee 本体及 API 需单独部署和启动。

### 要求

- 已安装 LuCI 的 OpenWrt
- VidBee Web UI 可通过路由器主机名的 **3000** 端口访问
- VidBee Web 服务允许被 LuCI 页面嵌入

入口根据当前 LuCI 页面使用的主机名和协议生成 VidBee 地址。若 VidBee 使用其他主机或端口，请修改 `htdocs/luci-static/resources/view/vidbee.js`。如果服务设置了禁止嵌入的 frame 策略，可使用页面上的新标签页按钮。

### 构建

将本目录放到 OpenWrt 构建树的 `package/luci-app-vidbee`，并确保已安装 LuCI feed：

```sh
make package/luci-app-vidbee/compile
```

安装生成的 IPK。此入口包不包含或启动 VidBee 服务，也不需要 Node.js 或 SQLite 运行依赖。

简体中文界面翻译位于 `po/zh_Hans/vidbee.po`。LuCI 选择简体中文时显示中文；其他语言默认显示英文。

## English

This package adds a lightweight **Services → VidBee** entry to LuCI. It embeds the VidBee interface and provides a shortcut to open it in a new tab. The VidBee application and API must be deployed and started separately.

### Requirements

- OpenWrt with LuCI
- VidBee Web UI reachable on port **3000** using the router's hostname
- VidBee's web service allows embedding in a frame

The entry builds the VidBee URL from the hostname and protocol used by the current LuCI page. If VidBee uses another host or port, edit `htdocs/luci-static/resources/view/vidbee.js`. Use the new-tab button if the service's frame policy prevents embedding.

### Build

Place this directory at `package/luci-app-vidbee` in an OpenWrt build tree with the LuCI feed installed, then run:

```sh
make package/luci-app-vidbee/compile
```

Install the resulting IPK. This entry package does not include or start the VidBee service and has no Node.js or SQLite runtime dependency.

Simplified Chinese translations are in `po/zh_Hans/vidbee.po`. LuCI uses them when Simplified Chinese is selected; English source strings are the fallback.
