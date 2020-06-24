"use strict";

let contactListApi = new ContactList();

window.onload = function () {
    document.getElementById('addContactListButton').addEventListener('click', function () {
        const newName = document.getElementById('newContactListName').value;
        const newData = {first_name: newName};
        const contactList = contactListApi.add(newData);
        contactList
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
