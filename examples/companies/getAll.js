"use strict";

let companyApi = new Company();

window.onload = function () {
    document.getElementById('getAllCompaniesButton').addEventListener('click', function () {
        let companies = companyApi.getAll();
        companies
            .then(response => response.json())
            .then(data => {
                data.forEach(function (item, key) {
                    console.log(item);
                });
            });
    });
};
