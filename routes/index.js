module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index', {
			title: "Administration LGC POS",
			description: "This application aims to create an administration panel for sales management."
		});	
	});
}