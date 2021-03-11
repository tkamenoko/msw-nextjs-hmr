import { useRouter } from 'next/dist/client/router';
import { ReactElement } from 'react';

import { Links } from '../components/links';

export default function Others(): ReactElement {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.others}</h1>
      <Links />
    </div>
  );
}
