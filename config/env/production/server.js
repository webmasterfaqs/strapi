// config/env/production/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),      // 0.0.0.0 so Heroku will route traffic
  port: env.int('PORT', 1337),       // Heroku injects a random PORT env var
  app: { keys: env.array('APP_KEYS') } // required in production for cookies
});
