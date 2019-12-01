function inject_Menu() {
    var str = "";
	str +="<nav class=\"navbar navbar-expand-sm navbar-light\">";
	str +="<ul class=\"navbar-nav\">";
	str +="<li class=\"nav-item dropdown\">";
	str +="<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">Home</a>";
	str +="<div class=\"dropdown-menu\">";
	str +="<a class=\"dropdown-item\" href=\"Welcome.html\">Welcome</a>";
	str +="<a class=\"dropdown-item\" href=\"About.html\">About</a>";
	str +="</div>";
	str +="</li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"GettingStarted.html\" >Getting Started</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"Topics.html\" >Topics</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"References.html\" >References</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"Other_Tutorials.html\" >Other Tutorials</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"Other_Topics.html\" >Other Topics</a></li>";
	str +="<li class=\"nav-item\"><a class=\"nav-link\" href=\"FAQ.html\" >FAQ</a></li>";
	str +="</ul>";
	str +="</nav>";
    $("#menu").html(str);
}
