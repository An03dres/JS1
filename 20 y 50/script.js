document.addEventListener("DOMContentLoaded", function() {
    var outputDiv = document.getElementById("output");
    var numbers = "";

    for (let i = 50; i >= 20; i--) {
        numbers += i + "<br>";
    }

    outputDiv.innerHTML = numbers;
});
