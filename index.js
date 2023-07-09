const app = require("./src/app");
require("./src/database");

app.listen(app.get("port"), function () {
    console.log("Server listen on port " + app.get("port"));
})