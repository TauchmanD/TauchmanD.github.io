function init() {
    let searchParam = new URLSearchParams(window.location.search);
    let selected = searchParam.get("x");
    obrázky = document.getElementsByTagName('img');
    console.log(obrázky[selected]);
    let misto = document.getElementById("obrázek");
    misto.appendChild(obrázky[selected]);
}






document.addEventListener('DOMContentLoaded', init);