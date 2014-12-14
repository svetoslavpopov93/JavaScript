var Product = (function () {
    function Product(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = parseFloat(price);
    }

    Product.prototype.getName = function () { return this.name; }

    Product.prototype.getCategory = function () { return this.category; }

    Product.prototype.getPrice = function () { return this.price; }

    return Product;
}());
