import express, { Request, Response, NextFunction } from 'express';
import { middleWareWrapper } from '../tools';

const router = express.Router();


router.all(
    '/',
    middleWareWrapper(async (request: Request, response: Response, next: NextFunction) => {
        request.body = { text: 'Hello World!!!' };
        next();
    }),
    middleWareWrapper(async (request: Request, response: Response) => {
        response.render('hello', {
            title: 'Lets Go',
            message: request.body.text
        });
    })
);

export default router;
