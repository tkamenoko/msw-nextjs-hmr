# msw-nextjs-hmr

Using MSW with Next.js causes stopping HMR/Fast Refresh because of unclosed SSE connections.

## Tested env

- OS: KDE Neon 5.2.1 (Based on Ubuntu 20.04)
- Browser: Chromium 89.0.4389.82
- Node.js: v14.14.0
- MSW: v0.26.2 (v0.27.1 has a bug: `expires.getTime is not a function` . It may be solved on `@msw/cookies` v0.1.4.)
- Next.js: 10.0.8

## How to reproduce

1. Clone this repo.
1. Install deps: `yarn` .
1. Start dev server: `yarn dev` .
1. Open `localhost:3000` in your browser.
1. Show `Network` tab in DevTools.
1. Click rendered links, and you will find that SSE connections are not cleared.
1. Reload the page, but it will not complete: `Waiting for available sockets`

Note that HMR works as expected without clicking links.
