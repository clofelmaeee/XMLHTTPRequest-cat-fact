function loadDoc() {
    const url = "https://catfact.ninja/fact";

    let xhr = new XMLHttpRequest();
    let data;

    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        document.getElementById("demo").innerHTML = data.fact;
    }

    xhr.open("GET", url, true);
    xhr.send()

}
