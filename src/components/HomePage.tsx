import { Video, Phone, BookOpen, Bot, Settings, Coins, ChevronRight } from 'lucide-react';
import type { UserProfile, Story } from '../types';
import { formatXP, formatLevel } from '../utils';
import { getPracticeCards } from '../mockData';

interface HomePageProps {
  userProfile: UserProfile;
  stories: Story[];
  onStoryClick: (storyId: string) => void;
}

export default function HomePage({ userProfile, stories, onStoryClick }: HomePageProps) {
  const actionButtons = [
    { id: 'video', label: 'Video Learning', icon: Video },
    { id: 'peer-calls', label: 'Peer Calls', icon: Phone },
    { id: 'stories', label: 'Stories', icon: BookOpen },
    { id: 'ai-calls', label: 'AI Calls', icon: Bot },
  ];

  const practiceCards = getPracticeCards();
  const humanPractice = practiceCards.filter(card => card.type === 'human');
  const aiPractice = practiceCards.filter(card => card.type === 'ai');

  const xpProgress = (userProfile.currentXP / userProfile.nextLevelXP) * 100;

  return (
    <div className="pb-20 min-h-screen">
      {/* Header with gradient */}
      <div
        className="px-4 sm:px-6 md:px-8 lg:px-10 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-7 md:pb-8 rounded-b-3xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <p className="text-white/80 text-sm">{userProfile.greeting}</p>
              <h1 className="text-white text-xl font-bold">{userProfile.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1.5">
              <Coins size={16} style={{ color: '#FCD34D' }} />
              <span className="text-white font-semibold text-sm">{userProfile.coins}</span>
            </div>
            {userProfile.isPro && (
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: '#F59E0B', color: 'white' }}
              >
                PRO
              </span>
            )}
          </div>
        </div>
        {/* XP Progress Card */}
        <div className="card p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>XP PROGRESS</p>
              <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                {formatXP(userProfile.currentXP)}/{formatXP(userProfile.nextLevelXP)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs" style={{ color: 'var(--color-text-gray)' }}>Next {formatLevel(userProfile.nextLevel)}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings size={20} style={{ color: 'var(--color-text-gray)' }} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
              style={{
                width: `${xpProgress}%`,
                backgroundColor: 'var(--color-primary)'
              }}
            />
          </div>

          <p className="text-sm font-medium" style={{ color: 'var(--color-text-dark)' }}>
            {formatXP(userProfile.additionalXP)}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-4 sm:mt-5 md:mt-6">
        {/* Action Buttons */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 mb-6 md:mb-8">
          {actionButtons.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow">
                  <Icon size={28} style={{ color: 'var(--color-primary)' }} />
                </div>
                <span className="text-xs text-center font-medium leading-tight" style={{ color: 'var(--color-text-dark)' }}>
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Audio Stories Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold" style={{ color: 'var(--color-text-dark)' }}>Audio Stories</h2>
            <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
              Show all
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Responsive grid/scroll */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-2 -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0 scrollbar-hide">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => onStoryClick(story.id)}
                className="flex-shrink-0 w-36 md:w-auto"
              >
                <div className="card overflow-hidden mb-3">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-left leading-tight" style={{ color: 'var(--color-text-dark)' }}>
                  {story.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Practice with Humans Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Phone size={20} style={{ color: 'var(--color-secondary-purple)' }} />
              <h2 className="text-lg font-bold" style={{ color: 'var(--color-text-dark)' }}>Practice with Humans</h2>
            </div>
            <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
              Show all
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
            {humanPractice.map((card) => (
              <button
                key={card.id}
                className="flex-shrink-0 w-72 md:w-80 lg:w-96"
              >
                <div className="card overflow-hidden p-6 relative" style={{ minHeight: '160px' }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative z-10 flex flex-col justify-end h-full">
                    <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-white/90 text-sm">{card.description}</p>
                  </div>
                </div>
              </button>
            ))}
            <button className="flex-shrink-0 w-72 md:w-80 lg:w-96">
              <div className="card p-6 flex items-center justify-center" style={{ minHeight: '160px', backgroundColor: 'var(--color-primary)' }}>
                <span className="text-white font-semibold">Join & Start Call</span>
              </div>
            </button>
          </div>
        </div>

        {/* Practice with AI Section */}
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

          {/* Grid layout for AI cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {aiPractice.map((card) => (
              <button
                key={card.id}
                className="card overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-center" style={{ color: 'var(--color-text-dark)' }}>{card.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}