import Fasify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from './routes/pool'
import { authRoutes } from './routes/auth'
import { gameRoutes } from './routes/game'
import { guessRoutes } from './routes/guess'
import { userRoutes } from './routes/user'

async function bootstrap() {
    const fastify = Fasify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    //Em produção isso precisa ser uma variável ambiente
    //esse secret é uma string que pode ser um token ou uma senha que o 
    //jwt irá se basear para gerar o token dele
    await fastify.register(jwt, {
        secret: 'nlwcopa',
    })

    await fastify.register(authRoutes)    
    await fastify.register(gameRoutes)    
    await fastify.register(guessRoutes)    
    await fastify.register(poolRoutes)    
    await fastify.register(userRoutes)    

    //TODO: Corrigir essa parte do host, para rodar tanto web quanto mobile
    //Web
    //await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ })
    //Mobile
    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()