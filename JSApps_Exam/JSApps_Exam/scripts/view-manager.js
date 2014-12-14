/// <reference path="jquery.js" />
/// <reference path="noty.js" />
/// <reference path="user-session.js" />
/// <reference path="ajax-service.js" />
/// <reference path="controller.js" />

var viewManager = (function () {
    function showOnLoggedUser() {
        hideSections();
        $("#on-logged-user").show();
        $("#on-non-logged-user").hide();
    }

    function showOnNonLoggedUser() {
        hideSections();
        $("#on-logged-user").hide();
        $("#on-non-logged-user").show();
    }

    function showGuestWelcomeView() {
        hideSections();
        showOnNonLoggedUser();
        $("#welcome-guest").show();
    }

    function showUserWelcomeView() {
        var currentUser = userSession.getCurrentUser();
        hideSections();
        showOnLoggedUser();
        $("#welcome-user").show();
        $("#welcome-user-header").text("Welcome, " + currentUser.results[0].username);
    }

    function showLoginView() {
        hideSections();
        $("#login-form").show();
    }

    function showRegisterView() {
        hideSections();
        $("#register-form").show();
    }

    function showProductsSection(url, sessionToken) {
        hideSections();
        $('#products-list').show();
        ajaxService.allProducts(url, sessionToken, listAllProducts, messageController.productsLoadErrorMsg);
    }

    function showAddProductsSection() {
        hideSections();
        $("#add-product-form").show();
        $("#cancel_btn").on("click", function () {
            hideSections();
            checkSessionState();
        });
    }

    function hideSections() {
        $("#main section").hide();
    }
    function listAllProducts(data) {
        var productsContainer = $("#products_container");
        productsContainer.text("");
        for (var p in data.results) {
            var product = new Product(data.results[p].name, data.results[p].category, data.results[p].price, undefined);
            var productItem = $('<li class="product">');

            var btnEdit = $("<a href='#'>Edit</a>").on("click", function () {
                editItem(data.results[p].objectId, product);
            });
            var btnDelete = $("<a href='#'>Delete</a>").on("click", function () {
                deleteItem(data.results[p].objectId, product.name, product.category, product.price);
            });

            productItem.append($('<h3>').text(product.name));
            productItem.append($('<hr>'));
            productItem.append($('<p>').text(product.category));
            productItem.append($('<p>').text(product.price));

            productItem.append(btnEdit);
            productItem.append(btnDelete);
            productsContainer.append(productItem);

           
        }

        function editItem(id, prod) {
            var product = prod;
            var url = "https://api.parse.com/1/";
            hideSections();
            $("#edit-product-form").show();
            var editName = $("#edit_name");
            editName.val(product.name);
            var editCat = $("#edit_category");
            editCat.val(product.category);
            var editPrice = $("#edit_category");
            editPrice.val(product.price);

            var btn = $("#edit-product-button").on("click", function () {
                var data = {
                    name: editName.val(),
                    category: editCat.val(),
                    price: parseFloat(editPrice.val())
                    };
                ajaxService.editProduct(url + "classes/Product/" + id, data, messageController.editSuccessMsg, messageController.editErrorMsg);
                $('#products-list').show();
            });

            $("#edit_cancel_btn").on("click", function () {
                hideSections();
                $('#products-list').show();
            });
        }

        function deleteItem(id, prodName, prodCat, prodPrice) {
            var url = "https://api.parse.com/1/";

            hideSections();

            $("#delete-product-form").show();
            $("#delete_name").val(prodName);
            $("#delete_category").val(prodCat);
            $("#delete_price").val(prodPrice);

            var btn = $("#delete-product-button").on("click", function () {
                ajaxService.deleteProduct(url, id, messageController.productDeletedSuccessMsg, messageController.productDeletedErrorMsg);

                $('#products-list').show();
            });

            $("#delete_cancel").on("click", function () {
                hideSections();

                $('#products-list').show();
            });
        }
    }


    function checkSessionState() {
        var currentUser = userSession.getCurrentUser();

        if (currentUser == undefined) {
            viewManager.showGuestWelcomeView();
        }

        else {
            viewManager.showUserWelcomeView();
        }
    }

    return {
        showOnLoggedUser: showOnLoggedUser,

        showOnNonLoggedUser: showOnNonLoggedUser,

        showGuestWelcomeView: showGuestWelcomeView,

        showUserWelcomeView: showUserWelcomeView,

        showLoginView: showLoginView,

        showRegisterView: showRegisterView,

        showProductsSection: showProductsSection,

        showAddProductsSection: showAddProductsSection,

        checkSessionState: checkSessionState
    };
}());