import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

// AOS startet einen MutationObserver, der nach Testende auf document zugreift.
vi.mock('aos', () => ({
  default: {
    init: vi.fn(),
    refresh: vi.fn(),
  },
}));

describe('App', () => {
  it('renders the app shell', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });
});
