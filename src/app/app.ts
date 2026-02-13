import express from 'express';
import type { Server } from 'node:net';
import router from '../api/routes';
import config from '../config/config';
import { prisma } from '../db/client';


const app = express();
let server: Server;

async function initApp() {
  // db connection
  try {
    await prisma.$connect();
    console.log('DB connected successfully');
  } catch (e) {
    console.error('DB connection error');
    console.error(e);
    process.exit(1);
  }

  try {
    // routes
    app.use('/bread-shop/api', router);

    // start server
    server = app.listen(config.port, config.host);

    console.log(`Server started at http://${config.host}:${config.port}`);
  } catch (e) {
    console.error('Server error');
    console.error(e);
    process.exit(1);
  }
}

async function destroyApp(reason: string) {
  console.log(`Stopping server (reason: ${reason})...`);

  if (server) {
    server.close(() => {
      console.log('Server closed');
    });
  }

  if (prisma) {
    try {
      await prisma.$disconnect();
      console.log('DB disconnected');
    } catch (e) {
      console.error('DB disconnect error');
    }
  }

  console.log(`Server stopped by ${reason}`);
  process.exit(0);
}

process.on('SIGINT', () => destroyApp('SIGINT'));
process.on('SIGTERM', () => destroyApp('SIGTERM'));


initApp().catch(e => {
  console.error('Failed to start application:', e);
  process.exit(1);
});
