"use strict";

let contactApi = new Contact();

window.onload = function () {
    document.getElementById('changeContactButton').addEventListener('click', function () {
        const newName = document.getElementById('changeContactName').value;
        const newData = {first_name: newName};
        const contacts = contactApi.change(1, newData);
        contacts
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
