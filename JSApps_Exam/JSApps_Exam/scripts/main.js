/// <reference path="jquery.js" />
/// <reference path="jqueryNotifyPlugin.js" />
/// <reference path="ajax-service.js" />
/// <reference path="view-manager.js" />
/// <reference path="controller.js" />
/// <reference path="product.js" />

(function () {
    var baseUrl = "https://api.parse.com/1/";
    viewManager.checkSessionState();
    
    attachButtonHandlers();

    function attachButtonHandlers() {
        var user = userSession.getCurrentUser();

        $(".btn_home").on("click", checkUserStatus);

        $(".btn_login").on("click", viewManager.showLoginView);

        $(".btn_register").on("click", viewManager.showRegisterView);

        $("#register-button").on("click", function () {
            userRegister()
        });

        $("#login-button").on("click", function () {
            var username = $("#login-username").val();
            var password = $("#login-password").val();
            userLogin(username, password);
            $("#login-username").val('');
            $("#login-password").val('');
        });

        $("#btn_logout").on("click", logoutUser);

        $("#btn_products").on("click", function () {
            viewManager.showProductsSection(baseUrl + "/classes/Product", user.results[0].objectId)
        });

        $("#btn_add").on("click", viewManager.showAddProductsSection);

        $("#add-product-button").on("click", addProduct);

        function checkUserStatus() {
            var currentUser = userSession.getCurrentUser();

            if (currentUser == undefined) {
                viewManager.showGuestWelcomeView();
            }
            else {
                viewManager.showUserWelcomeView();
            }
        }

        function userRegister() {
            var username = $("#register-username").val();
            var password = $("#register-password").val();
            var confirm = $("#confirm-password").val();

            if (password != confirm) {
                messageController.passwordMissMatch();
            }
            else {
                ajaxService.register(baseUrl + "users", username, password,
                    function () {
                        messageController.registerSuccessMsg();
                        userLogin(username, password);
                    }
                    , messageController.registerErrorMsg);
            }
        }

        function userLogin(username, password) {

            ajaxService.login(baseUrl + "users", username, password
                , function (data) {
                    messageController.loginSuccessMsg(data)
                }, messageController.loginErrorMsg);
        }

        function logoutUser() {
            userSession.logout();
            viewManager.showGuestWelcomeView();
        }

        function addProduct() {
            var currentUser = userSession.getCurrentUser();
            var name = $("#new_product_name").val();
            var category = $("#new_product_category").val();
            var price = $("#new_product_price").val();
            var currentProduct = new Product(name, category, price, currentUser.results[0].objectId);
            
            $("#new_product_name").val('');
            $("#new_product_category").val('');
            $("#new_product_price").val('');

            ajaxService.add(baseUrl + "classes/Product", currentProduct
                , messageController.productSuccessMsg, messageController.productErrorMsg);
        }
    }
}());