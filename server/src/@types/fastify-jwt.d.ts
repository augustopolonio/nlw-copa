import '@fastify/jwt'

//documentação: https://github.com/fastify/fastify-jwt#typescript

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: {
            sub: string;
            name: string;
            avatarUrl: string;
        }
    }
}