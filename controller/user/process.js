import { insertUser } from '../../model/User';
import { sign } from '../../config/jwt';
import bycript from  'bcrypt';

export const register = (req, res) => {
    const { txtFirstName, txtUsername, txtLastName, txtEmail, txtPassword } = req.body;
    bycript.hash(txtPassword, 10,   (err, hash) => {
        if(err) return console.log(err+'');
          insertUser(txtFirstName, txtLastName, txtUsername, txtEmail, hash).then(  r => {
            const username = txtUsername;
              sign({username}).then(token => {
                req.session.username = username;
                res.cookie('tk', token, { expires: new Date(Date.now() + 900000)}).send(r.rows[0]);
            }).catch(e=> res.send());
        }).catch(er=>res.send());
    });
}
