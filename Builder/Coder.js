var lang = document.getElementsByClassName("languages");
var Code = document.getElementsByTagName("textarea");
var theme = document.getElementById("themes");
var Showtabs = document.getElementById("ShowTabs");

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
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }




function Generate() {

	document.getElementById("result").value = '';
	for (var i = 0; i < lang.length; i++) {
		document.getElementById("result").value += '<textarea language="' + lang[i].value + '" index="1" display="' + (Showtabs.value == 'true' ? (i == 0 ? 'block' : 'none') : 'block') + '" id="coderjs">' + Code[i].value + '</textarea>';
	}
	document.getElementById("result").value += '<script src="https://cdn.jsdelivr.net/gh/DarkSecDevelopers/CoderJs/Codes/script.min.js"><\/script><script>SetTheme("' + (theme.value == '-Default' ? '' : theme.value) +'");ShowTabs=' + Showtabs.value + ';window.onload = StartAction();<\/script>';
}