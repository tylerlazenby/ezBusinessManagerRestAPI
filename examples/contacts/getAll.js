"use strict";

let contactApi = new Contact();

window.onload = function () {
    document.getElementById('getAllContactsButton').addEventListener('click', function () {
        const contacts = contactApi.getAll();
        contacts
            .then(response => response.json())
            .then(data => {
                data.forEach(function (item, key) {
                    console.log(item);
                });
            });
    });
};
