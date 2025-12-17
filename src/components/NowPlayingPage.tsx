import { ArrowLeft, FileText, Pencil, Heart, Volume2, Rewind, SkipBack, Play, Pause, SkipForward, Forward, Repeat } from 'lucide-react';
import type { Story, AudioPlayerState } from '../types';
import { formatTime } from '../utils';

interface NowPlayingPageProps {
  story: Story;
  audioState: AudioPlayerState;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onRepeatToggle: () => void;
  onFavoriteToggle: () => void;
  onBack: () => void;
}

export default function NowPlayingPage({
  story,
  audioState,
  onPlayPause,
  onFavoriteToggle,
  onBack
}: NowPlayingPageProps) {
  const progress = (audioState.currentTime / audioState.duration) * 100;

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--color-background-white)' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft size={24} style={{ color: 'var(--color-text-dark)' }} />
        </button>
        <h1 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-gray)' }}>
          Now Playing
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2">
            <FileText size={20} style={{ color: 'var(--color-text-gray)' }} />
          </button>
          <button className="p-2 relative">
            <Pencil size={20} style={{ color: 'var(--color-text-gray)' }} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: 'var(--color-primary)' }} />
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-7 md:pt-8 max-w-2xl mx-auto">
        {/* Story artwork */}
        <div
          className="rounded-3xl overflow-hidden mb-6 border-4 max-w-md mx-auto"
          style={{ borderColor: 'var(--color-primary-light)' }}
        >
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full aspect-square object-cover"
          />
        </div>

        {/* Story info */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-2xl font-bold flex-1" style={{ color: 'var(--color-text-dark)' }}>
              {story.title}
            </h2>
            <button onClick={onFavoriteToggle} className="p-2 -mr-2">
              <Heart
                size={24}
                style={{
                  color: story.isFavorite ? 'var(--color-primary)' : 'var(--color-text-gray)',
                  fill: story.isFavorite ? 'var(--color-primary)' : 'none'
                }}
              />
            </button>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-gray)' }}>
            {story.description}
          </p>
        </div>

        {/* Quiz button */}
        <button
          className="w-full rounded-xl py-4 px-6 mb-8 flex items-center justify-between"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <div className="flex items-center gap-3">
            <FileText size={20} style={{ color: 'white' }} />
            <span className="text-white font-semibold">Test Your Understanding</span>
          </div>
          <span className="text-white text-sm font-medium">7 Questions</span>
        </button>

        {/* Progress bar */}
        <div className="mb-2">
          <div className="relative w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all"
              style={{
                width: `${progress}%`,
                backgroundColor: 'var(--color-primary)'
              }}
            />
          </div>
        </div>

        {/* Time labels */}
        <div className="flex items-center justify-between mb-8 text-xs" style={{ color: 'var(--color-text-gray)' }}>
          <span>{formatTime(audioState.currentTime)}</span>
          <span>{formatTime(audioState.duration)}</span>
        </div>

        {/* Playback controls */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button className="p-2">
            <Volume2 size={24} style={{ color: 'var(--color-text-gray)' }} />
          </button>
          <button className="p-2">
            <Rewind size={24} style={{ color: 'var(--color-text-gray)' }} />
          </button>
          <button className="p-2">
            <SkipBack size={28} style={{ color: 'var(--color-text-gray)' }} />
          </button>
          <button
            onClick={onPlayPause}
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {audioState.isPlaying ? (
              <Pause size={28} style={{ color: 'white' }} fill="white" />
            ) : (
              <Play size={28} style={{ color: 'white' }} fill="white" />
            )}
          </button>
          <button className="p-2">
            <SkipForward size={28} style={{ color: 'var(--color-text-gray)' }} />
          </button>
          <button className="p-2">
            <Forward size={24} style={{ color: 'var(--color-text-gray)' }} />
          </button>
          <button className="p-2">
            <Repeat
              size={24}
              style={{
                color: audioState.isRepeat ? 'var(--color-primary)' : 'var(--color-text-gray)'
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}