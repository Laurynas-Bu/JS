var figuros = [
    {ilgis: 2, plotis: 5, aukstis: 3},
    {ilgis: 3, plotis: 2, aukstis: 6},
    {ilgis: 1, plotis: 5, aukstis: 5}
];


document.querySelector('#primary-data').addEventListener('click',function () {
    printData(figuros, false);
    document.querySelector('#find-max').removeAttribute('disabled');
});

document.querySelector('#find-max').addEventListener('click',function () {
    findMax(figuros);
});

function printData(data, withTuris) {
    var table = document.querySelector('.table');

    var tbody = document.querySelector(".table tbody");

    if( tbody!= null ){
        tbody.remove();
    }

    if(document.querySelector('.table .turis') != null && !withTuris){
        document.querySelector('.table .turis').remove();
    }

    var tableBody = document.createElement('tbody');

    for(var i=0; i < data.length; i++){
        var tableBodyRow = document.createElement('tr');

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[i].ilgis));
        td.classList.add("text-center");
        tableBodyRow.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[i].plotis));
        td.classList.add("text-center");
        tableBodyRow.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[i].aukstis));
        td.classList.add("text-center");
        tableBodyRow.appendChild(td);

        if(withTuris){
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(data[i].turis));
            td.classList.add("text-center");
            tableBodyRow.appendChild(td);
        }

        tableBody.appendChild(tableBodyRow);
    }

    table.appendChild(tableBody);

}

function findMax(data) {

    var tempData = new Array();
    var maxTuris = 0;
    var maxTurisIndex = 0;

    for(var i = 0; i < data.length; i++){
        var turis = 0;
        turis = data[i].aukstis * data[i].plotis * data[i].ilgis;
        tempData.push(data[i]);
        tempData[i].turis = turis;

        if( i == 0){
            maxTuris = turis;
        }

        if(i != 0 && turis > maxTuris){
            maxTuris = turis;
            maxTurisIndex = i;
        }
    }

    var tableHeaderRow = document.querySelector('.table thead tr');

    if(document.querySelector('.table .turis') != null){
        document.querySelector('.table .turis').remove();
    }

    var tableHeaderNewTh = document.createElement('th');
    tableHeaderNewTh.classList.add('text-center');
    tableHeaderNewTh.classList.add('turis');
    tableHeaderNewTh.appendChild(document.createTextNode('Tūris'));
    tableHeaderRow.appendChild(tableHeaderNewTh);

    printData(tempData, true);

    document.querySelector('.table tbody').rows[maxTurisIndex].classList.add('max-turis');
}
