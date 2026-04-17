import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Video from '..';

describe('Video', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: vi.fn(),
      configurable: true,
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'play', {
      configurable: true,
      writable: true,
      value: vi.fn().mockResolvedValue(undefined),
    });

    Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  it('начинается проигрывание, когда разрешено', () => {
    const playSpy = vi.spyOn(HTMLMediaElement.prototype, 'play');

    render(<Video canPlayVideo={true} bannerControl={vi.fn()} />);

    const video = screen.getByTestId('video');

    expect(video).toBeInTheDocument();
    expect(playSpy).toHaveBeenCalled();
  });

  it('видео останавливается, когда canPlayVideo становится false', () => {
    const pauseSpy = vi.spyOn(HTMLMediaElement.prototype, 'pause');

    const { rerender } = render(
      <Video canPlayVideo={true} bannerControl={vi.fn()} />,
    );

    rerender(<Video canPlayVideo={false} bannerControl={vi.fn()} />);

    expect(pauseSpy).toHaveBeenCalled();
  });

  it('возобнавляется прогирывание, когда canPlayVideo становится true снова', () => {
    const playSpy = vi.spyOn(HTMLMediaElement.prototype, 'play');

    const { rerender } = render(
      <Video canPlayVideo={false} bannerControl={vi.fn()} />,
    );

    rerender(<Video canPlayVideo={true} bannerControl={vi.fn()} />);

    expect(playSpy).toHaveBeenCalled();
  });

  it('вызывается bannerControl через 5 секунд', () => {
    vi.useFakeTimers();

    const bannerControl = vi.fn();

    render(<Video canPlayVideo={true} bannerControl={bannerControl} />);

    vi.advanceTimersByTime(5000);

    expect(bannerControl).toHaveBeenCalled();

    vi.useRealTimers();
  });
});
