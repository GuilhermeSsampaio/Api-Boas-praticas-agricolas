module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'guilherme.sampaio@estudante.ifms.edu.br',
        defaultReplyTo: 'guilherme.sampaio@estudante.ifms.edu.br',
      },
    },
  },
  // ...
});
