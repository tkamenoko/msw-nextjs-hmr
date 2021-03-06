import { AppProps } from 'next/app';
import { ReactElement } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    import('../mocks/browser').then((m) => m.worker.start());
  }
}
