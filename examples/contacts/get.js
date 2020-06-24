"use strict";

let contactApi = new Contact();

window.onload = function () {
    document.getElementById('getContactButton').addEventListener('click', function () {
        const contact = contactApi.get(1);
        contact
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
