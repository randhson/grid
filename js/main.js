window.onload = function() {

	var ajax = null;
    var ajax2 = null;
	if( window.XMLHttpRequest ) {   
		ajax = new XMLHttpRequest();
		ajax2 = new XMLHttpRequest();
	} else if( window.ActiveXObject ) {
		ajax = new ActiveXObject('Msxml2.XMLHTTP');	
		ajax2 = new ActiveXObject('Msxml2.XMLHTTP');	
	}
	
	}

	document.getElementById("click").onclick = function() {
		
		ajax.open("GET","img.txt",true);
		ajax.send(null);
		
        ajax2.open("GET","desc.txt",true);
		ajax2.send(null);

		ajax.onreadystatechange = function() { 
		
			if ( ajax.readyState == 4 ) {
				
				if ( ajax.status == 200 ) {
					document.getElementById("imgP").innerHTML = ajax.responseText;						
				}
				
			}
		}

		ajax2.onreadystatechange = function() { 
		
			if ( ajax2.readyState == 4 ) {
				
				if ( ajax2.status == 200 ) {
					document.getElementById("descP").innerHTML = ajax2.responseText;						
				}
				
			}
		}
	}

	document.getElementById("outros").onclick = function() {
		
		ajax.open("GET","text2.txt",true);
		ajax.send(null);
		
		ajax.onreadystatechange = function() { 
		
			if ( ajax.readyState == 4 ) {
				
				if ( ajax.status == 200 ) {
					document.getElementById("janela").innerHTML = ajax.responseText;						
				}
				
			}
		}
	}

	document.getElementById("mais").onclick = function() {
		
		ajax.open("GET","text3.txt",true);
		ajax.send(null);
		
		ajax.onreadystatechange = function() { 
		
			if ( ajax.readyState == 4 ) {
				
				if ( ajax.status == 200 ) {
					document.getElementById("janela").innerHTML = ajax.responseText;						
				}
				
			}
		}
	}
}