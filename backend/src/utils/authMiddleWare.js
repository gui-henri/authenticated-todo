const { OAuth2Client } = require('google-auth-library')

const CLIENT_ID = "YOUR CLIENT ID"
const client = new OAuth2Client(CLIENT_ID)

module.exports = {
    async verify(req, res, next){
        const token = req.header('Authorization')?.replace('Bearer ', '')
        if(!token)
            return res.send('sem permição')
    
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        })

        const payload = ticket.getPayload();
        if(!payload)
            return res.send('sem permição')
        const userId = payload['sub']
        res.locals['userId'] = userId
        next()
    }
}
