function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "db.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let newSection = document.createElement("div");
            let newNode = document.createTextNode(this.responseText);
            newSection.appendChild(newNode);
            document.getElementById("demo").append(newSection);
        }
    };

    xhr.send();
}

function sendData() {
    let xhr = new XMLHttpRequest();
    let requestBody = {
        "userId": 123,
        "id": 456,
        "title": "Hello world! hi",
        "body": "hi there this is tamojit"
    };
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            console.log("Data added successfully");
            alert(xhr.responseText);
        }
    };

    xhr.open("POST", "http://localhost:3000/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(requestBody));
}