var modal, btn, span, clean, forma;

modal = document.getElementById('myModal');
btn = document.getElementById("myBtn");
span = document.getElementsByClassName("close")[0];
clean = document.getElementById('cleanto');
forma = document.getElementById('forma');

btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

clean.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

window.onbeforeunload = myFunction;
    function myFunction() {
        if (modal.style.display == "none") {
            forma.reset();}
        else {}
    }

// forma.addEventListener("reset", myFunction);

// function myFunction() {
    // if (modal.style.display == "none") {
      //  forma.reset();
  //  }
// }


