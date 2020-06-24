"use strict";

let contactListApi = new ContactList();

window.onload = function () {
    document.getElementById('getContactListButton').addEventListener('click', function () {
        const contactList = contactListApi.get(1);
        contactList
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
