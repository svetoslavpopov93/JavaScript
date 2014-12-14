var bookModel = (function () {
    function bookModel(title, author, isbn) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }

    bookModel.prototype.getTitle = function () {
        return this._title;
    }
    bookModel.prototype.getAuthor = function () {
        return this._author;
    }
    bookModel.prototype.getIsbn = function () {
        return this._isbn;
    }

    return bookModel;
}());