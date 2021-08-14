const canvas=document.getElementById("canv1");
const context =canvas.getContext('2d');
let isDrawing=false;
let picked=false;
let color='hotpink';
let pinSize=5;
let x=undefined;
let y=undefined;
canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    x=e.offsetX;
    y=e.offsetY;
})
canvas.addEventListener('mouseup' ,(e)=>{
    isDrawing=false;
    x=undefined;
    y=undefined;
})
canvas.addEventListener("mousemove" ,(e)=>{
    if(isDrawing){
        draw(e.offsetX,e.offsetY);
        // console.log(e.clientX);
        // console.log(e.clientY);
    }
})
const draw =(x1,y1)=>{
    // console.log(x1,y1);
    context.beginPath();
    //draw process
    // context.fillStyle='blue';
    // context.lineWidth = 5;
    // context.moveTo(x, y);
    // context.arc(x,y, x1,y1,0);
    // context.fill();
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = pinSize;
    context.moveTo(x, y);
    context.arcTo(x1,y1, x,y, 2 * Math.PI);
    context.stroke();
    context.closePath();
    x=x1;
    y=y1;
}
function refresh(){
    context.clearRect(0, 0, canvas. width, canvas. height); 
}
function changeColor(e){
    let act;
    if(!picked){
        act=document.querySelector('[data-color="'+color+'"]');
        act.classList.remove("active-color");
    }
    color=e.getAttribute("data-color");
    act=document.querySelector('[data-color="'+color+'"]');
    act.classList.add("active-color");
    picked=false;


}
function changeColorPicker(e){
    let act=document.querySelector('[data-color="'+color+'"]');
    act.classList.remove("active-color");
    color=e;
    picked=true;
}
function changePinSize(e){
    pinSize=e;
}
function downloadImg(){
    document.getElementById('download-link').href=canvas.toDataURL();
}
