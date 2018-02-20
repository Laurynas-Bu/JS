var figuros = [
    {ilgis: 2, plotis: 5, aukstis: 3},
    {ilgis: 3, plotis: 2, aukstis: 6},
    {ilgis: 1, plotis: 5, aukstis: 5}
];

//#primary-data

document.querySelector('#primary-data').addEventListener('click',function () {

    printData(figuros);

});

function printData(data) {

var table = document.querySelector('.table');

var tbody = document.querySelector(".table tbody");
if (tbody != null){
    tbody.remove();
}

var tableBody= document.createElement('tbody');

for (var i=0; i < data.length; i++){
    var tableBodyRow = document.createElement('tr');

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(data [i].ilgis));
    td.classList.add("text-center");
    tableBodyRow.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(data [i].plotis));
    td.classList.add("text-center");
    tableBodyRow.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(data [i].aukstis));
    td.classList.add("text-center");
    tableBodyRow.appendChild(td);

    tableBody.appendChild(tableBodyRow);

}

table.appendChild(tableBody);

}

document.querySelector('#primary-data').addEventListener('click',function () {

    printMax(figuros);

});

function printMax(data) {

    var table = document.querySelector('.table');

    var tbody = document.querySelector(".table tbody");
    if (tbody != null){
        tbody.remove();
    }

    var tableBody= document.createElement('tbody');

    for (var i=0; i < data.length; i++){

        var tableBodyRow = document.createElement('tr');

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data [i].ilgis));
        td.classList.add("text-center");
        tableBodyRow.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data [i].plotis));
        td.classList.add("text-center");
        tableBodyRow.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data [i].aukstis));
        td.classList.add("text-center");
        tableBodyRow.appendChild(td);

        tableBody.appendChild(tableBodyRow);

    }

    table.appendChild(tableBody);

}