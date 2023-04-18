function Generate(){
  var text = document.getElementById("text");

  var imgg = document.getElementById("qrimg");
 
  if(text.value.length >0){
    imgg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    console.log("clicked")
  }

  
}
var imgg = document.getElementById("qrimg");

let btndownload = document.getElementById('btn');
btndownload.addEventListener('click',()=>{
  let imgPath = imgg.getAttribute('src');
  let fileName = getFileName(imgPath);
  console.log("clicked");

  saveAs(imgPath,fileName);
  console.log(imgPath)
})
function getFileName(str){
  return str.substring(str.lastIndexOf('=')+1)
}