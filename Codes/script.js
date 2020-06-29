function openCity(evt, cityName, index) {
	var tabcontent = document.getElementsByClassName("tabcontent" + index);
	for (var i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
	var tablinks = document.getElementsByClassName("tablinks");
	for (var i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
var Coder = document.getElementsByTagName('coderjs');
var ShowTabs;
function CreateElement(language, code, index, display, i) {
	if(ShowTabs == true)
	{
		var TabDiv = '<div class="tab tab' + index + '" id="tab' + index + '"></div>';
		if (!Coder[i].innerHTML.includes(TabDiv)) {Coder[i].innerHTML += TabDiv.trim();}	
		document.getElementById('tab' + index).innerHTML += '<button class="tablinks' + (i == 0  ? ' active' : '') + '" onclick="openCity(event, \'' + language + index + '\',' + index + ')">' + language + '</button>'.trim();
	}
	if (Coder[i].innerHTML.includes(code)) {Coder[i].innerHTML = Coder[i].innerHTML.replace(code, '').trim();}
	Coder[i].innerHTML +=  '<div id="' + language + index + '" class="tabcontent tabcontent' + index + '" style="display:' + display + ';"><pre><code class="language-' + language + ' line-numbers">' + code.trim() + '</code></pre></div>'.trim();
}

function SetTheme(theme) {document.write('<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism' + theme + '.min.css" rel="stylesheet">');}

function StartAction() {
var Coderjs = document.getElementsByTagName('textarea');
var i = Coderjs.length;
while (i--) {if (Coderjs[i].id == "coderjs") {var h = Coderjs[i].outerHTML;Coderjs[i].outerHTML = h.substring(0, 9).replace("<textarea", "<coderjs") + h.substring(9, h.length - 11) + h.substring(h.length - 11, h.length).replace("</textarea>", "</coderjs>");}}
for (var i = 0; i < Coder.length; i++) {CreateElement(Coder[i].getAttribute("language"),Coder[i].innerHTML,Coder[i].getAttribute("index"),Coder[i].getAttribute("display"),i);}
var Codejs = document.getElementById('coderjs');
var Styles = ["https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/plugins/line-numbers/prism-line-numbers.min.css","https://raw.githack.com/DarkSecDevelopers/CoderJs/master/Codes/style.min.css"];

var Scripts = ["prism.min.js","plugins/toolbar/prism-toolbar.min.js","plugins/line-numbers/prism-line-numbers.min.js","plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js","plugins/autoloader/prism-autoloader.min.js"];
var main = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/";
for (var i = 0; i < Styles.length; i++) { document.write('<link href="' + Styles[i] +'" rel="stylesheet">'); }
for (var i = 0; i < Scripts.length; i++) { document.write('<script src="' + main + Scripts[i] + '" type="text/javascript"></script>'); }
}
