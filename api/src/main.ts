import promBundle from 'express-prom-bundle';
import cors from 'cors';
import express from 'express';

import Server from './utils/Server';
import Router from './utils/Router';
import prometheusConfig from './config/prometheusConfig';
import HomeController from './controllers/HomeController';
import EpochService from './services/EpochService';
import EpochController from './controllers/EpochController';
import authenticateRequest from './middleware/authenticateRequest';

async function main() {
  // Init middleware
  const metricsMiddleware = promBundle(prometheusConfig);
  const urlEncodedMiddleware = express.urlencoded({
    extended: true
  });
  const jsonMiddlware = express.json();
  const corsMiddleware = cors();

  // Init services
  const epochService = new EpochService();

  // Init controllers
  const homeController = new HomeController();
  const epochController = new EpochController(epochService);

  // Init server
  const expressApp = express();
  const router = new Router([epochController, homeController]);
  const server = new Server([corsMiddleware, jsonMiddlware, urlEncodedMiddleware, authenticateRequest, metricsMiddleware], router, expressApp);

  server.start();
}

main().catch((err) => {
  console.error(`API Error: ${JSON.stringify(err)}`);
})