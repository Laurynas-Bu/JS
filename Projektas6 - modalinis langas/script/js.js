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

clean.onclick = function () {
    modal.style.display = "none";
    resetFunction();
};

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

    //var addIn = document.getElementById("forma").elements[0].value;
    var addIn = document.getElementById("forma");
    var error = '';
    var i;
    for (i = 0; i < addIn.elements.length; i++) {
        if (addIn.elements[i].value === ""){
            error += 'Neivestas: ' + addIn.elements[i].getAttribute('name') + '\n';
        }
    }

    if(error != ''){
        alert(error);
        return
    }

    var list = document.querySelector(".person .row");

    var node = document.createElement("div");
    node.classList.add('col-md-6');
    node.appendChild(document.createTextNode('Vardas Pavardė'));
    list.appendChild(node);
    var fullname = document.createElement('div');
    fullname.classList.add('col-md-6');
    fullname.appendChild(document.createTextNode(addIn));
    list.appendChild(fullname);
}
