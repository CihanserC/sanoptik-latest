import { render, screen } from '@testing-library/react';
import { LanguageProvider } from './context/LanguageContext';
import QuickInfoBar from './components/QuickInfoBar';

test('renders contact info bar', () => {
  render(
    <LanguageProvider>
      <QuickInfoBar />
    </LanguageProvider>
  );
  expect(screen.getByText(/534 567 98 08/)).toBeInTheDocument();
});
