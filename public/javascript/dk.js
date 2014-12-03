function shoh(id) { 

	if (document.getElementById(id).style.display == "none"){
			document.getElementById(id).style.display = 'block';	
	} else {
			document.getElementById(id).style.display = 'none';			
	}	
}

function show(id){
	//document.getElementById(id).style.display = '';
	$("#" + id).fadeIn('slow');
}

function hide(id) {
	//document.getElementById(id).style.display = 'none';
	$("#" + id).fadeOut('slow');
}




//Modified version of http://www.javascriptkit.com/script/script2/calculateage.shtml
function dateCheck(){
	var one_year=1000*60*60*24*30*12;
	today=new Date();
	today.getDay();
	theForm = document.getElementById('page1Form');
	var jsDob = theForm.dob.value;
	var birthDate = parseDate(jsDob, 'euro');
	if (birthDate == null){
		 return false;
	} else{
		var years = Math.floor((today.getTime() - birthDate.getTime())/one_year);
		var pastdate = birthDate;
		yearspast=today.getFullYear() -birthDate.getFullYear() -1;
		tail=(today.getMonth() > birthDate.getMonth() -1 || today.getMonth()==birthDate.getMonth()-1 && today.getDate()>=birthDate.getDay())? 1 : 0;
		pastdate.setFullYear(today.getFullYear());
		pastdate2=new Date(today.getFullYear()-1, birthDate.getMonth()-1, birthDate.getDay());
		tail=(tail==1) ? tail + Math.floor((today.getTime()-pastdate.getTime())/one_year): Math.floor((today.getTime()-pastdate2.getTime())/one_year);
		years = yearspast + tail;
//		window.alert("years = " + years);
		
		if(years < 26){
			return true;
		} else {
			return false;
		}
//		window.alert("value of difference = " + years + " birth date = " + birthDate + " today = " + today);
	}
	
	
}

function dateConvDob(elem){
    
    var properFormat = isDate(elem.value, "d/M/y");

    if(properFormat){
        elem.value = formatDate(new Date(getDateFromFormat(elem.value,"d/M/y")),"dd/MM/yyyy");
    } else {
        var internalFormat = isDate(elem.value, "dMy");              
        if(internalFormat){
            elem.value = formatDate(new Date(getDateFromFormat(elem.value,"dMy")),"dd/MM/yyyy");
        }
    }
}

