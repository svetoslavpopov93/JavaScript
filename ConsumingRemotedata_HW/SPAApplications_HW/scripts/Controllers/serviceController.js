/// <autosync enabled="true" />
/// <reference path="jquery.js" />
var app = app || {};

app.serviceController = (function () {
    function serviceController(appId, restApiKey, url) {
        app._APP_ID = appId;
        app._REST_API_KEY = restApiKey;
        app._url = url;

        app._serviceControler = this;
    }

    serviceController.prototype.getRequest = function () {
        app._data = [];

        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": app._APP_ID,
                "X-Parse-REST-API-Key": app._REST_API_KEY
            },
            url: app._url,
            success: function (data) {
                app._data = data;
                for (var b in data.results) {
                    var book = data.results[b];
                    app._data.push(book);
                }
            },                 /////////////TODO: implement listRecievedBoooks method
            error: function () { console.log("Receiving books failed!"); }
        });

        function getRecievedBooks(data) {
            app._data = data;
        }
    }

    serviceController.prototype.postRequest = function (dt) {
        var data = JSON.stringify({
            title: dt.title,
            author: dt.author,
            isbn: dt.isbn
        });

        $.ajax({
            method: "POST",
            headers: {
                "X-Parse-Application-Id": app._APP_ID,
                "X-Parse-REST-API-Key": app._REST_API_KEY
            },
            data: data,
            url: app._url,
            success: function () {
                console.log("Book has been added!");
            },
            error: function () {
                console.log("Error! Book adding proccess failed.");
            }
        });
    }

    serviceController.prototype.deleteRequest = function (book) {
        $.ajax({
            method: "DELETE",
            headers: {
                "X-Parse-Application-Id": app._APP_ID,
                "X-Parse-REST-API-Key": app._REST_API_KEY
            },
            url: app._url + book.objectId,
            success: function () {
                console.log("Book has been removed!");
            },
            error: function () {
                console.log("Book removing proccess failed!");
            }
        });
    }

    return serviceController;
}());