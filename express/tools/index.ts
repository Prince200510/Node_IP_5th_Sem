import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();

// export const timeout = (milliseconds: number) => new Promise(resolve => {
//     setTimeout(resolve, milliseconds);
// });

export const middleWareWrapper = (callback: Function) => {
    return (request: Request, response: Response, next: NextFunction) => {
        Promise.resolve(callback(request, response, next))
            .catch((err) => next(err));
    };
};


router.all(
    '/',
    middleWareWrapper(async (request: Request, response: Response, next: NextFunction) => {
        request.body = { text: 'Hello World!!!' };
        next();
    }),
    middleWareWrapper(async (request: Request, response: Response) => {
        response.send(request.body.text);
    })
);

// export {timeout, middleWareWrapper};
export default router;

// function middleWareWrapper(arg0: (request: Request, response: Response, next: NextFunction) => Promise<void>): import("express-serve-static-core").RequestHandler<{}, any, any, import("qs").ParsedQs, Record<string, any>> {
//     throw new Error('Function not implemented.');
// }
