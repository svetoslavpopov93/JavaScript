/// <reference path="jquery.js" />
/// <reference path="jqueryNotifyPlugin.js" />
/// <reference path="ajax-service.js" />
/// <reference path="view-manager.js" />
/// <reference path="user-session.js" />

var controller = (function () {
    function registerUser(url) {
        var username = $("#register-username");

        var password = $("#register-password");

        ajaxService.register(username, password, errorController.registerSuccessMsg, errorController.registerErrorMsg);
    }

    return {
        registerUser: registerUser,
    };
}());


var messageController = (function () {
    function registerErrorMsg() {
        noty({
            text: 'Register failed!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function registerSuccessMsg() {
        noty({
            text: 'Register successful!',
            type: "success",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function passwordMissMatch() {
        noty({
            text: 'Passwirds dont match!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function loginSuccessMsg(data) {
        userSession.login(data);
        noty({
            text: 'Login successful!',
            type: "success",
            layout: 'topCenter',
            timeout: 5000
        });

        viewManager.showUserWelcomeView();
    }

    function loginErrorMsg() {
        noty({
            text: 'Login failed!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function productSuccessMsg(){
        noty({
            text: 'Product created!',
            type: "success",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function productErrorMsg() {
        noty({
            text: 'Product creation failed!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function productsLoadErrorMsg() {
        noty({
            text: 'Product load failed!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });

        
    }

    function productDeleted() {
        noty({
            text: 'Product deleted!',
            type: "success",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function productDeletedErrorMsg() {
        noty({
            text: 'Product failed to delete!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function editSuccessMsg() {
        noty({
            text: 'Edit successfull!',
            type: "success",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    function editErrorMsg() {
        noty({
            text: 'Edit failed!',
            type: "error",
            layout: 'topCenter',
            timeout: 5000
        });
    }

    return {
        registerErrorMsg: registerErrorMsg,
        registerSuccessMsg: registerSuccessMsg,
        passwordMissMatch: passwordMissMatch,
        loginSuccessMsg: loginSuccessMsg,
        loginErrorMsg: loginErrorMsg,
        productSuccessMsg: productSuccessMsg,
        productErrorMsg: productErrorMsg,
        productsLoadErrorMsg: productsLoadErrorMsg,
        productDeletedSuccessMsg: productDeleted,
        productDeletedErrorMsg: productDeletedErrorMsg,
        editSuccessMsg: editSuccessMsg,
        editErrorMsg: editErrorMsg
    };
}());