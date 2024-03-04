#title="[HTML] ウマ娘イベント選択肢作成"

var lineParser = /^(\t{0,2})([^\t\r\n]*)[\r\n]*$/;
var propernounParser = /『(.+?)』/;
var gainParser = /\s*(\+\d+)$/;
var loseParser = /\s*(-\d+)$/;

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
		'<table class="event-options">',
		"\t<caption>" + context.text + "</caption>",
		"\t<thead>",
		"\t\t<tr>",
		"\t\t\t<th>選択肢</th>",
		"\t\t\t<th>効果</th>",
		"\t\t</tr>",
		"\t</thead>",
		"\t<tbody>",
		"\t\t<tr>",
	]);

	context.beganTable = true;
	context.previousIndent = 0;
}

function writeOption(context) {
	if (context.previousIndent === 1 || context.previousIndent === 2) {
		writeHtml([
			"\t\t\t\t</ul>",
			"\t\t\t</td>",
			"\t\t</tr>",
			"\t\t<tr>",
		]);
	}

	writeHtml([
		"\t\t\t<th>" + context.text + "</th>",
		'\t\t\t<td class="effect">',
		"\t\t\t\t<ul>",
	]);

	context.previousIndent = 1;
}

function writeEffect(context) {
	if (/^--+$/.test(context.text)) {
		writeHtml([
			"\t\t\t\t</ul>",
			"\t\t\t\t<hr>",
			"\t\t\t\t<ul>",
		]);
	} else {
		var effect = context.text.replace(propernounParser, "<em>「$1」</em>");
		effect = effect.replace(gainParser, ' <span class="gain">$1</span>');
		effect = effect.replace(loseParser, ' <span class="lose">$1</span>');
		effect = effect.replace("{!}", '<i class="bi bi-exclamation-triangle"></i>');

		writeHtml([
			"\t\t\t\t\t<li>" + effect + "</li>",
		]);
	}

	context.previousIndent = 2;
}

function writeTableEnd(context) {
	switch (context.previousIndent) {
		case 2:
		case 1:
			writeHtml([
				"\t\t\t\t</ul>",
				"\t\t\t</td>",
			]);

		default:
			writeHtml([
				"\t\t</tr>",
				"\t</tbody>",
				"</table>",
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
