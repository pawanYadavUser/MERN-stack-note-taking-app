var jwt = require('jsonwebtoken');
const JWT_SECRET = 'pawanisagoodb$oy';

const fetchuser = async(req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('authtoken');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token 1" , token})
    }
    try {
        const data = await jwt.verify(token, JWT_SECRET);
        console.log(data);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token 2" })
    }

}


module.exports = fetchuser;