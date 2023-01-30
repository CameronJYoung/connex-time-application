const prometheusConfig = {
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  promClient: {
    collectDefaultMetrics: {}
  }
};

export default prometheusConfig;
