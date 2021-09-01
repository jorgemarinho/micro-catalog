module.exports = {
  rest: {
    port: +(process.env.PORT || 3000),
    host: process.env.HOST,
    // The `gracePeriodForClose` provides a graceful close for http/https
    // servers with keep-alive clients. The default value is `Infinity`
    // (don't force-close). If you want to immediately destroy all sockets
    // upon stop, set its value to `0`.
    // See https://www.npmjs.com/package/stoppable
    gracePeriodForClose: 5000, // 5 seconds
    openApiSpec: {
      // useful when used with OpenAPI-to-GraphQL to locate your application
      setServersFromRequest: true,
    },
  },
  rabbitmq: {
    uri: process.env.RABBITMQ_URI,
    defaultHandlerError: parseInt(process.env.RABBITMQ_HANDLER_ERROR),
    exchanges: [{ name: 'dlx.amq.topic', type: 'topic' }],
    queues: [
      {
        name: 'dlx.sync-videos',
        options: {
          deadLetterExchange: 'amq.topic',
          messageTtl: 20000,
        },
        exchange: {
          name: 'dlx.amq.topic',
          routingKey: 'model.*.*',
        },
      },
    ],
  },
  jwt: {
    secret:
      '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsMGKqEIwjvghZFc4VPd2ROTkFWGTX5e5oNgFShvbbN3D1wxUWhk29uPN4U2oe8ZvYMFk7DYqAAodNaOxNgjJlw/9fVd31KdNG2DHoC1Nie0PzGvo4ABdnMoErrRsYvIMfXJYZbdcHpu96HDNBAmu6Q4JnWgErOAijkqxFEWUR6daIVDi9cIHmiFYux3OFvfP8MjJR4W2GcES4UdyIhlsi/Q0y9mtbTleK1l/j6EylruF8FibdaUwajr1mQSAKD2ueSiT8NUTEjLAK8cruGYlJUDkshadwSb5tI/tmYtlm5nmSWV6X871yrnYL9v8ivpvtWaHV7reQv8lm11RNz6J7wIDAQAB\n-----END PUBLIC KEY-----',
  },
};
