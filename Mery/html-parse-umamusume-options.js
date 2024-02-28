#title="[HTML] ウマ娘選択肢変換"

function writeStart(caption) {
	Document.Writeln("<table>");
	Document.Write("\t<caption>");
	Document.Write(caption);
	Document.Writeln("</caption>");
	Document.Writeln("\t<tbody>");
}

function writeOption(line) {
	var columns = line.split(/\t/);

	Document.Writeln("\t\t<tr>");
	Document.Write("\t\t\t<th>");
	Document.Write(columns[0] || "<br>");
	Document.Writeln("</th>");

	for (var x = 1; x < 3; x++) {
		Document.Write("\t\t\t<td>");

		if (columns[x]) {
			Document.Write(columns[x].replace(/\s+/, "<br>"));
		}

		Document.Writeln("<br></td>");
	}

	Document.Writeln("\t\t</tr>");
}

function writeEnd() {
	Document.Writeln("\t</tbody>");
	Document.Writeln("</table>");
	Document.Writeln("");
}

if (Document.Text.length > 0) {
	Document.Selection.StartOfDocument();

	var line;
	var caption;
	var eof = false;

	while (!eof) {
		Document.Selection.SelectLine();
		line = Document.Selection.Text.trim();
		Document.Selection.Delete();

		if (line) {
			if (!caption) {
				caption = line;
				writeStart(caption);
			} else {
				writeOption(line);
			}
		} else {
			if (caption) {
				caption = null;
				writeEnd();
			} else {
				eof = true;
			}
		}
	}
}
