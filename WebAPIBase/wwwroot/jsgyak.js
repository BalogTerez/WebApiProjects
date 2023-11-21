window.onload = function () { 
    for (var sor = 0; sor < 10; sor++) {
        var ujdiv = document.createElement('div');
        //új div létrehozása az új sornak

        ujdiv.classList.add('sor');
        //új div osztálylistájához add hozzá a "sor"-t

        var pascaldiv = document.getElementById('pascal');
        pascaldiv.appendChild(ujdiv);
        //új div-et add hozzá a "pascal" gyermekeihez

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujelemdiv = document.createElement('div');

            //új elem div osztálylistájához add hozzá az "elem"-et
            ujelemdiv.classList.add('elem');

            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujelemdiv.innerText = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            ujelemdiv.innerText = faktoriális(sor) / (faktoriális(oszlop) * faktoriális(sor - oszlop));

            ujdiv.appendChild(ujelemdiv);
            //új elem div-et vedd fel a sor elemei közé
        }
    }
};

var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}
