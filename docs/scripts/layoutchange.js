var sidebarClosed = false;

function closeSidebar() {
	var sidebar = document.getElementById("sidebar");
	var mainArticleMargin = document.getElementById("main");
	var sidebarBtn= document.getElementById("sidebarbtn");
	var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;
	if (sidebarClosed == false){

		if(bodyWidth>750){
			sidebar.style.left ="-325px";
			mainArticleMargin.style.marginLeft = "25px";

		}
		
		else{
			sidebar.style.top = "-55px";
			mainArticleMargin.style.marginTop = "25px";
			sidebarBtn.innerHTML = "open navigation";
		}
		
			sidebarClosed = true;
			console.log("sidebarclosed");
			
	}
	else {
		
		
		if(bodyWidth>750){
			sidebar.style.left ="0";
			mainArticleMargin.style.marginLeft = "350px";

		}
		
		
		else{
			sidebar.style.top = "0";
			mainArticleMargin.style.marginTop = "80px";
			sidebarBtn.innerHTML = "close navigation";
		}
		
			sidebarClosed = false;
			console.log("sidebaropen");
			
	}

}

function fixSidebar(){
	var sidebar = document.getElementById("sidebar");
	var mainArticleMargin = document.getElementById("main");
	var sidebarBtn= document.getElementById("sidebarbtn");
	var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;
	if(bodyWidth > 750){
		sidebar.style.top = "0";
		mainArticleMargin.style.marginTop = "5px";
		sidebarBtn.innerHTML = "||";
		if(sidebarClosed==true){
			
			sidebar.style.left = "-325px";
			mainArticleMargin.style.marginLeft = "25px";
			
		}
		
		else{
			sidebar.style.left = "0";
			mainArticleMargin.style.marginLeft = "350px";
			
		
		}
		
		
		
	
	}
	else{
		sidebar.style.left = "0";
		mainArticleMargin.style.marginLeft = "0px";	
		if(sidebarClosed==true){
			
			sidebar.style.top = "-55px";
			mainArticleMargin.style.marginTop = "25px";
			sidebarBtn.innerHTML = "open navigation";
			
		}
		
		else{
			sidebar.style.top = "0";
			mainArticleMargin.style.marginTop = "80px";
			sidebarBtn.innerHTML = "close navigation";
		
		}
		
		
	}

}

function changeWelcomeText(){
	var welcomeText = document.getElementById("welcometext");
	var greeting = "Welcome to Once Upon a Crowd, a unique canvas for writers all over the internet. Here, you will be able to collaborate with writers from all over the internet, producing beautiful stories together. To get started, click 'Contribute' in the navigation bar";
	if (document.getElementsByTagName("body")[0].clientWidth >750){
		welcomeText.innerHTML = greeting + " to the left.";
	}
	
	else{
		
		welcomeText.innerHTML = greeting + " above.";
	}
}


window.onresize = function(){
	var sidebarTimer;
	var welcomeTextTimer;
	clearTimeout(sidebarTimer);
	clearTimeout(welcomeTextTimer);
	sidebarTimer = setTimeout(fixSidebar(), 250);
	welcomeTextTimer = setTimeout(changeWelcomeText(), 250);
};
