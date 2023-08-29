var crsr = document.querySelector(".cursor")

document.addEventListener("mousemove", (dets) =>{
    crsr.style.left = dets.pageX + 5 + "px"
    crsr.style.top = dets.pageY + 5 + "px"
    console.log(dets.x);
})