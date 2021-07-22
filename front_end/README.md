# MERN Stack

## Express Server

Other parts are mostly - MVC, Mongoose, Express listen
We fix our express routes to start with v1 to not crash with react route routes
Use 5 route for express
/holidays => Get => show all holidays
/holidays => POST => create 1 holiday
/holidays/:id => GET => get 1 holiday
/holidays/:id => PUT => update 1 holiday
/holidays/:id => DELETE => delete 1 holiday

js in holiday controller in express to avoid crash with react route
const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController); instead do below
app.use("v1/holidays", holidaysController); to avoid crash


## DotEnv

Make sure all the variables for deployment stored in .env
-PORT
-MONGODB_URI
-SECRET

### Express Middleware

Not use app.use(express.urlencoded()) use app.use(express.json())
setup static for express to be app.use(express.static("./cra/build'))
instead of setup static for express to be app.use(express.static("public'))
if you need to use cors
const cors = require("cors")
app.use(cors()); This is before all your routes => open cors to all

To set a whitelist => 
js
const corsOptions = {
    origin: [
        "http://localhost:3000,
        "https://fathomless-sierra-68956.herokuapp.com"
    ]
}

app.use(cors(corsOptions))

## React - View

### Proxy => Development

package.json

js
"proxy": "http://localhost:3003/"

### Fetch => GET

js 
fetch("/holidays")
          .then(
            (data) => data.json(),
            (err) => console.log(err)
          )
          .then(
            (parsedData) => props.setHoliday(parsedData),
            (err) => console.log(err)
    
          );
      }, []);

### Fetch => POST vs Curl
bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"World Kindness"}' http://localhost:3003/holidays

js 
fetch("/holidays", {
          method: "POST",
          body: JSON.stringify({ name: event.target.name.value }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((resJson) => {
            props.handleAddHoliday(resJson);
          })
          .catch((error) => console.error({ Error: error }));