import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { BuildStatusBadge, BuildStatusBadgeProps } from '../components/BuildStatusBadge';

function renderComponent(props: BuildStatusBadgeProps, children: React.ReactNode = undefined): RenderResult {
  return render(<BuildStatusBadge {...props}>{children}</BuildStatusBadge>);
}

describe('BuildStatusBadge', () => {
  test('should render without crashing', async () => {
    const props: BuildStatusBadgeProps = {
      href: 'https://github.com/justinmahar/react-build-status-badge/actions',
      src: 'https://github.com/justinmahar/react-build-status-badge/workflows/Node.js%20CI/badge.svg',
      alt: 'Build Status',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
