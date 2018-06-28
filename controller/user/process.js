import { insertUser, checkLogin } from '../../model/User';
import { sign } from '../../config/jwt';
import bycript from  'bcrypt';

export const register = (req, res) => {
    const { name, email, password } = req.body;
    bycript.hash(password, 10, (err, hash) => {
        if(err) return res.send({code: 1, message: err })
          insertUser(email.toLowerCase(), name, hash).then(message => {
              sign({name}).then(token => {
                res.cookie('token', token, { expires: new Date(Date.now() + 900000)})
                res.cookie('name', name, { expires: new Date(Date.now() + 900000)})
                res.send({code: 0, message });
            }).catch(e=> res.send({code: 1, message: e }));
        }).catch(er=>res.send({code: 1, message: er }));
    });
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    await checkLogin(email.toLowerCase(), password).then(result => {
        const {
            code, message
        } = result;
        if (code !== 0) {
            res.send({code, message });
        }
        sign({name: result.name}).then(token => {
            res.cookie('token', token, { expires: new Date(Date.now() + 900000)})
            res.cookie('name', result.name, { expires: new Date(Date.now() + 900000)})
            res.send({code: 0, message: result });
        });
    });
}
