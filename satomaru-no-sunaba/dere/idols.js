const idolsType = {
	cute: "キュート",
	cool: "クール",
	passion: "パッション",
}[sq("body").prop("className")];

const triggers = [
	"4高",
	"6中",
	"6高",
	"7中",
	"7高",
	"9中",
	"9高",
	"11中",
	"11高",
	"12中",
	"13高",
];

const highlights = {
	キュートアンサンブル: "hl1 hl2 hl3",
	クールアンサンブル: "hl1 hl2 hl3",
	パッションアンサンブル: "hl1 hl2 hl3",
	オルタネイト: "hl1",
	ミューチャル: "hl1",
	オーバードライブ: "hl1 hl2",
	オーバーロード: "hl1 hl2",
	シンデレラマジック: "hl2 hl3",
	リフレイン: "hl2 hl3",
	COMBOボーナス: "hl3",
	ボーカルモチーフ: "hl3",
	ダンスモチーフ: "hl3",
	ビジュアルモチーフ: "hl3",
};

const skills = [
	{
		center: "シンデレラウィッシュ",
		speciality: "リフレイン",
		fitten: "Vo",
	},
	{
		center: "シンデレラウィッシュ",
		speciality: "リフレイン",
		fitten: "Da",
	},
	{
		center: "シンデレラウィッシュ",
		speciality: "リフレイン",
		fitten: "Vi",
	},
	{
		center: "シンデレラエール",
		speciality: "トリコロール・シンフォニー",
		fitten: "Vo",
	},
	{
		center: "シンデレラエール",
		speciality: "トリコロール・シンフォニー",
		fitten: "Da",
	},
	{
		center: "シンデレラエール",
		speciality: "トリコロール・シンフォニー",
		fitten: "Vi",
	},
	{
		center: "シンデレラチャーム",
		speciality: "トリコロール・シナジー",
		fitten: "Vo",
	},
	{
		center: "シンデレラチャーム",
		speciality: "トリコロール・シナジー",
		fitten: "Da",
	},
	{
		center: "シンデレラチャーム",
		speciality: "トリコロール・シナジー",
		fitten: "Vi",
	},
	{
		center: "シンデレラブレス",
		speciality: "シンデレラマジック",
		fitten: "Vo",
	},
	{
		center: "シンデレラブレス",
		speciality: "シンデレラマジック",
		fitten: "Da",
	},
	{
		center: "シンデレラブレス",
		speciality: "シンデレラマジック",
		fitten: "Vi",
	},
	{
		center: "ドミナント・デュエット (V&S)",
		speciality: "ドミナント・ハーモニー",
		fitten: "Vo Da",
	},
	{
		center: "ドミナント・デュエット (S&M)",
		speciality: "ドミナント・ハーモニー",
		fitten: "Da Vi",
	},
	{
		center: "ドミナント・デュエット (M&V)",
		speciality: "ドミナント・ハーモニー",
		fitten: "Vi Vo",
	},
	{
		center: "トリコロール・ボイス",
		speciality: "COMBOボーナス",
		fitten: "Vo",
	},
	{
		center: "トリコロール・ステップ",
		speciality: "COMBOボーナス",
		fitten: "Da",
	},
	{
		center: "トリコロール・メイク",
		speciality: "COMBOボーナス",
		fitten: "Vi",
	},
	{
		center: "トリコロール・ユニゾン",
		speciality: "トリコロール・スパイク",
		fitten: "Vo",
	},
	{
		center: "トリコロール・ユニゾン",
		speciality: "トリコロール・スパイク",
		fitten: "Da",
	},
	{
		center: "トリコロール・ユニゾン",
		speciality: "トリコロール・スパイク",
		fitten: "Vi",
	},
	{
		center: "レゾナンス・ボイス",
		speciality: "ボーカルモチーフ",
		fitten: "Vo",
	},
	{
		center: "レゾナンス・ステップ",
		speciality: "ダンスモチーフ",
		fitten: "Da",
	},
	{
		center: "レゾナンス・メイク",
		speciality: "ビジュアルモチーフ",
		fitten: "Vi",
	},
	{
		center: "(任意)",
		speciality: "オーバードライブ",
		fitten: "Vo",
	},
	{
		center: "(任意)",
		speciality: "オーバードライブ",
		fitten: "Da",
	},
	{
		center: "(任意)",
		speciality: "オーバードライブ",
		fitten: "Vi",
	},
	{
		center: "(任意)",
		speciality: "オーバーロード",
		fitten: "Vo",
	},
	{
		center: "(任意)",
		speciality: "オーバーロード",
		fitten: "Da",
	},
	{
		center: "(任意)",
		speciality: "オーバーロード",
		fitten: "Vi",
	},
	{
		center: idolsType + "デュエット (V&S)",
		speciality: "ミューチャル",
		fitten: "Vo Da",
	},
	{
		center: idolsType + "デュエット (S&M)",
		speciality: "ミューチャル",
		fitten: "Da Vi",
	},
	{
		center: idolsType + "デュエット (M&V)",
		speciality: "ミューチャル",
		fitten: "Vi Vo",
	},
	{
		center: idolsType + "プリンセス",
		speciality: "オルタネイト",
		fitten: "Vo",
	},
	{
		center: idolsType + "プリンセス",
		speciality: "オルタネイト",
		fitten: "Da",
	},
	{
		center: idolsType + "プリンセス",
		speciality: "オルタネイト",
		fitten: "Vi",
	},
	{
		center: idolsType + "プリンセス",
		speciality: idolsType + "フォーカス",
		fitten: "Vo",
	},
	{
		center: idolsType + "プリンセス",
		speciality: idolsType + "フォーカス",
		fitten: "Da",
	},
	{
		center: idolsType + "プリンセス",
		speciality: idolsType + "フォーカス",
		fitten: "Vi",
	},
	{
		center: idolsType + "ユニゾン",
		speciality: idolsType + "アンサンブル",
		fitten: "Vo",
	},
	{
		center: idolsType + "ユニゾン",
		speciality: idolsType + "アンサンブル",
		fitten: "Da",
	},
	{
		center: idolsType + "ユニゾン",
		speciality: idolsType + "アンサンブル",
		fitten: "Vi",
	},
];

const skillMatrix = sq("#skill-matrix");
const skillHead = skillMatrix.find("thead tr");
const skillBody = skillMatrix.find("tbody");

triggers.forEach((trigger) => {
	skillHead.append(`<th>${trigger}</th>`);
});

skills.forEach((skill) => {
	const corresponds = idols.filter(
		(idol) =>
			(idol.center === skill.center || skill.center === "(任意)") &&
			idol.speciality === skill.speciality &&
			idol.fitten === skill.fitten
	);

	if (corresponds.length > 0) {
		const spec = `<td>${skill.center}</td><td>${skill.speciality}</td><td>${skill.fitten}</td>`;

		const mark = triggers
			.map((trigger) => {
				if (corresponds.some((idol) => idol.trigger === trigger)) {
					return `<td>${trigger}</td>`;
				} else {
					return "<td></td>";
				}
			})
			.join("");

		const highlight = highlights[skill.speciality] || "";
		skillBody.append(`<tr class="${skill.fitten} ${highlight}">${spec}${mark}</tr>`);
	}
});

const idolList = sq("#idol-list");
const idolBody = idolList.find("tbody");

idols.forEach((idol) => {
	const highlight = highlights[idol.speciality] || "";

	idolBody.append(
		`<tr class="${idol.fitten} ${highlight}"><td>${idol.name}</td><td>${idol.clothes}</td><td>${idol.center}</td><td>${idol.speciality}</td><td>${idol.fitten}</td><td>${idol.trigger}</td></tr>`
	);
});

sq('input[name="show"]').on("change", function () {
	const display = sq("#display");
	display.removeClass("idols");
	display.removeClass("skills");
	display.addClass(sq(this).val());
});

sq('input[name="fitten"]').on("change", function () {
	const display = sq("#display");

	if (this.checked) {
		display.addClass(this.value);
	} else {
		display.removeClass(this.value);
	}
});

sq("#highlight select").on("change", function () {
	const value = sq(this).val();
	sq("#highlight-description").prop("className", value);
	const display = sq("#display");
	display.removeClass("hl1");
	display.removeClass("hl2");
	display.removeClass("hl3");
	display.addClass(value);
});
