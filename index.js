const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const dotenv = require('dotenv');
require('dotenv').config()

const path = require("path");
const app = express();

app.use(cors());

/*==================
  Server configuration
===================*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use(express.urlencoded({ extended: false }));


/*==================
  API Routes
===================*/
app.use('/api/tasklist', require('./controller/api/tasklist'));

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

/*==================
  Start Express Server
===================*/
app.listen(process.env.PORT || 5200, () => {
  console.log("Server started (http://localhost:5200/)!");
});
