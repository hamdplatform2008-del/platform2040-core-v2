const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../');

test('greet returns a friendly salutation', () => {
  assert.equal(core.greet('Ada'), 'Hello, Ada!');
});

test('greet defaults to the world when no name is provided', () => {
  assert.equal(core.greet(), 'Hello, World!');
});

test('createResponse wraps payload with metadata', () => {
  const response = core.createResponse({ id: 7 }, { source: 'tests' });

  assert.equal(response.ok, true);
  assert.deepEqual(response.payload, { id: 7 });
  assert.equal(response.meta.source, 'tests');
  assert.equal(typeof response.meta.generatedAt, 'string');
});

test('healthcheck returns service metadata', () => {
  const response = core.healthcheck();

  assert.equal(response.ok, true);
  assert.equal(response.service, 'platform2040-core-v2');
  assert.equal(response.version, '1.0.0');
});
