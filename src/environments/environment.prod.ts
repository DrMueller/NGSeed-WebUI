export const environment = {
  activateSecurity: true,
  production: true,
  coreServiceBaseUrl: 'https://ngseed-backend.azurewebsites.net/api',
  adalConfig: {
    tenant: 'novacapta.de',
    clientId: '297fc587-359a-4ea5-9f2d-4b36aef9c3a1',
    redirectUri: 'http://drmueller.westeurope.cloudapp.azure.com:8080/',
    endpoints: {
      'https://ngseed-backend.azurewebsites.net/': '297fc587-359a-4ea5-9f2d-4b36aef9c3a1'
    }
  },
  appInfo: {
    appVersion: '__BUILD_BUILDNUMBER__',
    appName: 'NG-Seed'
  }
};


