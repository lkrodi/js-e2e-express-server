const server = require('./server');

// App Service on Windows: PORT
// App Service on Linux: WEB_PORT
const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';
console.log("testing....");

server.create()
    .then(app => {
        app.listen(port, hostname, () => {
            console.log(`Server has started on port ${port}!`);
        });
    }).catch(err => console.log(err));