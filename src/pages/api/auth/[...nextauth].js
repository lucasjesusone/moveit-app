import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'


// Install dependencies

const options = {
    providers: [
        Providers.Github({
            clientId: process.env.
            clientSecret: process.env
            authorizationUrl: ""
        }),

    ]
    session: {
        jwt: true,
    },

    jwt : {
        secret: process.env
    }
}

export default (req, res) => NextAuth(req, res, options)


// Finish to config .env