"use strict";

let contactApi = new Contact();

window.onload = function () {
    document.getElementById('addContactButton').addEventListener('click', function () {
        const newName = document.getElementById('newContactName').value;
        const newData = {first_name: newName};
        const contact = contactApi.add(newData);
        contact
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
