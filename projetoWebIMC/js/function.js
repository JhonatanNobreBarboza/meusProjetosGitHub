function substituiVirgula(lblIACResultadoM) {
lblIACResultadoM.value = lblIACResultadoM.value.replace(/,/gi, ".");
}

function calculaIMC () {

	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	var resultado = peso/ (altura * altura);
	
	document.getElementById('resultado').value = resultado.toFixed(2);
	
	var linha = document.getElementsByClassName('ln');
	
	if (resultado <16){
		linha[0].style.color = "#ffffff";
		linha[0].style.backgroundColor = "#1E447F";
	}else{
		linha[0].style.color = "";
		linha[0].style.backgroundColor = "";
	}	
	if((resultado >= 16)&&(resultado <=16.99)){
		linha[1].style.color = "#ffffff";
		linha[1].style.backgroundColor = "#1E447F";
	}else{
		linha[1].style.color = "";
		linha[1].style.backgroundColor = "";
	}
	if((resultado >= 17)&&(resultado <=18.49)){
		linha[2].style.color = "#ffffff";
		linha[2].style.backgroundColor = "#1E447F";
	}else{
		linha[2].style.color = "";
		linha[2].style.backgroundColor = "";
	}
	if((resultado >= 18.5)&&(resultado <=24.99)){
		linha[3].style.color = "#ffffff";
		linha[3].style.backgroundColor = "#1E447F";
	}else{
		linha[3].style.color = "";
		linha[3].style.backgroundColor = "";
	}
	if((resultado >= 25)&&(resultado <=29.99)){
		linha[4].style.color = "#ffffff";
		linha[4].style.backgroundColor = "#1E447F";
	}else{
		linha[4].style.color = "";
		linha[4].style.backgroundColor = "";
	}
	if((resultado >= 30)&&(resultado <=34.49)){
		linha[5].style.color = "#ffffff";
		linha[5].style.backgroundColor = "#1E447F";
	}else{
		linha[5].style.color = "";
		linha[5].style.backgroundColor = "";
	}
	if((resultado >= 35)&&(resultado <=39.99)){
		linha[6].style.color = "#ffffff";
		linha[6].style.backgroundColor = "#1E447F";
	}else{
		linha[6].style.color = "";
		linha[6].style.backgroundColor = "";
	}
	if(resultado >= 40){
		linha[7].style.color = "#ffffff";
		linha[7].style.backgroundColor = "#1E447F";
	}else{
		linha[7].style.color = "";
		linha[7].style.backgroundColor = "";
	}
	
	
		
}
function calculaIAC(){
	
	var homem = document.getElementById('radio-homem').checked;
	var lblQuadrilIAC = document.getElementById('lblQuadrilIAC').value;
	var lblAlturaIAC = document.getElementById('lblAlturaIAC').value;
	var lblIACResultadoM = document.getElementById('lblIACResultadoM').value;
	var lblIACResultadoH = document.getElementById('lblIACResultadoH').value;
	
	
	if(homem){
		document.getElementById('tabelaHomem').style.display = "table";
		document.getElementById('tabelaMulher').style.display = "none";
	}else{
		document.getElementById('tabelaHomem').style.display = "none";
		document.getElementById('tabelaMulher').style.display = "table";
	}
	
	raiz = (Math.sqrt(lblAlturaIAC));
	var lblIACResultadoM = lblQuadrilIAC/ (lblAlturaIAC * raiz)-18;
	
	document.getElementById('lblIACResultadoM').value = lblIACResultadoM.toFixed(2);	
	linhaM = document.getElementsByClassName('lnM');
	
	if (lblIACResultadoM <10){
		linhaM[0].style.color = "#ffffff";
		linhaM[0].style.backgroundColor = "#1E447F";
	}else{
		linhaM[0].style.color = "";
		linhaM[0].style.backgroundColor = "";
	}	
	if((lblIACResultadoM >= 10)&&(lblIACResultadoM <=15.99)){
		linhaM[1].style.color = "#ffffff";
		linhaM[1].style.backgroundColor = "#1E447F";
	}else{
		linhaM[1].style.color = "";
		linhaM[1].style.backgroundColor = "";
	}
	if((lblIACResultadoM >= 16)&&(lblIACResultadoM <=19.99)){
		linhaM[2].style.color = "#ffffff";
		linhaM[2].style.backgroundColor = "#1E447F";
	}else{
		linhaM[2].style.color = "";
		linhaM[2].style.backgroundColor = "";
	}
	if((lblIACResultadoM >= 20)&&(lblIACResultadoM <=25.99)){
		linhaM[3].style.color = "#ffffff";
		linhaM[3].style.backgroundColor = "#1E447F";
	}else{
		linhaM[3].style.color = "";
		linhaM[3].style.backgroundColor = "";
	}
	if((lblIACResultadoM >= 26)&&(lblIACResultadoM <=29.99)){
		linhaM[4].style.color = "#ffffff";
		linhaM[4].style.backgroundColor = "#1E447F";
	}else{
		linhaM[4].style.color = "";
		linhaM[4].style.backgroundColor = "";
	}
	if(lblIACResultadoM >= 30){
		linhaM[5].style.color = "#ffffff";
		linhaM[5].style.backgroundColor = "#1E447F";
	}else{
		linhaM[5].style.color = "";
		linhaM[5].style.backgroundColor = "";
	}
	
	raiz = (Math.sqrt(lblAlturaIAC));
	var lblIACResultadoH = lblQuadrilIAC/ (lblAlturaIAC * raiz)-18;
	
	document.getElementById('lblIACResultadoH').value = lblIACResultadoH.toFixed(2);
	linhaH = document.getElementsByClassName('lnH');
	
	if (lblIACResultadoH <6){
		linhaH[0].style.color = "#ffffff";
		linhaH[0].style.backgroundColor = "#1E447F";
	}else{
		linhaH[0].style.color = "";
		linhaH[0].style.backgroundColor = "";
	}	
	if((lblIACResultadoH >= 6)&&(lblIACResultadoH <=10.99)){
		linhaH[1].style.color = "#ffffff";
		linhaH[1].style.backgroundColor = "#1E447F";
	}else{
		linhaH[1].style.color = "";
		linhaH[1].style.backgroundColor = "";
	}
	if((lblIACResultadoH >= 11)&&(lblIACResultadoH <=14.99)){
		linhaH[2].style.color = "#ffffff";
		linhaH[2].style.backgroundColor = "#1E447F";
	}else{
		linhaH[2].style.color = "";
		linhaH[2].style.backgroundColor = "";
	}
	if((lblIACResultadoH >= 15)&&(lblIACResultadoH <=18.99)){
		linhaH[3].style.color = "#ffffff";
		linhaH[3].style.backgroundColor = "#1E447F";
	}else{
		linhaH[3].style.color = "";
		linhaH[3].style.backgroundColor = "";
	}
	if((lblIACResultadoH >= 19)&&(lblIACResultadoH <=23.99)){
		linhaH[4].style.color = "#ffffff";
		linhaH[4].style.backgroundColor = "#1E447F";
	}else{
		linhaH[4].style.color = "";
		linhaH[4].style.backgroundColor = "";
	}
	if(lblIACResultadoH >= 24){
		linhaH[5].style.color = "#ffffff";
		linhaH[5].style.backgroundColor = "#1E447F";
	}else{
		linhaH[5].style.color = "";
		linhaH[5].style.backgroundColor = "";
	}
}