import Link from 'next/link';
import { ReactElement } from 'react';

export function Links(): ReactElement {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>index</a>
        </Link>
      </li>
      <li>
        <Link href="/page1">
          <a>page1</a>
        </Link>
      </li>
      <li>
        <Link href="/page2">
          <a>page2</a>
        </Link>
      </li>
      <li>
        <Link href="/page3">
          <a>page3</a>
        </Link>
      </li>
      <li>
        <Link href="/page4">
          <a>page4</a>
        </Link>
      </li>
      <li>
        <Link href="/page5">
          <a>page5</a>
        </Link>
      </li>
      <li>
        <Link href="/page6">
          <a>page6</a>
        </Link>
      </li>
      <li>
        <Link href="/page7">
          <a>page7</a>
        </Link>
      </li>
      <li>
        <Link href="/page8">
          <a>page8</a>
        </Link>
      </li>
      <li>
        <Link href="/page9">
          <a>page9</a>
        </Link>
      </li>
    </ul>
  );
}
