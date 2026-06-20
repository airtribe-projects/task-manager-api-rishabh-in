const express = require('express');
const routes = require('./src/routes/task-manager.route');
const errorHandler = require('./src/middleware/error.middleware');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)
app.use(errorHandler)

if (require.main === module) {
    app.listen(port, (err) => {
        if (err) {
            return console.log('Something bad happened', err);
        }
        console.log(`Server is listening on ${port}`);
    });
}



module.exports = app;
