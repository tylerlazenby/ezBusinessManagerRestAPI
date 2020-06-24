"use strict";

let contactListApi = new ContactList();

window.onload = function () {
    document.getElementById('getAllContactListsButton').addEventListener('click', function () {
        const contactLists = contactListApi.getAll();
        contactLists
            .then(response => response.json())
            .then(data => {
                data.forEach(function (item, key) {
                    console.log(item);
                });
            });
    });
};
