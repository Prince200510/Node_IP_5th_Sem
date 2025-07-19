import dotenv from 'dotenv';

if(process.env.environment !== 'production') {
    dotenv.config();
}

export const PORT = Number(process.env.PORT);

if(!PORT|| Number.isNaN(PORT)) {
    console.error('Invalid Port Number');
    process.exit(1);
}