"use strict";

let historyApi = new History();

window.onload = function () {
    document.getElementById('changeHistoryButton').addEventListener('click', function () {
        const newName = document.getElementById('changeHistoryName').value;
        const newData = {name: newName};
        let history = historyApi.change(1, newData);
        history
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
