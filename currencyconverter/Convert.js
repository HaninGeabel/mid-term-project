window.onload=current_date_function;
function current_date_function()
{
	
	var current_date = new Date()
	var formatte = current_date.getDate() + "/" + (current_date.getMonth() + 1) + "/" + current_date.getFullYear()


	document.getElementById("current_Date").innerHTML = formatte;
}

var Eu2Us= 0.92 ;

var cad2us=  1.29;

var Eur2Bit= 0.000026 ;

 var Bit2Us= 0.000024;

var Eth2Us=  0.00037 ;

var cad2Eth= 3489.14 ;

var Eur2Eth= 0.00040;

var cad2Bit= 0.000019 ;

var Bit2Eth= 15.27;

var cad2Eu= 0.71;

var rate;
function fromCurr1ToCurr2(curr1, curr2, amount){
/* 1 US =0.92EU */

if (curr1=='CND' && curr2=='USD'){
	rate = cad2us;
}
else if (curr1=='USD' && curr2=='CND'){
	rate = 1/cad2us;
}
else if (curr1=='CND' && curr2=='Euro'){
	rate = cad2Eu;
}
else if (curr1=='Euro' && curr2=='CND'){
	rate = 1/cad2Eu;
}
else if (curr1=='CND' && curr2=='Bitcoin'){
	rate = cad2Bit;
}
else if (curr1=='Bitcoin' && curr2=='CND'){
	rate = 1/cad2Bit;
}
else if (curr1=='CND' && curr2=='Ethereum'){
	rate = cad2Eth;
}
else if (curr1=='Ethereum' && curr2=='CND'){
	rate = 1/cad2Eth;
}

else if (curr1=='Euro' && curr2=='USD'){
	rate = Eu2Us;
}
else if (curr1=='USD' && curr2=='Euro'){
	rate = 1/Eu2Us;
}
else if (curr1=='Euro' && curr2=='Bitcoin'){
	rate = Eur2Bit;
}
else if (curr1=='Bitcoin' && curr2=='Euro'){
	rate = 1/Eur2Bit;
}
else if (curr1=='Euro' && curr2=='Ethereum'){
	rate = Eur2Eth;
}
else if (curr1=='Ethereum' && curr2=='Euro'){
	rate =1/ Eur2Eth;
}

else if (curr1=='Bitcoin' && curr2=='USD'){
	rate = Bit2Us;
}
else if (curr1=='USD' && curr2=='Bitcoin'){
	rate =1/ Bit2Us;
}
else if (curr1=='Bitcoin' && curr2=='Ethereum'){
	rate = 1/Bit2Eth;
}
else if (curr1=='Ethereum' && curr2=='Bitcoin'){
	rate = Bit2Eth;
}

else if (curr1=='Ethereum' && curr2=='USD'){
	rate =1/ Eth2Us;
}
else if (curr1=='USD' && curr2=='Ethereum'){
	rate = Eth2Us;
}
else{
	return alert("choose another currency"); 
}
var newAmount = rate*amount;

return  newAmount;
}

function output(amount){
var amount1=amount;
var select1 = document.getElementById('money_type');
var curr1 = select1.options[select1.selectedIndex].value;

var select2 = document.getElementById('convertTo');
var curr2 = select2.options[select2.selectedIndex].value;
		
var convertedAmount = fromCurr1ToCurr2(curr1, curr2, amount1);	
var final= convertedAmount.toFixed(2);
var finalF=final + " "+curr2 +"("+ rate.toFixed(3)+":1)";
		
		ConvertionValue1.value= finalF;
	}	

