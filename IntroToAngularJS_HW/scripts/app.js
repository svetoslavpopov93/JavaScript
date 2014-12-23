function UserController($scope) {
    var user = {
        name: "Pesho",
        photo: "http://www.nakov.com/wp-content/uploads/2014/05/",
        grade: 5,
        school: "High School of Mathematics",
        teacher: "Gichka Pesheva",
    }

    $scope.user = user;
}

function TigerController($scope) {
    var tiger = {
        "Name": "Pesho",
        "Born": "Asia",
        "BirthDate": "2006",
        "Live":"Sofia Zoo"
    };
    var imageUrl = "http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg";

    var hStyles = {
        "text-align": "center",
        "color": "#2E4052",
        "font-family": "Calibri",
        "font-weight": "bold",
        "font-size": "1.75em",
        "margin-top": "0"
    };

    var spanStyles = {
        "color": "#2E4052",
        "font-family": "Calibri",
        "font-weight": "bold",
        "font-size": "1.7em",
        "margin-left":"50px"
    };

    var textStyles = {
        "color": "#2E4052",
        "font-family": "Calibri",
        "font-size": "1.7em",
        "margin-left":"12px"
    };

    var divStyles = {
        "display": "inline-block",
        "width": "300px",
        "height": "240px",
        "background-color": "#D3D3D3",
        "padding": "55px",
        "padding-left":"0",
        "float":"left"
    };

    var imgStyles = {
        "width":"320px"
    };

    var imageSrc = "http://tigerday.org/wp-content/uploads/2013/04/tiger.jpg";

    $scope.tiger = tiger;
    $scope.spanStyles = spanStyles;
    $scope.textStyles = textStyles;
    $scope.divStyles = divStyles;
    $scope.hStyles = hStyles;
    $scope.imageSrc = imageSrc;
    $scope.imgStyles = imgStyles;
}
