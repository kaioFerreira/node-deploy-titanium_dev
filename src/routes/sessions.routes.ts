import {Router} from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';


const connection = require('../database/connection');

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try{
        const {email, password} = request.body;

        const authenticateUser = new AuthenticateUserService();

        await authenticateUser.execute({
            email,
            password,
        })

        return response.json({ok: true});
    } catch (err) {
        return response.status(400).json({error: err.message});
    }
});

sessionsRouter.get('/', (request, response) => {
    return response.json({ok: true});
});

export default sessionsRouter;