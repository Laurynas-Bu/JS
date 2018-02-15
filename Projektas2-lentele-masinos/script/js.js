var auto = [
    ['ZBG 123', 98450, 3645],
    ['ABC 345', 1500, 91],
    ['LRS 222', 49506, 3250],
    ['KDC 521', 9999, 300]
];

var headerAuto = ['Valstybinis numeris', 'Nuvažiuotas atstumas', 'Sugaištas laikas'];

createTable(headerAuto, auto);

function createTable(header, data) {
    var table = '';

    //Sukuriama lenteles tag'as
    table += '<table class="table">';
    //Pradeda apsirasyti lenteles antrastine dalis
    table += '<thead>';
    //Sukuriama antrastes eilute
    table += '<tr>';
    //Sukame cikla per head masyvo elementus. Ciklas vykdomas iki masyvo pabaigos
    for(var i=0; i < header.length; i++){
        //Sukuriamas stulpelis, kuriame pavadinimas yra paimamas is masyvo i-tojo (1,2,3,...) elemento
        table += '<th>' + header[i] + '</th>';
    }
    table += '</tr>';
    table += '</thead>';
    //Pradedam apasirayti lenteles body struktura
    table += '<tbody>';
    //Sukamas ciklas per automobiliu masyva
    for(var i=0; i < data.length; i++){
        //Kiekvienam automobilio masyvui sukuriama nauja eilute
        table += '<tr>';
        //Sukamas ciklas per automobiliu masyvo elementa t.y. per automobili
        for(var j = 0; j < data[i].length; j++){
            //Dedama automobilio reiksmes i stulpelius
            table += '<td>' + data[i][j] + '</td>';
        }
        table += '</tr>';
    }
    table += '</tbody>';
    table += '</table>';
    document.querySelector('.car-table').innerHTML = table;
}

document.querySelector('#find').addEventListener('click', function (){

    //Paimami pradiniai duomenys ir saugomi laikinajam masyve.
    var oldAutoArray = auto;

    //Sukuriamas naujas masyvas, kuriame bus saugomi automobiliai, kurie virsyje vidutini 60kmh greiti.
    var newAutoArray = [];

    //Sukuriami kintamieji, kurie saugos automobilio greiti, laika, atstuma.
    var greitis, atstumas, laikas;

    //Sukamas ciklas per automobiliu masyva, kad suskaiciuotume vidutini greiti.
    for (var i=0;i <oldAutoArray.length; i++) {
        atstumas = oldAutoArray [i] [1];
        laikas = oldAutoArray [i] [2];

        //Apskaiciuojame vidutini greiti kmh.
        greitis = (atstumas / 1000) / (laikas / 3600);
        //Itraukiame vidutinis greiti prie automobilio.
        greitis = Math.ceil(greitis);
        oldAutoArray[i].push(greitis);
        //Tikriname ar vidutinis greitis yra virsijamas
        if (greitis >= 60) {
            newAutoArray.push(oldAutoArray[i]);
        }
    }

    //Sukuriama lenteles antrastine dalis su vidutiniu greiciu
    var newAutoArrayHeader = ['Valstybinis numeris', 'Nuvažiuotas atstumas', 'Sugaištas laikas', 'Vidutinis greitis'];

    //atspausdiname rezultata, su automobiliais, kurie virsijo vidutini greiti.
    createTable(newAutoArrayHeader, newAutoArray);

    //Isvalome vidutinio greicio reiksme is masyvo.
    for (var i=0;i <oldAutoArray.length; i++){
        oldAutoArray [i].pop ();
    }
});