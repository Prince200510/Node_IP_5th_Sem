// const express = require('express');

// const app = express();
// const port = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.send('Prince Maurya');
// });

// app.get('/home', (req, res) => {
//     const {name, age} = req.query;
//     if(req.query.name && req.query.age) {
//         res.send('Okay bro your data is received');
//     } else {
//         res.send('Bro please share your data');
//     }
// });

// app.get('/about', (req, res) => {
//     const object = [
//         {
//             name: 'Prince Maurya',
//             age: 19
//         },
//         {
//             name: 'Nobita',
//             age: 20
//         }
//     ];
//     res.json(object);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// })


// const fs = require('fs');
// import * as fileIo from 'fs';

// const create = (filename, data) => new Promise(
//     (resolve, reject) => {
//         fileIo.writeFile(filename, JSON.stringify(data), 'utf8', (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve('File created');
//             }
//         });
//     }
// );

// const readFile = (filename) => new Promise(
//     (resolve, reject) => {
//         fileIo.readFile(filename, 'utf8', (err, data) => {
//             if (err) {
//                 if (filename === 'record.json') resolve({ write: 0, read: 0 });
//                 else reject(err);
//             } else {
//                 resolve(JSON.parse(data));
//             }
//         });
//     }
// );

// (async () => {
//     let record = await readFile('record.json');
//     record.write = record.write + 1;   
//     await create('record.json', record);
//     await create('data.json', { data: 'Prince Maurya' });

//     record.read = record.read + 1;
//     await create('record.json', record);
//     let data = await readFile('data.json');
// })();


// .then((data) => {
//     console.log(data);
// })


// ( async () => {
//     const result = await create('data.json', {name: 'Prince', age: 19});
    
//     if(result){
//         console.log(result);
//     } else console.error('Error creating file');
// })


import * as fileIo from 'fs';

const initRecord = async () => {
    try {
        await readFile('./record.json');
    } catch {
        await createFile('./record.json', { totalReads: 0, totalWrites: 0 });
    }
};

const createFile = (filePath, data) => new Promise((resolve, reject) => {
    fileIo.writeFile(filePath, JSON.stringify(data), 'utf8', (err) => {
        if (err) return reject(err);
        resolve(data);
    });
});

const readFile = (filePath) => new Promise((resolve, reject) => {
    fileIo.readFile(filePath, 'utf8', (err, data) => {
        if (err) return reject(err);
        resolve(JSON.parse(data));
    });
});

const maintainRecord = async (operation) => {
    await initRecord();
    const record = await readFile('./record.json');
    if (operation === 'read') {
        record.totalReads = (record.totalReads || 0) + 1;
    } else if (operation === 'write') {
        record.totalWrites = (record.totalWrites || 0) + 1;
    }
    await createFile('./record.json', record);
};

(async () => {
    try {
        await maintainRecord('write');
        const fileWriteSuccess = await createFile('./data.json', { data: 'This is a test data' });
        if (fileWriteSuccess) {
            console.log('File created successfully');
        }
    } catch (error) {
        console.error('Error writing file:', error);
    }

    try {
        await maintainRecord('read');
        const data = await readFile('./data.json');
        console.log('File data:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
})();