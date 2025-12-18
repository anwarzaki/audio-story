import { memo } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { useAutoScroll } from '../hooks/useAutoScroll';
import type { Story } from '../types';

interface AudioStoriesSectionProps {
  stories: Story[];
  onStoryClick: (storyId: string) => void;
}

const AudioStoriesSection = memo(function AudioStoriesSection({ stories, onStoryClick }: AudioStoriesSectionProps) {
  const storiesScrollRef = useAutoScroll(0.8);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex gap-2 text-lg font-bold" style={{ color: 'var(--color-text-dark)' }}>
            <Sparkles size={20} className="text-green-500" /> 
            <span>Audio Stories</span> 
        </h2>
        <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-text-dark)' }}>
          Show all
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Horizontal scroll (carousel) */}
      <div
        ref={storiesScrollRef}
        className="flex gap-4 overflow-x-auto pb-4 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 px-4 sm:px-6 md:px-8 lg:px-10 scrollbar-hide"
      >
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(story.id)}
            className="flex-shrink-0 w-36 md:w-48 lg:w-56"
          >
            <div className="card overflow-hidden mb-3">
              <img
                src={story.coverImage}
                alt={story.title}
                className="w-full h-44 md:h-56 lg:h-64 object-cover"
              />
            </div>
            <h3 className="text-sm font-semibold text-left leading-tight" style={{ color: 'var(--color-text-dark)' }}>
              {story.title}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
});

export default AudioStoriesSection;
