var modal, btn, span, clean;

modal = document.getElementById('myModal');
btn = document.getElementById("myBtn");
span = document.getElementsByClassName("close")[0];
clean = document.getElementById('cleanto');

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

    if (modal.style.display=="none", true);
{
    document.querySelector('input-group-addon').value = "";
}


