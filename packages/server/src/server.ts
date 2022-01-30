import app from './app';
import databaseConnection from './database/database.connection';

const SERVER_PORT: number = Number(process.env.SERVER_PORT) || 6000;
databaseConnection.then(() => app.listen(SERVER_PORT)).catch(console.error);
