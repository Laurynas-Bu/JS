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
    var empty = document.form.text.value;
    if (empty === "")
    {
        alert("Please input a Value");
        return false;
    }
    else
    {

        var addIn;
        addIn = document.getElementById("forma").elements[0].value;
        document.getElementById(".col-md-4 person row").innerHTML = addIn;

        //var node = document.createElement("div");
        //var textnode = document.createTextNode(addIn);
        //node.appendChild(textnode);
        //document.getElementById(".col-md-4 person row").appendChild(node);
        return true;
    }
}