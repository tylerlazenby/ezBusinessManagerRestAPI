"use strict";

let companyApi = new Company();

window.onload = function () {
    document.getElementById('changeCompanyButton').addEventListener('click', function () {
        const newName = document.getElementById('changeCompanyName').value;
        const newData = {name: newName};
        let company = companyApi.change(1, newData);
        company
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
