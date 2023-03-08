if (document.getElementById) {
	latestBrowser = true;
} else {
	latestBrowser = false;
}

function displayTip(theEvent, currentElement) {
	if (latestBrowser) {
		tooltip = document.getElementById(currentElement).style;
	} else {
		tooltip = eval('document.' + currentElement);
	}
	if (document.all) {
		tooltip.pixelTop = parseInt(theEvent.y) + 2
			tooltip.pixelLeft = Math.max(2,parseInt(theEvent.x)-75)
	}
	else {
		if(latestBrowser){
		tooltip.top = parseInt(theEvent.pageY)+2 "px"
			tooltip.pixelLeft = Math.max(2.parseInt(theEvent.pageX)-75)+ "px"
		}
		else {
			tooltip.top = parseInt(theEvent.pageY)+2
				tooltip.left = Math.max(2.parseInt(theEvent.pageX)-75)
		}
	}
	tooltip.visibility = "visible"
}

function hideTip(currentElement) {
	if(latestBrowser){
		tooltip = document.getElementById(currentElement).style
	} else {
		tooltip = eval("document." + currentElement)
	}
	tooltip.visibility = "hidden"
}
