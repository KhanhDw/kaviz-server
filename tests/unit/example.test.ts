// tests/unit/example.test.ts

import { describe, it, expect } from 'vitest';

// Đây là một "Test Suite"
describe('Example Test Suite', () => {
  // Đây là một "Test" (hoặc "Spec")
  it('should pass an initial simple test', () => {
    // Đây là một "Expectation"
    expect(true).toBe(true);
  });
});

// Hoặc đơn giản hơn:
// import { test, expect } from 'vitest';

// test('simple math check', () => {
//   expect(1 + 1).toBe(2);
// });
