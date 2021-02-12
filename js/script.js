let players;
let sides;
init = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    document.querySelector("#reshuffle").addEventListener("click", reshuffle);
    players = urlParams.get('names').split(",");
    console.log(players);
    players.forEach(element => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(element))
        div.id = element;
        div.appendChild(p);
        document.querySelector("#players").appendChild(div);
    });
    let pocetLidiVJednomTeamu = Math.round(players.length / 2);
    let rightTeam = 0;
    let leftTeam = 0;
    sides = [];
    console.log(pocetLidiVJednomTeamu);
    players.forEach(element => {
        if(rightTeam == pocetLidiVJednomTeamu){
            sides.push("left");
            return;
        }
        if(leftTeam == pocetLidiVJednomTeamu) {
            sides.push("right");
            return;
        }
        let random = Math.random();
        if(random > 0.5) {
            sides.push("right");
            rightTeam++;
        }
        else{
            sides.push("left");
            leftTeam++;
        }

    });
    num = 0;
    function add() {
        if(num < sides.length) {
          setTimeout(function(){
            document.getElementById(players[num]).classList.add(sides[num])
            num++;
            add();
          }, 2000);
        }
      }
      add();
}

reshuffle = () => {
    location.reload();
}


document.addEventListener('DOMContentLoaded', init);