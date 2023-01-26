import prometheus from 'express-prometheus-middleware';

import Server from './utils/Server';
import Router from './utils/Router';
import prometheusConfig from './config/prometheusConfig';
import HomeController from './controllers/HomeController';
import EpochService from './services/EpochService';
import EpochController from './controllers/EpochController';
import authenticateRequest from './middleware/authenticateRequest';

async function main() {
  // Init services
  const epochService = new EpochService();

  // Init controllers
  const homeController = new HomeController();
  const epochController = new EpochController(epochService);

  // Init server
  const prometheusApp = prometheus(prometheusConfig);
  const router = new Router([epochController, homeController]);
  const server = new Server([authenticateRequest], router, prometheusApp);

  server.start();
}

main().catch((err) => {
  console.error(`API Error: ${JSON.stringify(err)}`);
})