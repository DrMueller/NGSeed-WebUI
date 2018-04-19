export const environment = {
  activateSecurity: true,
  production: true,
  coreServiceBaseUrl: 'https://ngseed-backend.azurewebsites.net/api',
  adalConfig: {
    tenant: 'novacapta.de',
    clientId: 'f9aa233a-c9fe-493e-b5d9-0ea2cca7b22f',
    redirectUri: 'https://ngseed-webui.azurewebsites.net/',
    endpoints: {
      'https://ngseed-backend.azurewebsites.net/': '297fc587-359a-4ea5-9f2d-4b36aef9c3a1'
    }
  },
  appInfo: {
    appVersion: 'BUILD_BUILDNUMBER',
    appName: 'NG-Seed'
  }
};
