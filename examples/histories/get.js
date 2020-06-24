"use strict";

let historyApi = new History();

window.onload = function () {
    document.getElementById('getHistoryButton').addEventListener('click', function () {
        let history = historyApi.get(1);
        history
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
