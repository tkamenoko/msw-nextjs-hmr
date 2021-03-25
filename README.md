# msw-nextjs-hmr

Using MSW with Next.js causes stopping HMR/Fast Refresh because of unclosed SSE connections.

## Tested env

- OS: KDE Neon 5.2.1 (Based on Ubuntu 20.04)
- Browser: Chromium 89.0.4389.90, Firefox 86.0.1
- Node.js: v14.14.0
- MSW: v0.28.0
- Next.js: 10.0.9

## Reproduction steps

1. Clone this repo.
1. Install deps: `yarn` .
1. Start dev server: `yarn dev` .
1. Open `localhost:3000` in your browser.
1. Show `Network` tab in DevTools.
1. Click rendered links, and you will find that SSE connections between MSW and the dev server are not closed.
1. After the number of connections reaches the limit, HMR will not work.
1. Reload the page, but it will not complete: `Waiting for available sockets`

Note that HMR works as expected without clicking links.
