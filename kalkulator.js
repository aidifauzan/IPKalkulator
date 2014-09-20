
//@author: Muhammad Fauzan Aidi

var check = true;//boolean check
var tombol;//button
var totalnilai = 0;//sum of nilai x sks
var totalsks = 0; //sum of sks

var nilai = []; //array of nilai
var sks = []; //array of sks
var total = []; //array of nilai x sks

function start(){
	tombol = document.getElementById("submit").addEventListener("click", calculation, false);		
}

function calculation(){
	
	//put nilai in array
	for(var i=0; i<10; i++){
		var test = document.getElementById('nilai('+i+')').value;
		if(test != ""){
			nilai[i]= test;
		} if(nilai[0] == null){
			window.alert("Tolong isi berurutan mulai dari Mata Kuliah 1.");
			reset();
			break;
		}
	} 
	
	//put sks in array
	for(var i=0; i<10; i++){
		var test = 0;
		test = document.getElementById('sks('+i+')').value;
		if(test != ""){
			sks[i] = +test;
		} if(nilai[i] == null && sks[i] != null){
			wrong();
			break;
		}
	}
	
	//sum the sks
	for(var i=0; i < sks.length; i++){
		totalsks += sks[i];
	}
	
	//do the calculation
	for(var i=0; i<nilai.length; i++){
		if(sks[i] != 0 && sks.length!=0){
			if(nilai[i] == "A"){
				total[i] = +(4*sks[i]);
			}
			else if(nilai[i] == "A-"){
				total[i] = +(3.67*sks[i]);
			}
			else if(nilai[i] == "B+"){
				total[i] = +(3.33*sks[i]);
			}
			else if(nilai[i] == "B"){
				total[i] = +(3*sks[i]);
			}
			else if(nilai[i] == "B-"){
				total[i] = +(2.67*sks[i]);
			}
			else if(nilai[i] == "C+"){
				total[i] = +(2.33*sks[i]);
			}
			else if(nilai[i] == "C"){
				total[i] = +(2*sks[i]);
			}
			else if(nilai[i] == "C-"){
				total[i] = +(1.67*sks[i]);
			}
			else if(nilai[i] == "D+"){
				total[i] = +(1.33*sks[i]);
			}
			else if(nilai[i] == "D"){
				total[i] = +(1*sks[i]);
			}
			else if(nilai[i] == "D-"){
				total[i] = +(0.67*sks[i]);
			}
			else if(nilai[i] == "E+"){
				total[i] = +(0.33*sks[i]);
			}
			else if(nilai[i] == "E"){
				total[i] = +(0*sks[i]);
			}
			else{wrong(); break;}
		} else{wrong(); break;}
	}
	
	//sum the nilai
	for(var i=0; i < total.length; i++){
		totalnilai += total[i];
	}
	result();
}

function wrong(){
	window.alert("Input salah");
	check = false;
	reset();
}
function reset(){
	check = true;
	totalnilai = 0;
	totalsks = 0; 
	nilai.length = 0;
	sks.length = 0;
	total.length = 0; 
}

function result(){
	var tes = 0;
	tes = totalnilai/totalsks;
	var ip = parseFloat(tes).toFixed(2);
	
	if(check){
		if(ip == 4){
			window.alert("Congratulations for cum laude IP: 4.0 !!");
			reset();
		} 
		else if(ip > 3.5){
			window.alert("IP anda: " + ip + " !!  Congrats!!");
			reset();
		} 
		else if(ip > 3){
			window.alert("IP anda: " + ip + " !!   :D");
			reset();
		}
		else if(ip > 2.5){
			window.alert("IP anda: " + ip + " !!   Not Bad..");
			reset();
		} 
		else if(ip > 2){
			window.alert("IP anda: " + ip + " !!   yaudahlah ya..");
			reset();
		} 
		else if(ip <= 2){
			window.alert("IP anda: " + ip + " !!   T_T");
			reset();
		}
	}
}

window.addEventListener("load", start, false);