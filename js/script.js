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
            intro.style = "animation: intro-anim 1s forwards;"
            content.style = "animation: content-in 1s forwards;"
        }
    }, 50);
    const age = setInterval(()=>{
        let t = Date.now()
        let b = new Date(2002, 8, 14).getTime()
        let age = document.getElementById("age")
        age.innerHTML = ((t-b)/31557600000).toFixed(9)
    }, 500)

}
document.addEventListener("DOMContentLoaded", init)