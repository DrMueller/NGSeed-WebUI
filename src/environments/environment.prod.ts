export const environment = {
  activateSecurity: true,
  production: true,
  coreServiceBaseUrl: 'http://drmueller.westeurope.cloudapp.azure.com:80/api',
  adalConfig: {
    tenant: 'novacapta.de',
    clientId: '297fc587-359a-4ea5-9f2d-4b36aef9c3a1',
    redirectUri: 'http://drmueller.westeurope.cloudapp.azure.com:8080/',
    endpoints: {
      'http://drmueller.westeurope.cloudapp.azure.com:80/': '297fc587-359a-4ea5-9f2d-4b36aef9c3a1'
    }
  },
  appInfo: {
    appVersion: '__BuildNumber__',
    appName: 'NG-Seed'
  }
};
