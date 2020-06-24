"use strict";

let companyApi = new Company();

window.onload = function () {
    document.getElementById('addCompanyButton').addEventListener('click', function () {
        const newName = document.getElementById('newCompanyName').value;
        const newData = {name: newName};
        let company = companyApi.add(newData);
        company
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
