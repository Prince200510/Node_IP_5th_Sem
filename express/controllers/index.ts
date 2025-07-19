
import express, { Request, Response, NextFunction } from 'express';
import { middleWareWrapper } from '../tools';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();


router.all(
    '/1',
    middleWareWrapper(async (request: Request, response: Response, next: NextFunction) => {
        const filePath = path.join(__dirname, '../data/student.json');
        let students = [];
        try {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            students = JSON.parse(fileContent); 
        } catch (err) {
            students = [];
        }
        // request.body = { students };
        // request.body = students.filter((student: any) => student.name === 'Prince Maurya');
        // request.body = students.slice(0,2);

        const readfilepath = path.join(__dirname, '../data/read.json');
        let readdata = { reads: 0 };
        try {
            if (fs.existsSync(readfilepath)) {
                const readfile = fs.readFileSync(readfilepath, 'utf8');
                readdata = JSON.parse(readfile);
            }
        } catch (err) {
            readdata = { reads: 0 };
        }
        readdata.reads += 1;
        fs.writeFileSync(readfilepath, JSON.stringify(readdata, null, 2));

        request.body = { students: students.filter((student: any) => student.name === 'Prince Maurya') };
        next();
    }),

    middleWareWrapper(async (request: Request, response: Response) => {
        response.render('hello', {
            title: 'Lets Go',
            students: request.body.students
        });
    })
);

export default router;
