import Link from 'next/link';
import { ReactElement } from 'react';

export function Links(): ReactElement {
  return (
    <div>
      <Link href="/">
        <a>index</a>
      </Link>
      <Link href="/page1">
        <a>page1</a>
      </Link>
      <Link href="/page1">
        <a>page1</a>
      </Link>
      <Link href="/page2">
        <a>page2</a>
      </Link>
      <Link href="/page3">
        <a>page3</a>
      </Link>
      <Link href="/page4">
        <a>page4</a>
      </Link>
      <Link href="/page5">
        <a>page5</a>
      </Link>
      <Link href="/page6">
        <a>page6</a>
      </Link>
      <Link href="/page7">
        <a>page7</a>
      </Link>
      <Link href="/page8">
        <a>page8</a>
      </Link>
      <Link href="/page9">
        <a>page9</a>
      </Link>
    </div>
  );
}
