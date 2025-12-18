import { memo } from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import { useAutoScroll } from '../hooks/useAutoScroll';
import type { PracticeCard } from '../types';

interface PracticeWithHumansSectionProps {
  cards: PracticeCard[];
}

const PracticeWithHumansSection = memo(function PracticeWithHumansSection({ cards }: PracticeWithHumansSectionProps) {
  const practiceScrollRef = useAutoScroll(0.8);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
            <Phone size={20} style={{ color: 'var(--color-secondary-purple)' }} />
          </div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--color-text-dark)' }}>Practice with Humans</h2>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
          Show all
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Horizontal scroll (carousel) */}
      <div
        ref={practiceScrollRef}
        className="flex gap-4 overflow-x-auto pb-4 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 px-4 sm:px-6 md:px-8 lg:px-10 scrollbar-hide"
      >
        {cards.map((card) => (
          <button
            key={card.id}
            className="flex-shrink-0 w-72 md:w-80 lg:w-96"
          >
            <div className="card overflow-hidden p-6 relative h-50">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full items-center text-center">
                <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
                <button className="bg-white text-green-500 py-2 rounded-full mt-3 w-full font-semibold">
                  Join & Start Call
                </button> 
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
});

export default PracticeWithHumansSection;
