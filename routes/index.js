

exports.index = function(req, res){
  res.render('index', { title: 'Populous' });
};

exports.login = function(req, res){
 res.render('login', { title: 'login' })
};

exports.dashboard = function(req, res){
 res.render('dashboard', { title: 'dashboard' })
};

exports.deployment = function(req, res){
 res.render('deployment', {
 	"title": "Deployment",
	"name": "San Francisco Deployment",
	"toppings":
		[
            { "id": "5001", "type": "Walnuts" },
            { "id": "5002", "type": "Jelly Beans" },
            { "id": "5005", "type": "Cherries" },
            { "id": "5007", "type": "Powdered Sugar" },
            { "id": "5006", "type": "Chocolate Sprinkles" },
            { "id": "5003", "type": "Chocolate Syrup" },
            { "id": "5004", "type": "Cocunut" }
		], 
	"yogurts":
		[
			{ "id": "5001", "type": "Tart", "flavors": 
				[
					{ "id": "5001", "type": "Green Tea" },
					{ "id": "5002", "type": "Euro" },
					{ "id": "5005", "type": "Orange" }
				] 
			},
			{ "id": "5002", "type": "Sweet", "flavors": 
				[
					{ "id": "5001", "type": "Vanilla" },
					{ "id": "5002", "type": "Chocolate" },
					{ "id": "5005", "type": "Mexican Bean" }
				] 
			},
			{ "id": "5005", "type": "Cake", "flavors": 
				[
					{ "id": "5001", "type": "Cherry Cheesecake" },
					{ "id": "5002", "type": "Apple Fritter" },
					{ "id": "5005", "type": "Carrot Cake" }
				]
			}
		] 
	})
};

