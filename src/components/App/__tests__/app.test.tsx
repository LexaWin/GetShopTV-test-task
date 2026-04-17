import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '..';

vi.mock('../../Video', () => ({
  default: ({ bannerControl, canPlayVideo }: any) => {
    setTimeout(bannerControl, 5000);

    return (
      <div data-testid="video-state">
        {canPlayVideo ? 'playing' : 'stopped'}
      </div>
    );
  },
}));

vi.mock('../../Banner', () => ({
  default: ({ bannerControl }: any) => (
    <div>
      <span>banner</span>
      <button onClick={bannerControl}>trigger-promo</button>
    </div>
  ),
}));

vi.mock('../../Promo', () => ({
  Promo: ({ promoControl }: any) => (
    <div>
      <span>promo</span>
      <button onClick={promoControl}>close-promo</button>
    </div>
  ),
}));

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('automatically shows banner after 5 seconds', () => {
    render(<App />);

    // сначала баннера нет
    expect(screen.queryByText('banner')).not.toBeInTheDocument();

    // прокручиваем время
    vi.advanceTimersByTime(5000);

    expect(screen.getByText('banner')).toBeInTheDocument();
  });

  it('activates promo and stops video', () => {
    render(<App />);

    vi.advanceTimersByTime(5000); // появился banner

    fireEvent.click(screen.getByText('trigger-promo'));

    expect(screen.getByText('promo')).toBeInTheDocument();
    expect(screen.queryByText('banner')).not.toBeInTheDocument();
    expect(screen.getByTestId('video-state')).toHaveTextContent('stopped');
  });

  it('closes promo and resumes video', () => {
    render(<App />);

    vi.advanceTimersByTime(5000);
    fireEvent.click(screen.getByText('trigger-promo'));
    fireEvent.click(screen.getByText('close-promo'));

    expect(screen.queryByText('promo')).not.toBeInTheDocument();
    expect(screen.getByTestId('video-state')).toHaveTextContent('playing');
  });
});
