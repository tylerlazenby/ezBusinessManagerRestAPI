"use strict";

let historyApi = new History();

window.onload = function () {
    document.getElementById('addHistoryButton').addEventListener('click', function () {
        const newName = document.getElementById('newHistoryName').value;
        const newData = {name: newName};
        let history = historyApi.add(newData);
        history
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
