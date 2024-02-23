const table = sq("#skill-matrix");
const thead = table.find("thead tr");
const tbody = table.find("tbody");

const idolsType = {
	cute: "キュート",
	cool: "クール",
	passion: "パッション",
}[table.prop("className")];

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
		fitten: "VoDa",
	},
	{
		center: "ドミナント・デュエット (S&M)",
		speciality: "ドミナント・ハーモニー",
		fitten: "DaVi",
	},
	{
		center: "ドミナント・デュエット (M&V)",
		speciality: "ドミナント・ハーモニー",
		fitten: "ViVo",
	},
	{
		center: "トリコロール・ボイス",
		speciality: "コンボボーナス",
		fitten: "Vo",
	},
	{
		center: "トリコロール・ステップ",
		speciality: "コンボボーナス",
		fitten: "Da",
	},
	{
		center: "トリコロール・メイク",
		speciality: "コンボボーナス",
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
		center: "(任意)",
		speciality: "コンセントレーション",
		fitten: "Vo",
	},
	{
		center: "(任意)",
		speciality: "コンセントレーション",
		fitten: "Da",
	},
	{
		center: "(任意)",
		speciality: "コンセントレーション",
		fitten: "Vi",
	},
	{
		center: idolsType + "デュエット (V&S)",
		speciality: "ミューチャル",
		fitten: "VoDa",
	},
	{
		center: idolsType + "デュエット (S&M)",
		speciality: "ミューチャル",
		fitten: "DaVi",
	},
	{
		center: idolsType + "デュエット (M&V)",
		speciality: "ミューチャル",
		fitten: "ViVo",
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

triggers.forEach((trigger) => {
	thead.append(`<th>${trigger}</th>`);
});

skills.forEach((skill, index) => {
	const corresponds = idols.filter(
		(idol) =>
			idol.center === skill.center &&
			idol.speciality === skill.speciality &&
			idol.fitten === skill.fitten
	);

	const spec =
		`<td>${index + 1}</td>` +
		`<td>${skill.center}</td>` +
		`<td>${skill.speciality}</td>` +
		`<td>${skill.fitten}</td>`;

	const mark = triggers
		.map((trigger) => {
			if (corresponds.some((idol) => idol.trigger === trigger)) {
				return `<td>${trigger}</td>`;
			} else {
				return "<td></td>";
			}
		})
		.join("");

	tbody.append(`<tr>${spec}${mark}</tr>`);
});
