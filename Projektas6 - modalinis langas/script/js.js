var modal, btn, span, clean, forma, body, addTo;

modal = document.getElementById('myModal');
btn = document.getElementById("myBtn");
span = document.getElementsByClassName("close")[0];
clean = document.getElementById('cleanto');
forma = document.getElementById('forma');
body = document.getElementById('body');
addTo = document.getElementById('addto');

btn.onclick = function() {
    modal.style.display = "block";
   // overflowFunction()

};

span.onclick = function() {
    modal.style.display = "none";
    resetFunction();
};

clean.addEventListener("click", function() {
    modal.style.display = "none";
    resetFunction();
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetFunction()
    }
};

function resetFunction() {
       forma.reset();
}

//function overflowFunction() {
    //body.style.overflow = "hidden";
//}

addTo.addEventListener("click", function() {
    required();
});


function required()
{
    var addIn = document.getElementById("forma");
    var error = '';
    var i;
    for (i = 0; i < addIn.elements.length; i++) {
        if (addIn.elements[i].value === ""){
            error += 'Neužpildytas laukelis: ' + addIn.elements[i].getAttribute('name') + '\n';
        }
    }

    if(error != ''){
        alert(error);
        return
    }

    reverse();
}


function reverse() {

    var addIn = document.getElementById("forma");
    var list = document.querySelector(".person .row");
    var i;

    var node = document.createElement('div');
    node.classList.add('col-md-6');
    node.appendChild(document.createTextNode(addIn.elements[0].getAttribute('name') + ' ' + addIn.elements[1].getAttribute('name')));
    list.appendChild(node);

    var form = document.createElement('div');
    form.classList.add('col-md-6');
    form.appendChild(document.createTextNode((addIn.elements[0].value) + ' ' + (addIn.elements[1].value)));
    list.appendChild(form);


    for (i = 0; i < addIn.elements.length; i++) {
        if (i >= 2) {

            var node = document.createElement('div');
            node.classList.add('col-md-6');
            node.appendChild(document.createTextNode(addIn.elements[i].getAttribute('name')));
            list.appendChild(node);

            var form = document.createElement('div');
            form.classList.add('col-md-6');
            form.appendChild(document.createTextNode(addIn.elements[i].value));
            list.appendChild(form);
        }
    }

    modal.style.display = "none";
    resetFunction();
}