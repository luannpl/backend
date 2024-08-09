const jwt = require('jsonwebtoken')

const JwtVerifyToken = (request, response, next) => {
        let token = request.headers.authorization? request.headers.authorization.split(" "): "";
        token = token ? token[1]: "";

        if(!token){
            response.json({message: 'Token inválido', sucess: false})
        }

        try {
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            response.status(403);
            return response.json({
                message: "Usuário não autorizado"
            })
        }

        next();
}

module.exports = JwtVerifyToken