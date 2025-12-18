import { memo } from 'react';
import { Bot, ChevronRight } from 'lucide-react';
import type { PracticeCard } from '../types';

interface PracticeWithAISectionProps {
  cards: PracticeCard[];
}

const PracticeWithAISection = memo(function PracticeWithAISection({ cards }: PracticeWithAISectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bot size={20} style={{ color: 'var(--color-secondary-purple)' }} />
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-text-dark)' }}>Practice with AI</h2>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
          Show all
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Horizontal scroll (carousel) for AI items */}
      <div
        className="flex gap-4 overflow-x-auto pb-4 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 px-4 sm:px-6 md:px-8 lg:px-10 scrollbar-hide"
      >
        {cards.map((card) => (
          <button
            key={card.id}
            className="flex-shrink-0 w-40 md:w-48 lg:w-56"
          >
            <div className="card overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full rounded-2xl object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-center" style={{ color: 'var(--color-text-dark)' }}>{card.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
});

export default PracticeWithAISection;
