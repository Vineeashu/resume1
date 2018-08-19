function json(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState=="4" && xhr.status===200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
json("d.json",function(text){
	var d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	carrer(d.carrerobjectives);
	edu(d.education);
	techskills(d.technicaldetails);
	ach(d.achievements);
	descrip(d.description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basic){
	var i=document.createElement("img");
	i.src=basic.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=basic.name;
	l.appendChild(nam); 
	var em=document.createElement("h3");
	em.textContent=basic.email;
	l.appendChild(em);
	var p=document.createElement("h3");
	p.textContent=basic.phone;
	l.appendChild(p);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(ed) {
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
    var head=document.createElement("h1");
    head.textContent="Educational Details";
    e1.appendChild(head);
    head.appendChild(document.createElement("HR"));
    for (var i = 0; i<ed.length; i++){
    	var h=document.createElement("h2");
    	h.textContent=ed[i].course;
    	e1.appendChild(h);
    	var u=document.createElement("ul");
    	e1.appendChild(u);
    	var  list=document.createElement("li");
    	list.textContent=ed[i].college;
    	u.appendChild(list);
    	var l1=document.createElement("li");
    	l1.textContent=ed[i].course;
    	list.appendChild(l1);
    } 
}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="technicaldetails";
	r.appendChild(d);
	d.appendChild(document.createElement("HR"));
	var tab=document.createElement("table");
	var row="";
	for(var i=0;i<s.length;i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].contents+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carrer(ca){
	var c1=document.createElement("div");
	c1.textContent="carrerobjectives";
	r.appendChild(c1);
	c1.appendChild(document.createElement("HR"));
	var c2=document.createElement("h2");
	c2.textContent=ca.c;
	c1.appendChild(c2);
}
function ach(ac){
	var a1=document.createElement("div");
	a1.textContent="achievements";
	r.appendChild(a1);
	a1.appendChild(document.createElement("HR"));
	var a2=document.createElement("h2");
	for(i in ac){
		var u=document.createElement("ul");
		a1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ac[i];
		u.appendChild(list);
	}
}
function descrip(ds){
	var d1=document.createElement("div");
	d1.textContent="description";
	r.appendChild(d1);
	d1.appendChild(document.createElement("HR"));
	var d2=document.createElement("h3");
	d2.textContent=ds.d;
	d1.appendChild(d2);
}