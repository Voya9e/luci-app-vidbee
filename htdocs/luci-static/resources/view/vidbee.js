"use strict";
"require view";

return view.extend({
	render: function() {
		var host = window.location.hostname || "openwrt.lan";
		var url = (window.location.protocol === "https:" ? "https://" : "http://") + host + ":3000";

		return E([
			E("h2", {}, _("VidBee")),
			E("p", {}, _("VidBee Web UI is served on port 3000. Make sure the VidBee web service is running and reachable from this router.")),
			E("p", {}, _("VidBee opens in a separate browser tab so its interface can use the full window.")),
			E("p", {}, [
				E("a", {
					"class": "btn cbi-button cbi-button-action",
					"href": url,
					"target": "_blank",
					"rel": "noopener noreferrer"
				}, _("Open VidBee in a new tab"))
			])
		]);
	}
});
