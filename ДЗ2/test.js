'use strict'
window.onload=()=>{
 	let table=document.querySelector("table")
 	let tr=table.getElementsByTagName("tr")
 	let td=[]
 	for( let i of tr){td.push(i.getElementsByTagName("td"))}
    var index=[0,0]
 	table.onmouseover=(e)=>{
        let cell = e.target;
        if(cell.tagName!="TD")return;
        var iz = cell.parentNode.rowIndex;
        var j = cell.cellIndex;
        console.log(iz,j);
        for(let i of td[iz])i.style.background="rgba(255,255,255,0.3)"
 		for(let i=1;i<tr.length;i++)
 		   td[i][j].style.background="rgba(255,255,255,0.3)"
 		td[iz][j].style.background = 'rgba(255,255,255,0.5)'
 		td[iz][j].style.cursor = 'pointer'
 	}
 	table.onmouseout=(e)=>{
 		 for(let i=1;i<tr.length;i++)
 		 	for(let y=0;y<td[i].length;y++)
 			 td[i][y].style.background="none"

 	}
}