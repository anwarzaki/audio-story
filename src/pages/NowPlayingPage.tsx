import { FileText, Heart, Volume2, SkipBack, Play, Pause, SkipForward, Repeat, ChevronDown, ClipboardCheck, RotateCcw, Gauge } from 'lucide-react';
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
    <div className="min-h-screen pb-20 bg-[#F0FDF4]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-6" >
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-black/5 transition-colors">
          <ChevronDown size={28} className="text-gray-600" />
        </button>
        <h1 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
          Now Playing
        </h1>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <FileText size={24} className="text-gray-500" />
          </button>
          <button className="relative w-10 h-10 bg-[#10B981] rounded-xl flex items-center justify-center shadow-md">
            <ClipboardCheck size={20} className="text-white" />
            <span className="absolute -top-2 -right-2 bg-[#F59E0B] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#F0FDF4]">
              7
            </span> 
          </button>
        </div>
      </div>

      <div className="px-6 max-w-md mx-auto">
        {/* Story artwork */}
        <div className="bg-white p-3 rounded-[2.5rem] shadow-xl mb-8 mx-auto w-full aspect-square border-green-400 border-2">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </div>

        {/* Story info */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-2xl font-bold text-[#1F2937] leading-tight flex-1 pr-4">
              {story.title}
            </h2>
            <button onClick={onFavoriteToggle} className="pt-1">
              <Heart
                size={24}
                className={`transition-colors ${story.isFavorite ? 'fill-[#10B981] text-[#10B981]' : 'text-gray-400'}`}
              />
            </button>
          </div>
          <p className="text-gray-500 text-base">
            {story.description}
          </p>
        </div>

        {/* Quiz button */}
        <button
          className="w-full bg-[#10B981] active:bg-[#059669] transition-colors rounded-2xl py-4 px-5 mb-10 flex items-center justify-between shadow-lg shadow-green-200"
        >
          <div className="flex items-center gap-3">
            <ClipboardCheck size={24} className="text-white" />
            <span className="text-white font-semibold text-lg">Test Your Understanding</span>
          </div>
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            7 Questions
          </span>
        </button>

        {/* Progress bar */}
        <div className="mb-1">
          <div className="relative w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                backgroundColor: '#10B981'
              }}
            />
          </div>
        </div>

        {/* Time labels */}
        <div className="flex items-center justify-between mb-8 text-xs font-medium text-gray-500">
          <span className="text-[#10B981]">{formatTime(audioState.currentTime)}</span>
          <span>{formatTime(audioState.duration)}</span>
        </div>

        {/* Playback controls */}
        <div className="flex items-center justify-between px-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Volume2 size={22} />
          </button>
          
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <RotateCcw size={24} />
          </button>
          
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            <SkipBack size={32} strokeWidth={2.5} />
          </button>
          
          <button
            onClick={onPlayPause}
            className="w-16 h-16 bg-[#10B981] hover:bg-[#059669] active:scale-95 transition-all rounded-full flex items-center justify-center shadow-lg shadow-green-200"
          >
            {audioState.isPlaying ? (
              <Pause size={32} className="text-white fill-white" />
            ) : (
              <Play size={32} className="text-white fill-white ml-1" />
            )}
          </button>
          
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            <SkipForward size={32} strokeWidth={2.5} />
          </button>
          
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
             <Repeat
               size={24}
               className={audioState.isRepeat ? 'text-[#10B981]' : 'text-gray-500'}
             />
          </button>
          
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Gauge size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}