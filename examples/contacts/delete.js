"use strict";

let contactApi = new Contact();

window.onload = function () {
    document.getElementById('deleteContactButton').addEventListener('click', function () {
        const contact = contactApi.delete(1);
        contact
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
