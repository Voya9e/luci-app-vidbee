# luci-app-vidbee

A lightweight LuCI entry for the VidBee Web UI. Like the FileBrowser LuCI package, this package adds a page in **Services**; VidBee continues to provide the actual application and API.

## Requirements

- OpenWrt with LuCI
- VidBee Web UI reachable at port **3000** on the same hostname used to access LuCI

The LuCI page embeds `http://<router-hostname>:3000` and also offers a link to open VidBee in a new tab. If VidBee runs on a different host or port, adjust `htdocs/luci-static/resources/view/vidbee.js` before building.

## Build

Add this package to an OpenWrt build tree under `package/luci-app-vidbee`, then build it with the LuCI feed installed:

```sh
make package/luci-app-vidbee/compile
```

Install the resulting IPK on the router. The VidBee service itself is not included in this package and must be deployed separately.

## Notes

Some VidBee or reverse-proxy configurations may send frame restrictions that prevent embedding. In that case, use **Open VidBee in a new tab**. This package does not proxy VidBee traffic or alter LuCI authentication.
