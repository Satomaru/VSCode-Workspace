const suitablyCriterion = {
    AA: [
        "非常に重要なスキルが取得できる。",
        "ステータス上昇の合計値が +30 以上。",
        "重要なキャラとお出かけができる。",
    ],
    A: [
        "重要なスキルが取得できる。",
        "ステータス上昇の合計値が +20 以上。",
        "大きく回復する。",
    ],
    B: [
        "役に立つスキルが取得できる。",
        "ステータス上昇の合計値が +10 以上。",
        "やる気が上がる。",
    ],
    C: ["大きなデメリットはない。"],
    D: ["大きなデメリットがある。"],
};

const dialogForm =
    '<form method="dialog"><button type="submit">OK</button></form>';

const body = sq("body");

for (const rank in suitablyCriterion) {
    const criterion = suitablyCriterion[rank]
        .map((element) => `<li>${element}<li>`)
        .join("");

    body.append(
        `<dialog id="suitably-${rank}"><h3>適正 ${rank}</h3><ul>${criterion}</ul>${dialogForm}</dialog>`
    );
}

sq("td.suitably").on("click", function () {
    sq(`#suitably-${sq(this).text()}`)
        .get(0)
        .showModal();
});
