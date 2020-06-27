var lang = document.getElementsByClassName("languages");
var Code = document.getElementsByTagName("textarea");
function Remove() {
	lang[lang.length - 1].remove();
	Code[Code.length - 1].remove();
}
function Insert() {
	var coder = document.getElementById("coder");
	input = document.createElement('input');
	input.setAttribute("class", "languages");
	input.setAttribute("list", "languages");
	textarea = document.createElement('textarea');
	br = document.createElement('br');
	coder.appendChild(br);
	coder.appendChild(input);
	coder.appendChild(br.cloneNode(true));
	coder.appendChild(textarea);
	coder.appendChild(br.cloneNode(true));
	coder.appendChild(br.cloneNode(true));
}
function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&")
		.replace(/</g, "<")
		.replace(/>/g, ">")
		.replace(/"/g, """)
		.replace(/'/g, "'");
}
var a1 = '<!DOCTYPE html><html><head><meta charset="UTF8"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/line-numbers/prism-line-numbers.min.css"/><link rel="stylesheet" href="style.css"/></head><body><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/prism.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/line-numbers/prism-line-numbers.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/autoloader/prism-autoloader.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/toolbar/prism-toolbar.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"><\/script>';
var a3 = '<script src="script.js"><\/script><script>window.onload = StartAction();<\/script><\/body><\/html>';
function Generate() {
	document.getElementById("result").innerHTML = escapeHtml(a1);
	var display = "block";
	var i;
	for (i = 0; i < lang.length; i++) {
		document.getElementById("result").innerHTML += escapeHtml('<coderjs language=' + lang[i].value + ' index=1 display=' + display + '>' + escapeHtml(Code[i].value) + '</coderjs>');
		if (i == 0) {
			display = "none";
		}
	}
	document.getElementById("result").innerHTML += escapeHtml(a3);
}