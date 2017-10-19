// Загружаем модуль http
const http = require('http');

const hostname = 'node.js';//'127.0.0.1';
const port = 80;

// Создаем web-сервер с обработчиком запросов
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});


// Запускаем web-сервер
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
