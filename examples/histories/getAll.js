"use strict";

let historyApi = new History();

window.onload = function () {
    document.getElementById('getAllHistoriesButton').addEventListener('click', function () {
        let histories = historyApi.getAll();
        histories
            .then(response => response.json())
            .then(data => {
                data.forEach(function (item, key) {
                    console.log(item);
                });
            });
    });
};
