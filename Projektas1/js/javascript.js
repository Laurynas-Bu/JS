document.querySelector('.raudonas').addEventListener('click',function () {
    var value = document.querySelector('.raudonas').innerText;
    var newValue = parseInt(value) + 1;
    document.querySelector('.raudonas').innerText = newValue;

});

document.querySelector('.geltonas').addEventListener('click',function () {
    var value = document.querySelector('.geltonas').innerText;
    var newValue = parseInt(value) + 1;
    document.querySelector('.geltonas').innerText = newValue;

});

document.querySelector('.zalias').addEventListener('click', function () {

    var x = document.querySelector('.geltonas').innerText = 0;
    var y = document.querySelector('.raudonas').innerText = 0;

});