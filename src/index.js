const express = require('express');
const app = express();
const path = require('path');
//app.use(methodOverride('_method'));
//app.use(cors());
app.use(express.json());

//App Acces Public
app.set("port", process.env.PORT || 3002);
app.listen(app.get("port"), () => console.log ("Server on http://localhost:"+app.get("port")));

//App View
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));

//App Acces Public
app.use(express.static(path.resolve(__dirname,'../public')));

//App Routes
const main = require('./routes/main');
app.use(main)

app.use(
    express.urlencoded({
            extended: false
        }));

