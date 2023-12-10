function sendData() {
    const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const ind = urlParams.get('index');
            const aid = parseInt(ind);
            console.log(aid);


    var jsObject = {
        gameID: `${aid}`,
        player: document.getElementById('player').value,
        score:document.getElementById('score').value ,
        time:document.getElementById('time').value ,
    };

    console.log(JSON.stringify(jsObject));
    var whatever = document.getElementById('whatever');
    whatever = `action = "https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${aid}"`;
    fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${aid}`, {
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
        window.location.href = `html3.html?index=${aid-2}`;
    }, 1000);
}
