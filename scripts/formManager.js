var currentPage = 0;

showPage(currentPage);
function showPage(pagenum){
	var page = document.getElementsByClassName("page");
	page[currentPage].style.display = "block";
	if (currentPage ==0){
		document.getElementById("previous").style.display = "none";
	}
	
	else {
		document.getElementById("previous").style.display = "inline";
	}
	
	if (currentPage == page.length-1){
		document.getElementById("next").innerHTML = "submit";
	}
	
	else{
		document.getElementById("next").innerHTML = "next";
	}
	
	
	fixPageNum();
}

function validateForm(){
	var page = document.getElementsByClassName("page");
	var individualElement = page[currentPage].getElementsByTagName("*")
	var pageValid = true;
	
	for (let i=0; i<individualElement.length; i++){
		if((individualElement[i].tagName == "INPUT" || individualElement[i].tagName == "SELECT" || individualElement[i].tagName == "TEXTAREA")&&(individualElement[i].type!="reset")){
			if(individualElement[i].value==""){
				pageValid=false;
				individualElement[i].className += " invalid";
			}
		}
	
	}
return pageValid;
}


function fixPageNum(){
	document.getElementById("pagenumber").innerHTML= "Page "+(currentPage+1)+" of 2";
}

function turnPage(n){
	var page = document.getElementsByClassName("page");
	
	if (n == 1 && !validateForm()){
		return false;
	}
	
	page[currentPage].style.display = "none";
	
	currentPage += n;
	console.log(currentPage);
	if (currentPage>=page.length){
		document.getElementById("form").submit();
		return false;
	}
	showPage(currentPage);
}