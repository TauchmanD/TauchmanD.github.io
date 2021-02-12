init = () => {
    document.querySelector("#reshuffle").addEventListener("click", reshuffle);

    let runy = [
        "Každý musí mít jako hlavní runu Unsealed Spellbook",
        "Každý musí mít jako hlavní runu Prototype: Omnistone",
        "Každý musí mít jako runu Future's Market",
        "Každý musí mít jako hlavní runu Predator",
        "Každý musí mít jako runu Ghost Poro",
        "Každý musí mít jako runu Zombie Ward",
        "Každý musí mít jako runu Minion Dematerializer",
        "Každý musí mít jako runu Hextech Flashtraption",
        "Každý musí mít jako runu Hextech Flashtraption",
        "Každý musí mít jako runu Demolish",
        "Všichni musí mít smite",
        "Nikdo nesmí mít flash",


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
        "V teamu musí být minimálně jedna dvojce champů, která má mezi sebou nějaký vztah (<a target=\"_blank\" href='https://preview.redd.it/clajx2euo4731.png?width=1236&format=png&auto=webp&s=07bc3d7da70bdb8bcc6b2cedd9749af53f17b279'>obrázek</a>). Počítají se vztahy Family / Strong Relationship, Mentor, Romantic, Possible Romantic Relationship, One-sided Romantic Relationship, Drinking Buddies.",
        "V teamu musí být champové ženského pohlaví (Taric se nepočítá ;-))) )",
        "Všichni musí picknout champa s globální ultinou",
        "Všichni champové musí začínat na stejné počáteční písmeno",
        "Všichni si musí na <a target=\"_blank\" href='https://u.gg/lol/top-lane-tier-list'>této stránce</a> najít svou linku, seřadit si champy podle win ratu od nejnižšího po nejvyšší a hrát jednoho z 5 nejhorších champů"
    ];
    let items = [
        "Všichni musí postavit duskblade",
        "Všichni si musí obrátit summoner spelly (D a F)",
        "Nikdo nesmí postavit itemy, které dávají movement speed",
        "Každý musí postavit jako první item Zhonya's Hourglass",
        "Každý musí postavit jako první item Shurelya's Reverie",
        "Hráč nesmí upgradovat své boty, dokud nemá 5 killů nebo 10 assistů"

    ];
    let dk = [
        "Jungler musí každých 5 minut od začátku hry až do 20. minuty jít do enemy jungle a vyčistit alespoň jeden camp. Celkově tedy vezme minimálně 4 campy. Dokud nezemře/nevyčistí camp, nemůže odejít",
        "Ve chvíli, kdy se někomu podaří multikill, se musí daný hráč, kterému se multikill podařil, přestat hýbat a castit spelly a 5 vteřin jen spamovat CTRL + 1/2/3/4",
        "Pokaždé, když se někomu z teamu podaří multikill, se musí daný hráč zastavit, necastit spelly a ihned do chatu napsat libovolnou hlášku, kterou postava, za kterou hraje, říká (při pickování, banování, cokoli) a v češtině",
        "Pokaždé, když vezmete epic monstrum, musí jungler napsat \"jungle diff\"",
        "Jungler si musí vybrat 2 typy campů, které nesmí po celou dobu hry zabíjet",
        "Pokud někoho z teamu zabije hráč, které má v enemy teamu nejméně killů (popřípadě jeden z lidí, co mají nejméně killů), musí po respawnu ještě zůstat 30 vteřin v bázi, odkud ale může castit spelly",
        "Pokaždé, když někdo z enemy teamu napíše do chatu xd (berte všechny variace velkých a malých písmen), musí jeden libovolný hráč z teamu použít libovolný summoner spell (pravidlo platí do 15. minuty)",
        "Každých 5 minut až do 15 minuty se musí swapnout linky (top na mid, mid na bot, bot na top)"

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