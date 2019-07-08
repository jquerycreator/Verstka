window.onload=()=>{
 	var DataSave;
 	var td=document.querySelector("table");

 	    td.onmouseover=()=>{
 	    if(event.target.tagName!="DIV")return
 		event.target.style.background = 'rgb(242,79,100)';
 		DateSave=event.target.textContent
 		event.target.textContent=[Math.floor(Math.random()*35)+5]+"'C"
 	}
 	    td.onmouseout=()=>{
 	    if(event.target.tagName!="DIV")return
 		event.target.style.background = 'white'
 		event.target.textContent=DateSave;
 	}

}
