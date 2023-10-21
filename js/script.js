const init = () =>{
    intro = document.getElementById("intro");
    let message = "ahoj"
    let len = message.length
    let i = 0
    let show = ""
    const introIn = setInterval(()=>{
        if(i<len){
            show += message[i]
            intro.innerHTML = `{ ${show}_ }`
        }
        i++
        if (i > len){
            clearInterval(introIn)
            intro.style = "animation: intro-anim 1.5s forwards;"
        }
    }, 200);

}
document.addEventListener("DOMContentLoaded", init)