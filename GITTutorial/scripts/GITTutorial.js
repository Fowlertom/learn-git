function Create_Menu_HTML() {
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
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"HowDoI.html\" >How Do I...</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"git_commands.html\" >GIT Commands</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"actions_remote.html\" >Remote Actions</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"Resources.html\" >Resources</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"GitFlow.html\" >GitFlow</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"glossary.html\" >Glossary</a></li>";
	str += "<li class=\"nav-item\"><a class=\"nav-link\" href=\"FAQ.html\" >FAQ</a></li>";
	str +="</ul>";
	str +="</nav>";
	return str;
}

function Create_Copy_HTML() {
    var str = "";
    str +="<i class=\"fa fa-copy\" style=\"font-size:24px\" title=\"Copy command\"/>";
    return str;
}

//******************************************************************************************
// UI Initializers
//******************************************************************************************

function UIInitialize_BasePage() {
    UIInitialize_BasePageMenu();
    UIInitialize_HideDivs();
}

function UIInitialize_SubFolderPage() {
    UIInitialize_SubFolderPageMenu();
    UIInitialize_HideDivs();
}


function UIInitialize_BasePageMenu() {
    var str = Create_Menu_HTML();
    $("#menu").html(str);

    str = Create_Copy_HTML();
    $(".copy").html(str);
}

function UIInitialize_SubFolderPageMenu() {
	// https://flaviocopes.com/javascript-regular-expressions/#groups

	var replacedStr = Create_Menu_HTML();
	
	replacedStr = replacedStr.replace('href=\"#\"','hrXef=\"#\"');
	replacedStr = replacedStr.replace(/href=\"/g,'href=\"..//');
	replacedStr = replacedStr.replace('hrXef=\"#\"','href=\"#\"');
    $("#menu").html(replacedStr);

    var str = Create_Copy_HTML();
    $(".copy").html(str);

}

function UIInitialize_HideDivs() {
    $(".DivIsInitiallyHidden").css("display", "none");
}



//******************************************************************************************
// Event Handlers
//******************************************************************************************
function EventHandler_AccordionClick() {
    var iconClassName;
    //open and close the accordions
    $('.accordion')
        .find('.accordion-toggle')
        .click(function () {
            //Expand or collapse this panel
            var thisID = $(this);

            var chevronIcon = thisID[0].childNodes[1].childNodes[0];
            if (chevronIcon.tagName == "I" && chevronIcon.classList[0] == "fa") {
                iconClassName = chevronIcon.classList[1];
                if (iconClassName == "fa-angle-double-down")
                    $(chevronIcon).toggleClass("fa-angle-double-down fa-angle-double-right");
                else
                    $(chevronIcon).toggleClass("fa-angle-double-right fa-angle-double-down");
            }
            var nextID = thisID.next();
            nextID.slideToggle('fast');
        });
}

function EventHandler_CopyClick() {
    $('.fa-copy').click(function () {
        var thisID = $(this);
        var target = thisID[0].parentElement.parentElement.previousSibling;
        copyToClipboard(target);
        }
    );
}


function EventHandlers_Register() {

    EventHandler_AccordionClick();
    EventHandler_CopyClick();
}


//https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
function copyToClipboard(elem) {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}
