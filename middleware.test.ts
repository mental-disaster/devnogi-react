import { middleware } from './middleware'
import { NextRequest } from 'next/server'

// Helper to create NextRequest with optional cookies
function createRequest(url: string, cookie?: string) {
  return new NextRequest(new Request(url, cookie ? { headers: { cookie } } : {}));
}

describe('middleware', () => {
  it('redirects unauthenticated users', () => {
    const req = createRequest('https://example.com/protected');
    const res = middleware(req)!
    expect(res.headers.get('location')).toContain('/login');
  });

  it('allows authenticated users', () => {
    const req = createRequest('https://example.com/protected', 'authToken=abc');
    const res = middleware(req);
    expect(res.headers.get('location')).toBeNull();
  });
});
