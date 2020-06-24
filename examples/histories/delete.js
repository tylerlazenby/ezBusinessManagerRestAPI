"use strict";

let historyApi = new History();

window.onload = function () {
    document.getElementById('deleteHistoryButton').addEventListener('click', function () {
        let history = historyApi.delete(1);
        history
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
