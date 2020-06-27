function openCity(evt, cityName, index) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent" + index);
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
var Coder = document.getElementsByTagName("coderjs");
function CreateElement(language, code, index, display, i) {
	var tablinks = String.raw `<button class="tablinks" onclick="openCity(event, '` + language + index + `',` + index + `)">` + language + `</button>`
	var TabDiv = String.raw `<div class="tab tab` + index + `" id="tab` + index + `"></div>`
	if (!Coder[i].innerHTML.includes(TabDiv)) {
		Coder[i].innerHTML += TabDiv.trim();
	}
	document.getElementById('tab' + index).innerHTML += tablinks.trim();
	if (Coder[i].innerHTML.includes(code)) {
		Coder[i].innerHTML = Coder[i].innerHTML.replace(code, '').trim();
	}
	var Codes = String.raw `<div id="` + language + index + `" class="tabcontent tabcontent` + index + `" style="display:` + display + `;"><pre><code class="language-` + language + ` line-numbers">` + code.trim() + `</code></pre></div>`
	Coder[i].innerHTML += Codes.trim();
}
function SetTheme() {
	var theme = [
		"-okaidia", //theme[0]
		"-coy", //theme[1]
		"-dark", //theme[2]
		"-funky", //theme[3]
		"-solarizedlight", //theme[4]
		"-tomorrow", //theme[5]
		"-twilight", //theme[6]
		"", //Default Theme                 //theme[7]  
		null //No syntax highlighting        //theme[8]  
	];
	var SelectedTheme = theme[0];
	var URL = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism" + SelectedTheme + ".min.css"
	if (SelectedTheme != null) {
		document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="' + URL + '"/>';
	}
}
function StartAction() {
	SetTheme();
	for (var i = 0; i < Coder.length; i++) {
		CreateElement(
			Coder[i].getAttribute("language"),
			Coder[i].innerHTML,
			Coder[i].getAttribute("index"),
			Coder[i].getAttribute("display"),
			i
		);
	}
}