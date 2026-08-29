const pkg = require('./package.json');

function greet(name = 'World') {
  return `Hello, ${name}!`;
}

function createResponse(payload, meta = {}) {
  return {
    ok: true,
    payload,
    meta: {
      ...meta,
      generatedAt: new Date().toISOString(),
    },
  };
}

function healthcheck() {
  return {
    ok: true,
    service: pkg.name,
    version: pkg.version,
  };
}

module.exports = {
  greet,
  createResponse,
  healthcheck,
};
