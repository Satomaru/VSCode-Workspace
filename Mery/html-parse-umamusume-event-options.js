#title="[HTML] ウマ娘イベント選択肢作成"

var lineParser = /^(\t{0,2})([^\t\r\n]*)[\r\n]*$/;
var skillParser = /スキル『(.+?)』/;
var statusParser = /ステータス『(.+?)』/;
var speedParser = /^スピード/;
var staminaParser = /^スタミナ/;
var powerParser = /^パワー/;
var gutsParser = /^根性/;
var intelligenceParser = /^賢さ/;
var gainParser = /\s*(\+\d+)$/;
var gainParserRange = /\s*(\+\d+)~\+?(\d+)$/;
var gainParserChoose = /\s*(\+\d+)\/\+?(\d+)$/;
var loseParser = /\s*(-\d+)$/;
var classParser = /^\{(.)\}\s*(.+)$/;

var context = {
	line: "",
	indent: 0,
	text: "",
	beganTable: false,
	previousIndent: 0,
};

function writeHtml(html) {
	for (var index = 0; index < html.length; index++) {
		Document.Writeln(html[index]);
	}
}

function writeTableBegin(context) {
	if (context.text === "") {
		return;
	}

	if (context.beganTable) {
		writeTableEnd(context);
	}

	writeHtml([
		"<details>",
		"\t<summary>" + context.text + "</summary>",
		'\t<table class="fit1">',
		"\t\t<thead>",
		"\t\t\t<tr>",
		"\t\t\t\t<th>選択肢</th>",
		"\t\t\t\t<th>効果</th>",
		"\t\t\t</tr>",
		"\t\t</thead>",
		"\t\t<tbody>",
	]);

	context.beganTable = true;
	context.previousIndent = 0;
}

function writeOption(context) {
	if (context.previousIndent === 1 || context.previousIndent === 2) {
		writeHtml([
			"\t\t\t\t\t</ul>",
			"\t\t\t\t</td>",
			"\t\t\t</tr>",
		]);
	}

	writeHtml([
		"\t\t\t<tr>",
		"\t\t\t\t<th>" + context.text + "</th>",
		'\t\t\t\t<td>',
		"\t\t\t\t\t<ul>",
	]);

	context.previousIndent = 1;
}

function writeEffect(context) {
	if (/^--+$/.test(context.text)) {
		writeHtml([
			"\t\t\t\t\t</ul>",
			"\t\t\t\t\t<hr>",
			"\t\t\t\t\t<ul>",
		]);
	} else {
		var effect = context.text;
		effect = effect.replace(skillParser, '<span class="skill">$1</span>');
		effect = effect.replace(statusParser, '<span class="status">$1</span>');
		effect = effect.replace(speedParser, '<img class="speed" /> スピード');
		effect = effect.replace(staminaParser, '<img class="stamina" /> スタミナ');
		effect = effect.replace(powerParser, '<img class="power" /> パワー');
		effect = effect.replace(gutsParser, '<img class="guts" /> 根性');
		effect = effect.replace(intelligenceParser, '<img class="intelligence" /> 賢さ');
		effect = effect.replace(gainParser, ' <span class="gain">$1</span>');
		effect = effect.replace(gainParserRange, ' <span class="gain">$1 ～ +$2</span>');
		effect = effect.replace(gainParserChoose, ' <span class="gain">$1 / +$2</span>');
		effect = effect.replace(loseParser, ' <span class="lose">$1</span>');

		var tag = "";
		var classMatcher = classParser.exec(effect);

		if (classMatcher) {
			var className;

			switch (classMatcher[1]) {
				case "*":
					className = "recommendation";
					break

				case "!":
					className = "caution";
					break

				default:
					className = "parse-error";
			}

			tag = '<li class="' + className + '">';
			effect = classMatcher[2];
		} else {
			tag = "<li>";
		}

		writeHtml([
			"\t\t\t\t\t\t" + tag + effect + "</li>",
		]);
	}

	context.previousIndent = 2;
}

function writeTableEnd(context) {
	switch (context.previousIndent) {
		case 2:
		case 1:
			writeHtml([
				"\t\t\t\t\t</ul>",
				"\t\t\t\t</td>",
				"\t\t\t</tr>",
			]);

		default:
			writeHtml([
				"\t\t</tbody>",
				"\t</table>",
				"</details>",
				"",
			]);
	}

	context.beganTable = false;
	context.previousIndent = 0;
}

Document.Selection.StartOfDocument();

do {
	Document.Selection.SelectLine();
	context.line = Document.Selection.Text;
	Document.Selection.Delete();

	if (!context.line) {
		if (context.beganTable) {
			writeTableEnd(context);
		}

		break;
	}

	var parsed = lineParser.exec(context.line);

	if (!parsed) {
		Document.Writeln("**** PARSE ERROR *** " + context.line);
		break;
	}

	context.indent = parsed[1].length;
	context.text = parsed[2];

	switch (context.indent) {
		case 0:
			writeTableBegin(context);
			break;

		case 1:
			writeOption(context);
			break;

		case 2:
			writeEffect(context);
			break;
	}
} while (true);
