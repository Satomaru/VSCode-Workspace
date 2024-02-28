#title="[HTML] 選択したTSVから表を作成"

function getLines() {
	var text = Document.Selection.Text.trim();

	if (text.length > 0) {
		var delimiter = /\n/.test(text) ? /\r?\n/ : /\r/;
		return text.split(delimiter);
	}

	return [];
}

function writeHeader(line) {
	var trimmed = line.trim();

	if (/\t/.test(trimmed)) {
		Document.Writeln("\t<thead>");
		Document.Write("\t\t<tr><th>");
		Document.Write(line.replace(/\t/, "</th><th>"));
		Document.Writeln("</th></tr>");
		Document.Writeln("\t</thead>");
	} else {
		Document.Write("\t<caption>");
		Document.Write(trimmed);
		Document.Writeln("</caption>");
	}
}

function writeBody(lines) {
	Document.Writeln("\t<tbody>");

	for (var y = 0; y < lines.length; y++) {
		Document.Write("\t\t<tr><td>");
		Document.Write(lines[y].replace(/\t/, "</td><td>"));
		Document.Writeln("</td></tr>");
	}

	Document.Writeln("\t</tbody>");
}

var lines = getLines();

if (lines.length > 0) {
	Document.Selection.Delete();
	Document.Writeln("<table>");
	writeHeader(lines.shift());
	writeBody(lines);
	Document.Writeln("</table>");
}
