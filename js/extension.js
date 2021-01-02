function changeSub(flag) {
	if (flag == "education") {
		document.getElementById("education").style.display = "";
		document.getElementById("unit").style.display = "none";
		document.getElementById("achievement").style.display = "none";
		document.getElementById("follows").style.display = "none";
	} else if (flag == "unit") {
		document.getElementById("education").style.display = "none";
		document.getElementById("unit").style.display = "";
		document.getElementById("achievement").style.display = "none";
		document.getElementById("follows").style.display = "none";
	} else if (flag == "achievement") {
		document.getElementById("education").style.display = "none";
		document.getElementById("unit").style.display = "none";
		document.getElementById("achievement").style.display = "";
		document.getElementById("follows").style.display = "none";
	} else if (flag == "follows") {
		document.getElementById("education").style.display = "none";
		document.getElementById("unit").style.display = "none";
		document.getElementById("achievement").style.display = "none";
		document.getElementById("follows").style.display = "";
	}
}

function toMod() {
	window.location = "/yjrc/person/ApplyCardAction.do?formAction=cApply";
}

function back() {
	window.location = "/yjrc/person/ApplyListAction.do?formAction=in&opType=cApply";
}

function queryEdu(id) {
	var goUrl = "/yjrc/person/QueryEduResumAction.do?formAction=in&applyId=" + id;
	window.open(goUrl, 'querywindow', 'width=1030,height=420,top=10,left=10,status=yes,menubar=no,resizable=yes,scrollbars=yes');
}

function queryWork(id) {
	var goUrl = "/yjrc/person/QueryWorkResumAction.do?formAction=in&applyId=" + id;
	window.open(goUrl, 'querywindow', 'width=1030,height=420,top=10,left=10,status=yes,menubar=no,resizable=yes,scrollbars=yes');
}