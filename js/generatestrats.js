init = () => {
    document.querySelector("#reshuffle").addEventListener("click", reshuffle);

    let runy = [
        "Každý musí mít jako hlavní runu Unsealed Spellbook",
        "Každý musí mít jako hlavní runu Prototype: Omnistone",
        "Každý musí mít jako runu Future's Market",

    ];
    let champs = [
        "Tým pouze z champů z Demacie",
        "Tým pouze z champů z Bilgewater",
        "Tým pouze z champů z Ionie",
        "Tým pouze z champů z Noxusu",
        "Tým pouze z champů z Piltoveru",
        "Tým pouze z champů z Shadow Isles",
        "Tým pouze z champů z Shurimy",
        "Tým pouze z champů z Freljordu",
        "Tým pouze z champů z Voidu",
        "Tým pouze z champů z Zaunu",
        "Tým pouze z champů z Bandle City",
        "Všichni musí hrát ranged champa",
        "Všichni musí hrát champa na blízko",
        "V teamu musí být minimálně jedna dvojce champů, která má mezi sebou nějaký vztah (<a href='https://preview.redd.it/clajx2euo4731.png?width=1236&format=png&auto=webp&s=07bc3d7da70bdb8bcc6b2cedd9749af53f17b279'>obrázek</a>). Počítají se vztahy Family / Strong Relationship, Mentor, Romantic, Possible Romantic Relationship, One-sided Romantic Relationship, Drinking Buddies.",
        "V teamu musí být champové ženského pohlaví (Taric se nepočítá ;-))) )",
    ];
    let items = [
        "Všichni musí postavit duskblade",
        "Všichni si musí obrátit summoner spelly (D a F)",
    ];
    let dk = [
        "Jungler musí každých 5 minut od začátku hry až do 20. minuty jít do enemy jungle a vyčistit alespoň jeden camp. Celkově tedy vezme minimálně 4 campy. Dokud nezemře/nevyčistí camp, nemůže odejít",
        "Ve chvíli, kdy se někomu podaří multikill, se musí daný hráč, kterému se multikill podařil, přestat hýbat a castit spelly a 5 vteřin jen spamovat CTRL + 1/2/3/4",
        "Pokaždé, když se někomu z teamu podaří multikill, se musí daný hráč zastavit, necastit spelly a ihned do chatu napsat libovolnou hlášku, kterou postava, za kterou hraje, říká (při pickování, banování, cokoli) a v češtině"
    ];
    let runStrat = runy[Math.floor(Math.random() * runy.length)];
    let champsStrat = champs[Math.floor(Math.random() * champs.length)];
    let itemStrat = items[Math.floor(Math.random() * items.length)];
    let dkStrat = dk[Math.floor(Math.random() * dk.length)];

    let stratDiv = document.getElementById("strats");

    let runDiv = document.createElement("div");
    let champsDiv = document.createElement("div");
    let itemDiv = document.createElement("div");
    let dkDiv = document.createElement("div");

    let runP = document.createElement("p");
    let champsP = document.createElement("p");
    let itemP = document.createElement("p");
    let dkP = document.createElement("p");

    runP.innerHTML = runStrat;
    champsP.innerHTML = champsStrat;
    itemP.innerHTML = itemStrat;
    dkP.innerHTML = dkStrat;
    
    runDiv.appendChild(runP);
    champsDiv.appendChild(champsP);
    itemDiv.appendChild(itemP);
    dkDiv.appendChild(dkP);

    stratDiv.appendChild(runDiv);
    stratDiv.appendChild(champsDiv);
    stratDiv.appendChild(itemDiv);
    stratDiv.appendChild(dkDiv);



    
}

reshuffle = () => {
    location.reload();
}

document.addEventListener("DOMContentLoaded", init);