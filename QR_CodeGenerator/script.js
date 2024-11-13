function bodyload(){
// document.getElementById("txtInput").innerHTML="";

}
function generateQR(){
   let inputData= document.getElementById("txtInput").value;
   console.log(inputData);
   API_URL=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;
   let result=API_URL+encodeURI(inputData);
   console.log(result);
   let qrImage=document.getElementById("ResultQR");
   qrImage.src=result;
   document.getElementById("inputResult").innerText=inputData;
   document.getElementById("txtInput").value="";

}