const init = () =>{
    intro = document.getElementById("intro");
    content = document.getElementsByClassName("content")[0];
    let message = "Denis Tauchman"
    let len = message.length
    let i = 0
    let show = ""
    const introIn = setInterval(()=>{
        if(i<len){
            show += message[i]
            intro.innerHTML = `{${show}_}`
        }
        i++
        if (i > len){
            intro.innerHTML = `{${show}}`
            clearInterval(introIn)
            intro.style = "animation: intro-anim 1.5s forwards;"
            content.style = "animation: content-in 2.5s forwards;"
        }
    }, 100);

}
document.addEventListener("DOMContentLoaded", init)