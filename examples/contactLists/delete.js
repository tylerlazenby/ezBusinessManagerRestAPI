"use strict";

let contactListApi = new ContactList();

window.onload = function () {
    document.getElementById('deleteContactListButton').addEventListener('click', function () {
        const contactList = contactListApi.delete(1);
        contactList
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
