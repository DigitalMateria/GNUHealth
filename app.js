// deps
var express = require('express'),
	router = require('./server/router'),
	http = require('http'),
	path = require('path'),
	dbPath = 'mongodb://localhost/gnuhealth',
	
	// data layer
	mongoose = require('mongoose'),
	// models
	models = {
		User: require('./server/model/user')(mongoose)
	},
	
	app = express();
	
// conf. environments
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'client')));

// db
mongoose.connect(dbPath, function (err) {
	if (err) {
		throw err;
	}
});

// router
router.init(app, models);

app.listen(8080);
console.log('Listening on port 8080');