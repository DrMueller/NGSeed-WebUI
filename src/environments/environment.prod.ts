export const environment = {
  production: true,
  microserviceBaseUrl: 'http://drmt.azurewebsites.net/api',
  securityServiceBaseUrl: 'http://drmt.azurewebsites.net/api',
  adalConfig: {
    tenant: 'novacapta.de',
    clientId: 'f9aa233a-c9fe-493e-b5d9-0ea2cca7b22f',
    redirectUri: 'http://localhost:4200/',
    endpoints: {
      'https://localhost:44392/': '297fc587-359a-4ea5-9f2d-4b36aef9c3a1'
    }
  }
};
