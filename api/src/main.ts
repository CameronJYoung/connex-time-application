import prometheus from 'express-prometheus-middleware';

import HomeController from './controllers/HomeController';
import Router from './utils/Router';
import Server from './utils/Server';
import prometheusConfig from './config/prometheusConfig';

async function main() {
  

  // Init controllers
  const homeController = new HomeController();

  // Init server
  const prometheusApp = prometheus(prometheusConfig);
  const router = new Router([homeController]);
  const server = new Server([], router, prometheusApp);

  server.start();
}

main().catch((err) => {
  console.log(`API Error: ${JSON.stringify(err)}`);
})