const skillData = {
	"対抗意識◯": { rank: 1 },
	"伏兵◯": { rank: 1 },
	"晴れの日◯": { rank: 4 },
	"良バ場◯": { rank: 4 },
	"逃げのコツ◯": { rank: 5 },
	"中山レース場◯": { rank: 1 },
	一匹狼: { rank: 1 },

	直線巧者: { rank: 4 },
	集中力: { rank: 4 },
	快速: { rank: 4 },
	神速: { rank: 5 },
	"コーナー巧者◯": { rank: 4 },
	弧線のプロフェッサー: { rank: 5 },
	直線巧者: { rank: 4 },
	ハヤテ一文字: { rank: 5 },
	直線回復: { rank: 4 },
	好転一息: { rank: 5 },
	至高のダウンヒラー: { rank: 4 },
	曲線のソムリエ: { rank: 5 },
	怪物的コーナリング: { rank: 5 },

	電光石火: { rank: 3, type: "sprint-mile" },
	常に最たる輝きを: { rank: 4, type: "sprint-mile" },
	ヴェール揺らす春疾風: { rank: 3, type: "sprint-mile" },
	気合十分: { rank: 3, type: "mile" },
	天来のリトルシスター: { rank: 4, type: "mile-classic" },
	豪風円刃: { rank: 4, type: "mile" },
	祝福のフラワーガール: { rank: 5, type: "mile" },
	テンポアップ: { rank: 4, type: "classic" },
	型破り: { rank: 4, type: "classic-long" },
	ロックオン: { rank: 3, type: "long" },
	先駆け: { rank: 4, type: "lead" },
	食いしん坊: { rank: 5, type: "front" },
	笠松の食いしん坊: { rank: 4, type: "front" },
	飢えた怪物: { rank: 5, type: "front" },
	向上心: { rank: 2, type: "front" },
	溢れる情熱: { rank: 3, type: "looker" },
	威風堂々: { rank: 4, type: "looker" },
	華麗であれ: { rank: 4, type: "looker" },
	大胆不敵: { rank: 3, type: "looker" },
	"ハイソ・メンタリティ！": { rank: 4, type: "looker" },
	王手: { rank: 4, type: "front-looker" },
};

sq(".skill").each(function () {
	const skill = sq(this);
	const name = skill.html();
	const data = skillData[name];

	if (data?.rank) {
		skill.addClass(`rank${data.rank}`);
	}

	if (data?.type) {
		skill.addClass(data.type);
	}
});
