"use strict";

let contactListApi = new ContactList();

window.onload = function () {
    document.getElementById('changeContactListButton').addEventListener('click', function () {
        const newName = document.getElementById('changeContactListName').value;
        const newData = {first_name: newName};
        const contactList = contactListApi.change(1, newData);
        contactList
            .then(response => response.json())
            .then(data => console.log(data));
    });
};
