import dotenv from 'dotenv';

if(process.env.environment !== 'production') {
    dotenv.config();
}

 const PORT = Number(process.env.PORT);
 const MONGODB_URI = process.env.MONGODB_URI;

if(!PORT|| Number.isNaN(PORT)) {
    console.error('Invalid Port Number');
    process.exit(1);
}

if(!MONGODB_URI) {
    console.error('Invalid MongoDB URI');
    process.exit(1);
}

export { PORT, MONGODB_URI };