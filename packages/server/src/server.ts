import app from './app';
import databaseConnection from './database/database.connection';

const SERVER_PORT: number = Number(process.env.SERVER_PORT) || 6000;
databaseConnection.then(() => {
  app.listen(SERVER_PORT);
  console.log('Server started');
}).catch(console.error);

function listeningReporter () {
  // `this` refers to the http server here
  const { address, port } = this.address();
  const protocol = this.addContext ? 'https' : 'http';
  console.log(`Listening on ${protocol}://${address}:${port}...`);
}

