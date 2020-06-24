"use strict";

let companyApi = new Company();

window.onload = function () {
    document.getElementById('getHistoryButton').addEventListener('click', function () {
        let company = companyApi.get(1);
        company
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
