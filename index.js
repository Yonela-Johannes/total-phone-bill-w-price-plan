const PricePlans = require("./app.js");
const PricePlansDb = require("./sql/db.js");
const express = require('express')
const pgp = require('pg-promise')();
const local = 'postgres://postgres:juanesse123@localhost:5432/priceplanner';
const bodyParser = require('body-parser')
const cors = require('cors')
const handlebars = require('express-handlebars')
const session = require('express-session')
const dotenv = require('dotenv')
const Routes = require('./routes/routes.js')

const connectionString = process.env.DATABASE_URL || local

const config = {
    connectionString,
    max: 20,
    ssl: {
        rejectUnauthorized: false
    }
}

// server port number
const app = express()
const db = pgp(config)

app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
    layoutsDir: `./views/layouts`,
    extname: 'hbs',
    defaultLayout: 'main',
}))




const pricePlans = PricePlans()
const pricePlansDb = PricePlansDb(db)
const routes = Routes(pricePlans, pricePlansDb)

app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json())
app.use(cors())

app.get('/', routes.getHome)
app.post('/calc_bil', routes.postCalcBill)
app.get('/price_plans', routes.getPricePlans)
app.get('/link_user', routes.getLinkedUser)
app.post('/link_user', routes.postLinkedUser)


const port = process.env.PORT || 4000
// displaying server in localhost
app.listen(port, () => {
    console.log('Your app is running on port: ', port)
})