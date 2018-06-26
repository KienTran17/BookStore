import userRouter from './controller/user';
import bookRouter from './controller/book';

const express = require('express');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
let server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(session({
    secret: 'sh72cjs2c92du82asdfasdfsfdadhfd',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 900000
    }
}));


//gói body-parser lấy dữ liệu từ form (POST) trong ejs

//sử dụng gói ejs tạo trang html
app.set('view engine', 'ejs');
app.set('views', './views'); //views

app.use(express.static('public'));

app.use('/api/user', userRouter);
app.use('/api/book', bookRouter);

app.get('/', (req, res) => res.render('front-end/home/index.ejs'));
app.get('*', (req, res) => res.send('The page not found!'));

server.listen(process.env.PORT || '3000');
