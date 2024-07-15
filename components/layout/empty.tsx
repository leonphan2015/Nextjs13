// EmptyLayout.tsx
import { LayoutProps } from '@/models/common';
import * as React from 'react';
import { ReactElement } from 'react';

export function EmptyLayout({ children }: LayoutProps): ReactElement {
  return <div>{children}</div>;
}
