var random1 = Math.floor((Math.random() * 6) + 6);
var random2 = Math.floor((Math.random() * 6) + 6);

var deg1 = Math.floor(random1*60) + 2160;
var deg2 = Math.floor(random2*60) + 2160;



function spin(){
 document.getElementById("rad-left").style.WebkitTransform= "rotate(-"+deg1 +"deg)";
 document.getElementById("rad-left").style.transform= "rotate(-"+deg1 +"deg)";

 document.getElementById("rad-right").style.WebkitTransform= "rotate(-"+deg2 +"deg)";
 document.getElementById("rad-right").style.transform= "rotate(-"+deg2 +"deg)";
var interval = setInterval(function(){
 document.getElementById('scoretotal').value=random1 + random2 - 10;
 }
 ,8000);
 
}
//-----------------------------------------------------------------------
function calculate(){
var option = document.getElementById("option");
var selection = option.options[option.selectedIndex].value;
	if (selection == "tafels") {
    tafels();
	}
	else if (selection == "machten") {
    machten();
} 
else if (selection == "breuken") {
	breuken()
} 
	else if (selection == "kwadraten") {
	kwadraten()
}
}

function tafels(){  
var van = document.getElementById("van").value;  
var tot = document.getElementById("tot").value;  

for (i=1; i<= tot; i++){
	var uit = van * i;
	var out = i + " * " + van+ " = " + uit;
	document.getElementById('output').innerHTML+=out+"<br/>";
}
}

function machten(){  
var van = document.getElementById("van").value;  
var tot = document.getElementById("tot").value;  

for (i=0; i <= tot;i++){
	var uit = Math.pow(van,i);
	var out = van+ " ^ " + i + " = " + uit;
	document.getElementById('output').innerHTML+=out+"<br/>";
}
}

function breuken(){
var van = document.getElementById("van").value;
var tot = document.getElementById("tot").value;

for (i=van; i <= tot;i++){
	var uit = 1/i;
	var out = 1+ "/" + i + " = " + uit;
	document.getElementById('output').innerHTML+=out+"<br/>";
}
}

function kwadraten(){
var van = document.getElementById("van").value;
var tot = document.getElementById("tot").value;

for (i=van; i <= tot;i++){
	var uit = i*i;
	var out = i+ "&sup2;"+" = " + uit;
	document.getElementById('output').innerHTML+=out+"<br/>";
}
}
//----------------------------------------------------------------
function reloadPage(){
    location.reload(true);
}
//-------------------------------------------------------------------
  function getPriemen() {
 
        var max = document.getElementById("maxpriem").value;
        var priemLijst = "";
 
        // initialiseer een Array van alle getallen van 2 to max
        // wijs 1 toe, hetgeen voorlopig betekent 'mogelijk een priem'
        var getallen = new Array();
        for (var i = 2; i <= max; i++) {
            getallen[i] = 1;
        }
 
       // Zoek de niet-priemen: ken 0 toe aan elke niet-priem
       for (var i = 2; i*i < max; i++) {
           if (getallen[i] == 1) {
               for (var j = i * i; j <= max; j += i) {
                       getallen[j] = 0; // Getal is een veelvoud, dus geen priem: wijs 0 toe.
               }
           }
       }
 
       // ieder getal dat nu nog op 1 staat is inderdaad een priem.
       for (var i = 0; i <= max; i++) {
           if (getallen[i] == 1) {
               priemLijst += i + ". ";
           }
       }
 
       return priemLijst;
 
    }
	//--------------------------------------------------------------------//
	
function decimalen()
{

	var dnum=parseInt(document.getElementById("decimalen_input").value);
	var dno=new Number(dnum);
	if(!isNaN(dno))
	{
	document.getElementById("binair_input").value=dno.toString(2);
	document.getElementById("hexadecimalen_input").value=dno.toString(16);
	}
}
function binair(bn)
{
	var len=bn.length;
	var tot=0;
	var i,j;
	for(i=0,j=len-1;i<len;i++,j--)
	{	
		tot=tot+parseInt(bn.charAt(i))*Math.pow(2,j);
	}
	var dec=new Number(tot);
	document.getElementById("decimalen_input").value=dec;
	document.getElementById("hexadecimalen_input").value=dec.toString(16);

}

function hexadecimalen(hd)
{
	var len=hd.length;
	var tot=0;
	var i,j;
	for(i=0,j=len-1;i<len;i++,j--)
	{	
		ch=hd.charAt(i);
		if(ch=="a" || ch=="A")
		{	
			tot=tot+10;
		}
		else if(ch=="b" || ch=="B")
		{
			tot=tot+11;
		}
		else if(ch=="c" || ch=="C")
		{
			tot=tot+12;
		}
		else if(ch=="d" || ch=="D")
		{
			tot=tot+13;
		}
		else if(ch=="e" || ch=="E")
		{
			tot=tot+14;
		}
		else if(ch=="f" || ch=="F")
		{
			tot=tot+15;
		}
		else
		{
			tot=tot+parseInt(hd.charAt(i))*Math.pow(16,j);
		}
	}
	var dec=new Number(tot);
	document.getElementById("decimalen_input").value=dec;
	document.getElementById("binair_input").value=dec.toString(2);

}

function controleer_decimalen(event,no)
{
var kc;
if(window.event)
{
	kc=event.keyCode;
}
else
{
	kc=event.which;
}
var num=no.value;
if (kc!=8 && kc!=0)
{
	if (kc<48||kc>57)
	{
		return false;
	}
} 

}
function controleer_binair(event,no)
{
var kc;
if(window.event)
{
	kc=event.keyCode;
}
else
{
	kc=event.which;
}
var num=no.value;
if (kc!=8 && kc!=0)
{
	if (kc!=48 && kc!=49)
	{
		return false;
	}
} 

}



function controleer_hexadecimaal(event)
{
var kc;
if(window.event)
{
	kc=event.keyCode;
}
else
{
	kc=event.which;
}

	if (kc>=65 && kc<=70)
	{
		return true;
	}
	else if (kc>=97 && kc<=102)
	{
		return true;
	}
	else if (kc>=48 && kc<=57)
	{	
		return true;
	}
	else if (kc==8)
	{	
		return true;
	}
	else if (kc==0)
	{	
		return true;
	}
	else
	{
 		return false;
	}
}


//factorizer
function factor(){
    
      
      var getal = document.getElementById('number').value;                      
      var result = "";
      var priem = 2;   
      while (priem*priem <= getal){ 
      if (getal % priem == 0){
      result = result + priem;     
      getal = getal/priem;          
      if (getal != 1){
      result = result + "*";      
      }
      }else{
      priem++;                     
      }
      } 
      if (getal != 1){                                     
      result =  result + getal;          
      }
      if (result == "" + result){                
      result = "" + result;
      document.getElementById('antwoorden').innerHTML = result;
      }
	  }
	  
//Shoot the pig


function shootthepig(){
	window.posvarken = Math.ceil(Math.random()*1000)+100;
	var varken = document.getElementById('pig');
	varken.style.left=posvarken+'px';
}
function hoek(waarde){
	var draai = waarde-90;
	var charmander = document.getElementById('cannon');
	charmander.style.transform='rotate('+draai+'deg)';
	charmander.style.webkitTransform='rotate('+draai+'deg)';
}

function schiet(){
	var schiethoek = parseInt(document.getElementById('hoek').value);
	var v = parseInt(document.getElementById('snelheid').value);
	var vuurbal = document.getElementById('vuurbal');
	var t =0;
	var x = 20;
	var y = 60;
	var a = (schiethoek/180) * Math.PI;

	var h=208;
	var vh = v*Math.sin(a)
	var vv = v*Math.cos(a);
	var g = 4.905;
	
	vuurbal.style.opacity=1;
	
	var kogel = document.getElementById('cannon');
	

	
	var time = setInterval(function (){
		x = 20 + vh * t;
		y = g *Math.pow(t, 2)-vv*t+60;
		t = t + 0.04
		vuurbal.style.top=y+'px';
		vuurbal.style.left=x+'px';
		
		if(y>410){
		clearInterval(time);
			if(x>posvarken-50 && x<posvarken+50){
				alert('Raak!');
				shootthepig();
				vuurbal.style.opacity=0;
			}
		}
		if(x>1100){
			clearInterval(time);
		}

		
		
		

	},1);
	
	
	
	var x = 0 + vh * t;
	var y = g *Math.pow(t, 2)-vv*t+208;
	
	
	
	

}

