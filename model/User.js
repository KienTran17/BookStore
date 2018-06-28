import queryDB from './db';
import bycript from 'bcrypt';

const checkLogin = (u = '', p = '') => (
    new Promise((resolve, reject) => {
        const sql = `SELECT *
                FROM public."User" 
                WHERE email=$1`;
        queryDB(sql, [u])
            .then(result => {
                const {
                    password = ''
                } = result[0] || {};
                bycript.compare(p, password, (err, res) => {
                    console.log(res)
                    if (err) resolve({code: 1, message: err})
                    if (!res) resolve({code: 1, message: 'invalid password'})
                    resolve({code: 0, message: result[0]});
                });
            })
    })
)

const getUserByUsername = (username) => (
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile, hobby
	FROM public."user" where username = $1 or email = $1`, [username])
)

const insertUser = ( email, name, password ) => (
    queryDB(`INSERT INTO public."User"(
        email, name, password)
	VALUES ($1,$2,$3) returning id, name, email, password`, [email, name, password])
)

// insertUser('Trung Tran', 'trung@gmail.com', '123456').then(r => console.log(r)).catch(e => console.log(e + ''));
//checkLogin('kientran','5465123456').then(res=>console.log(res));
module.exports = { checkLogin, getUserByUsername, insertUser };

