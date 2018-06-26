import queryDB from './db';
import bycript from 'bcrypt';

const checkLogin = (u, p) => (
    new Promise((resolve, reject) => {
        sql = `SELECT username,password
                FROM public."user" 
                WHERE username=$1 Or email =$1`;
        queryDB(sql, [u])
            .then(result => {
                bycript.compare(p, result.rows[0].password, (err, res) => {
                    if (err) reject(err);
                    if (!res) reject(err);
                    resolve(res);
                });
            }).catch((r) => reject(false));
    })
)

const getUserByUsername = (username) => (
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile, hobby
	FROM public."user" where username = $1 or email = $1`, [username])
)

const insertUser = ( username, name, password ) => (
    queryDB(`INSERT INTO public."User"(
        username, name, password)
	VALUES ($1,$2,$3) returning id, name, username, password`, [username, name, password])
)

//insertUser('thanh', 'xuan', 'thanhxuan', 'thanhxuan@gmail.com', '123456').then(r => console.log(r)).catch(e => console.log(e + ''));
//checkLogin('kientran','5465123456').then(res=>console.log(res));
module.exports = { checkLogin, getUserByUsername, insertUser };

