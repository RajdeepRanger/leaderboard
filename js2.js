function sendData() {
    var jsObject = {
        name: document.getElementById('GameName').value,
        platform: document.getElementById('Platform').value
    };

    console.log(JSON.stringify(jsObject));

    fetch("https://lime-faithful-hippo.cyclic.app/api/games", {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        body: JSON.stringify(jsObject),
        headers: { "Content-Type": "application/json" }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
        setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
}
