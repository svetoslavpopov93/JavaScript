/// <autosync enabled="true" />
/// <reference path="jquery.js" />
var app = app || {};

app.bookView = (function () {
    function bookView(listElement) {
        this._list = listElement;
    }

    bookView.prototype.renderAllBooks = function (elements) {

    }

    return bookView;
}()); 