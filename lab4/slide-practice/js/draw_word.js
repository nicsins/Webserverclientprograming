let canvas=document.querySelector("#canvas");
let context=canvas.getContent("2d");

let input=document.querySelector("#image-text");
input.disabled=true;


let image=new Image();
image.src="js.buddypirate.png";

image.addEventListener("load",function () {
    context.drawImage(image, 0, 0);
    input.disabled = false;
});
input.addEventListener("input",function () {
    let text=this.value;

    context.drawImage(image,0,0);
    context.font("30 px Helvetica black");
    context.fillText(text,30,100);

});
