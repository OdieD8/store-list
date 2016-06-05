/* global Firebase */
angular.module("app").controller("homeController", function($scope, $firebaseObject, $firebaseArray, $state, userService) {

	var ref = new Firebase("https://store-list.firebaseio.com/");
	var bakery = new Firebase("https://store-list.firebaseio.com/Bakery");
	var baking = new Firebase("https://store-list.firebaseio.com/Baking");
	var cannedGoods = new Firebase("https://store-list.firebaseio.com/CannedGoods");
	var dairy = new Firebase("https://store-list.firebaseio.com/Dairy")
	var drinks = new Firebase("https://store-list.firebaseio.com/Drinks");
	var frozen = new Firebase("https://store-list.firebaseio.com/Frozen");
	var fruitVegetables = new Firebase("https://store-list.firebaseio.com/FruitVegetables");
	var grains = new Firebase("https://store-list.firebaseio.com/Grains");
	var hardware = new Firebase("https://store-list.firebaseio.com/Hardware");
	var homeGoods = new Firebase("https://store-list.firebaseio.com/HomeGoods");
	var meat = new Firebase("https://store-list.firebaseio.com/Meat");
	var forOdie = new Firebase("https://store-list.firebaseio.com/ForOdie");
	var paperCleaningProds = new Firebase("https://store-list.firebaseio.com/PaperCleaningProds");
	var pharmacy = new Firebase("https://store-list.firebaseio.com/Pharmacy");
	var snacksChipsCandy = new Firebase("https://store-list.firebaseio.com/SnacksChipsCandy");
	var other = new Firebase("https://store-list.firebaseio.com/Other");

    var user = ref.getAuth();

    if (user === null) {
        alert("Please Login");
        $state.go("login");
    };

    $scope.bakery = $firebaseArray(bakery);
	$scope.baking = $firebaseArray(baking);
	$scope.cannedGoods = $firebaseArray(cannedGoods);
	$scope.dairy = $firebaseArray(dairy);
	$scope.drinks = $firebaseArray(drinks);
	$scope.frozen = $firebaseArray(frozen);
	$scope.fruitVegetables = $firebaseArray(fruitVegetables);
	$scope.grains = $firebaseArray(grains);
	$scope.hardware = $firebaseArray(hardware);
	$scope.homeGoods = $firebaseArray(homeGoods);
	$scope.meat = $firebaseArray(meat);
	$scope.forOdie = $firebaseArray(forOdie);
	$scope.paperCleaningProds = $firebaseArray(paperCleaningProds);
	$scope.pharmacy = $firebaseArray(pharmacy);
	$scope.snacksChipsCandy = $firebaseArray(snacksChipsCandy);
	$scope.other = $firebaseArray(other);

	$scope.dropDown = "Select Category";
    $scope.newItem = "";

    $scope.addItem = function(){

        var newItem = $scope.newItem.trim();
        if (!newItem.length) {

			alert("Please enter item");
			$scope.dropDown = "Select Category";
    		$scope.newItem = "";
            return;
        }

		if ($scope.dropDown === "Bakery") {

			$scope.bakery.$add({

				title: newItem,
				category: "bakery",
				completed: false
			});

		}

		if ($scope.dropDown === "Baking") {

			$scope.baking.$add({

				title: newItem,
				category: "baking",
				completed: false
			});

		}

		if ($scope.dropDown === "Canned Goods") {

			$scope.cannedGoods.$add({

				title: newItem,
				category: "canned goods",
				completed: false
			});

		}

		if ($scope.dropDown === "Dairy") {

			$scope.dairy.$add({

				title: newItem,
				category: "dairy",
				completed: false
			});
		}

		if ($scope.dropDown === "Drinks") {

			$scope.drinks.$add({

				title: newItem,
				category: "drinks",
				completed: false
			});
		}

		if ($scope.dropDown === "Frozen") {

			$scope.frozen.$add({

				title: newItem,
				category: "frozen",
				completed: false
			});
		}

		if ($scope.dropDown === "Fruit/Vegetables") {

			$scope.fruitVegetables.$add({

				title: newItem,
				category: "fruitVegetables",
				completed: false
			});

		}

		if ($scope.dropDown === "Grains") {

			$scope.grains.$add({

				title: newItem,
				category: "grains",
				completed: false
			});

		}

		if ($scope.dropDown === "Hardware") {

			$scope.hardware.$add({

				title: newItem,
				category: "hardware",
				completed: false
			});

		}

		if ($scope.dropDown === "Home Goods") {

			$scope.homeGoods.$add({

				title: newItem,
				category: "homeGoods",
				completed: false
			});

		}

		if ($scope.dropDown === "Meat") {

			$scope.meat.$add({

				title: newItem,
				category: "meat",
				completed: false
			});

		}

		if ($scope.dropDown === "For Odie Use Only") {

			$scope.forOdie.$add({

				title: newItem,
				category: "forOdie",
				completed: false
			});

		}

		if ($scope.dropDown === "Paper/CleaningProds") {

			$scope.paperCleaningProds.$add({

				title: newItem,
				category: "paperCleaningProds",
				completed: false
			});
		}

		if ($scope.dropDown === "Pharmacy") {

			$scope.pharmacy.$add({

				title: newItem,
				category: "pharmacy",
				completed: false
			});

		}

		if ($scope.dropDown === "Snacks/Chips/Candy") {

			$scope.snacksChipsCandy.$add({

				title: newItem,
				category: "snacksChipsCandy",
				completed: false
			});

		}

		if ($scope.dropDown === "Other") {

			$scope.other.$add({

				title: newItem,
				category: "other",
				completed: false
			});
		}

		$scope.dropDown = "Select Category";
        $scope.newItem = "";
    };

    $scope.removeItem = function(item){

		if (item.category === "bakery") {

			$scope.bakery.$remove(item);
		}

		if (item.category === "baking") {

			$scope.baking.$remove(item);
		}

		if (item.category === "canned goods") {

			$scope.cannedGoods.$remove(item);
		}

		if (item.category === "dairy") {

			$scope.dairy.$remove(item);
		}

		if (item.category === "drinks") {

			$scope.drinks.$remove(item);
		}

		if (item.category === "frozen") {

			$scope.frozen.$remove(item);
		}

		if (item.category === "fruitVegetables") {

			$scope.fruitVegetables.$remove(item);
		}

		if (item.category === "grains") {

			$scope.grains.$remove(item);
		}

		if (item.category === "hardware") {

			$scope.hardware.$remove(item);
		}

		if (item.category === "homeGoods") {

			$scope.homeGoods.$remove(item);
		}

		if (item.category === "meat") {

			$scope.meat.$remove(item);
		}

		if (item.category === "forOdie") {

			$scope.forOdie.$remove(item);
		}

		if (item.category ==="paperCleaningProds") {

			$scope.paperCleaningProds.$remove(item);
		}

		if (item.category === "pharmacy") {

			$scope.pharmacy.$remove(item);
		}

		if (item.category ==="snacksChipsCandy") {

			$scope.snacksChipsCandy.$remove(item);
		}

		if (item.category ==="other") {

			$scope.other.$remove(item);
		}
    };

    $scope.logout = function() {
        userService.logout(ref);
    };
});
