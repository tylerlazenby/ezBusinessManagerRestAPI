"use strict";

let companyApi = new Company();

window.onload = function () {
    document.getElementById('deleteCompanyButton').addEventListener('click', function () {
        let company = companyApi.delete(1);
        company
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
