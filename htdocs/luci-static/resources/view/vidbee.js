"use strict";
"require view";

return view.extend({
	render: function() {
		var host = window.location.hostname || "openwrt.lan";
		var scheme = window.location.protocol === "https:" ? "https://" : "http://";
		var url = scheme + host + ":3000";

		return E([
			E("div", {
				"style": "display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:0.75rem; margin-bottom:1rem;"
			}, [
				E("div", {}, [
					E("h2", { "style": "margin:0 0 0.35rem 0;" }, _("VidBee")),
					E("p", { "style": "margin:0; opacity:0.8;" }, _("VidBee Web UI is served on port 3000. Make sure the VidBee web service is running and reachable from this router."))
				]),
				E("a", {
					"class": "btn cbi-button cbi-button-action",
					"href": url,
					"target": "_blank",
					"rel": "noopener noreferrer",
					"style": "white-space:nowrap;"
				}, _("Open VidBee in a new tab"))
			]),
			E("div", {
				"style": "height:calc(100vh - 230px); min-height:480px; overflow:hidden; border:1px solid rgba(127,127,127,.35); border-radius:8px; background:var(--background-color-high, #fff); box-shadow:0 2px 10px rgba(0,0,0,.08);"
			}, E("iframe", {
				"src": url,
				"title": _("VidBee Web UI"),
				"style": "display:block; width:100%; height:100%; border:0;",
				"loading": "eager",
				"referrerpolicy": "same-origin",
				"allow": "clipboard-read; clipboard-write"
			}))
		]);
	}
});
