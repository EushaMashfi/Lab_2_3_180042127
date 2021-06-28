require("dotenv").config();
const app = require("./app");
const monGoose = require("mongoose");
const port = process.env.PORT;
const connection_url = process.env.DB_CONNECTION;

monGoose
    .connect(connection_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(port, () => {
            console.log(
                `Mongodb connected and Server running on port: ${port}`
            );
        })
    )
    .catch((error) => console.log(error.message));
