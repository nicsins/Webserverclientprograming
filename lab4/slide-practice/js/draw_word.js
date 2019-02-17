let canvas=document.querySelector("#canvas2");
let context=canvas.getContent("2d");

let input=document.querySelector("#image-text");
input.disabled=true;


let image=new Image();
image.src="js.buddypirate.png";

image.addEventListener("load",function () {
    context.drawImage(image, 0, 0);
    input.disabled = true;
});


let canvas2=document.querySelector("#canvas2");
let context=canvas2.getContent("2d");

let input2=document.querySelector("#image2-text");
input.disabled=true;


let image2=new Image();
image2.src="js.buddypirate.png";

image2.addEventListener("load",function () {
    context.drawImage(image2, 0, 0);
    input.disabled = false;
});
input.addEventListener("input",function () {
    let text=this.value;

    context.drawImage(image2,0,0);
    context.font("30 px Helvetica black");
    context.fillText(text,30,100);

});