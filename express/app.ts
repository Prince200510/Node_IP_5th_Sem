
import express, {NextFunction, Request, Response} from 'express';
import logger from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {PORT} from './Env';
import { appendFile } from 'fs';
import router from './controllers';
// import dotenv from 'dotenv';
// dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set('views', path.join(__dirname, 'views')); // Correct key is 'views', not 'view'
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.all('/', 
    (req: Request, res: Response, next: NextFunction) => {
        //  res.send('Let\'s go bro ');
        req.body = {name: 'Prince Maurya123'};
        next();
    }, 
    (req: Request, res: Response) => {
        // res.send(req.body);
        res.send(req.body.name);
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});