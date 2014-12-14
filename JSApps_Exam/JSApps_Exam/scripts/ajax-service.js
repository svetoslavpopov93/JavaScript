/// <reference path="jquery.js" />
/// <reference path="jqueryNotifyPlugin.js" />

var ajaxService = (function () {
    var APP_ID = "iv3HcmtVLTgcYwcyG4VwJGLm5xRrCojZ1HTNwZBv";
    var API_KEY = "vLhmzEEZnWZfxnnOtWF2zLIk0WmBFjisv50PQdye";

    function loginRequest(url, username, password, success, error) {
        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
                "Content-Type": "application/json"
            },
            data: {
                username: username,
                password: password
            },
            url: url,
            success: success,
            error: error

        });
    }

    function registerRequest(url, username, password, success, error) {
        jQuery.ajax({
            method: "POST",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
            },
            url: url,
            data: JSON.stringify({ username: username, password: password }),
            success: success,
            error: error
        });
    }

    function addProduct(url, data, success, error) {

        $.ajax({
            method: "POST",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            url: url,
            success: success,
            error: error

        });
    }

    function editProduct(url, data, success, error) {
        $.ajax({
            method: "PUT",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data),
            url: url,
            success: success,
            error: error

        });
    }

    function deleteProduct(baseUrl, id, success, error) {
        jQuery.ajax({
            method: "DELETE",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
                "Content-Type": "application/json"
            },
            url: baseUrl + "classes/Product/" + id,
            success: success,
            error: error
        });
    }

    function getAllProducts(url, sessionToken, success, error) {
        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": APP_ID,
                "X-Parse-REST-API-Key": API_KEY,
                "X-Parse-Session-Token": sessionToken,
                "Content-Type": "application/json"
            },
            url: url,
            success: success,
            error: error
        });
    }

    return {
        add: addProduct,
        login: loginRequest,
        register: registerRequest,
        allProducts: getAllProducts,
        deleteProduct: deleteProduct,
        editProduct: editProduct
    };
}());