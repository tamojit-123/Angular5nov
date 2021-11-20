let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');

function sendData() {
    let xhr = new XMLHttpRequest();
    let requestBody = {
        textOne: text1.value,
        textTwo: text2.value,
    };
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            console.log("Data added successfully");
            alert(xhr.responseText);
        }
    };

    xhr.open("POST", "http://localhost:3000/data", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(requestBody));
}