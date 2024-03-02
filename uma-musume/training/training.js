const scheduleRects = [
	"45,93,104,123", // 0: 1月前半
	"119,93,178,123", // 1: 1月後半
	"194,93,253,123", // 2: 2月前半
	"268,93,327,123", // 3: 2月後半

	"45,156,104,186", // 4: 3月前半
	"119,156,178,186", // 5: 3月後半
	"194,156,253,186", // 6: 4月前半
	"268,156,327,186", // 7: 4月後半

	"45,220,104,250", // 8: 5月前半
	"119,220,178,250", // 9: 5月後半
	"194,220,253,250", // 10: 6月前半
	"268,220,327,250", // 11: 6月後半

	"45,284,104,314", // 12: 7月前半
	"119,284,178,314", // 13: 7月後半
	"194,284,253,314", // 14: 8月前半
	"268,284,327,314", // 15: 8月後半

	"45,347,104,378", // 16: 9月前半
	"119,347,178,378", // 17: 9月後半
	"194,347,253,378", // 18: 10月前半
	"268,347,327,378", // 19: 10月後半

	"45,411,104,441", // 20: 11月前半
	"119,411,178,441", // 21: 11月後半
	"194,411,253,441", // 22: 12月前半
	"268,411,327,441", // 23: 12月後半
];

const body = sq("body");
body.append('<dialog><h3></h3><div></div><form method="dialog"><button type="submit">OK</button></form></dialog>');
const dialog = sq("dialog");

["schedule-junior", "schedule-classic", "schedule-senior"].forEach((name) => {
	body.append(`<map name="${name}"></map>`);
	const map = sq(`map[name="${name}"]`);

	scheduleRects.forEach((rect, index) => {
		map.append(`<area shape="rect" coords="${rect}" id="${name}-${index}" />`);
	});
});

sq("area").on("click", function () {
	const thisSchedule = schedule[this.id];

	if (thisSchedule) {
		dialog.find("h3").text(thisSchedule.race);
		dialog.find("div").text(thisSchedule.reason);
		dialog.get(0).showModal();
	}
});
