/// <autosync enabled="true" />
/// <reference path="jquery.js" />
/// <reference path="serviceController.js" />
var app = app || {};

app.bookController = (function () {
    var data = app._data;

    function getAllBooks() {
        for (var b in app._data) {
            console.log(b);
        }
    }

    function addNewBook() {
        //TODO:
    }

    function removeBook() {
        //TODO:
    }

    return {
        getAllBooks: getAllBooks,
        addNewBook: addNewBook,
        removeBook: removeBook
    };
}());