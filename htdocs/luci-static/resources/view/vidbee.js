"use strict";
"require view";

return view.extend({
	render: function() {
		var host = window.location.hostname || "openwrt.lan";
		var url = "http://" + host + ":3000";

		return E([
			E("h2", {}, _("VidBee")),
			E("p", {}, _("VidBee Web UI is served on port 3000. Make sure the VidBee web service is running and reachable from this router.")),
			E("p", {}, [
				E("a", {
					"class": "btn cbi-button cbi-button-action",
					"href": url,
					"target": "_blank",
					"rel": "noopener noreferrer"
				}, _("Open VidBee in a new tab"))
			]),
			E("div", { "style": "height: calc(100vh - 220px); min-height: 480px; border: 1px solid #ccc;" },
				E("iframe", {
					"src": url,
					"title": _("VidBee Web UI"),
					"style": "width: 100%; height: 100%; border: 0;",
					"loading": "lazy",
					"referrerpolicy": "same-origin"
				})
			)
		]);
	}
});
