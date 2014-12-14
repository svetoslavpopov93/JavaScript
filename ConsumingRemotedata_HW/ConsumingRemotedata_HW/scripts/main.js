/// <autosync enabled="true" />
/// <reference path="jquery.js" />

(function () {
    var APP_ID = "iXM4oT8oP2O1zbhBo4Bxj76Q0rjlXoJpvarcfMiY";
    var REST_API_KEY = "LrdH0g9pWcNQVmrvR1vP8YKXKu2kp9B1VcAHiSni";

    var tb_newBookTitle = $("#tb_new_book_name");
    var tb_newBookAuthor = $("#tb_new_book_author");
    var tb_newBookISBN = $("#tb_new_book_isbn");
    var btn_addBook = $("#btn_add").on("click", addBook);
    var btn_listBooks = $("#btn_listBooks").on("click", listAllBooks);
    var ol_books = $("#ol_books")

    function addBook() {
        if (checkInput()) {
            $.ajax({
                method: "POST",
                headers: {
                    "X-Parse-Application-Id": APP_ID,
                    "X-Parse-REST-API-Key": REST_API_KEY
                },
                data: JSON.stringify({
                    title: tb_newBookTitle.val(),
                    author: tb_newBookAuthor.val(),
                    isbn: tb_newBookISBN.val()
                }),
                url: "https://api.parse.com/1/classes/Book",
                success: function () {
                    console.log("Book has been added!");
                },
                error: function () {
                    console.log("Error! Book adding proccess failed.");
                }
            });
        }

        else {
            console.log("Incorrect input!");
        }
    }

    function listAllBooks() {
        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": REST_API_KEY
            },
            url: "https://api.parse.com/1/classes/Book",
            success: listRecievedBooks,
            error: function () { console.log("Receiving books failed!"); }
        });
    }

    function listRecievedBooks(data) {
        ol_books.text("");
        for (var b in data.results) {
            var book = data.results[b];
            var bookItem = $('<li>');
            var bookP = $('<span>').text('Title: "' + book.title + '", Author:" '
                + book.author + '", ISBN: "' + book.isbn + '"');
            var btn = $("<a>Remove</a>").on("click", function () {
                removeBook(book);
            });

            bookItem.append(bookP).append(btn);
            ol_books.append(bookItem);
        }

        function removeBook(book) {
            $.ajax({
                method: "DELETE",
                headers: {
                    "X-Parse-Application-Id": APP_ID,
                    "X-Parse-REST-API-Key": REST_API_KEY
                },
                url: "https://api.parse.com/1/classes/Book/" + book.objectId,
                success: function () {
                    listAllBooks();
                    console.log("Book has been removed!");
                },
                error: function () {
                    console.log("Book removing proccess failed!");
                }
            });
        }
    }

    function checkInput() {
        if (tb_newBookTitle.val() == "" || tb_newBookAuthor.val() == "" || tb_newBookISBN.val() == "") {
            return false;
        }

        return true;
    }
}());