import { Video, Phone, BookOpen, Bot, ChevronRight, Moon, Gem, Sparkles, MoreHorizontal } from 'lucide-react';
import { useAutoScroll } from '../hooks/useAutoScroll';
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
    {
      id: 'video',
      label: 'Video Learning',
      icon: Video,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      border: '3px solid border-blue-100'
    },
    {
      id: 'peer-calls',
      label: 'Peer Calls',
      icon: Phone,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      id: 'stories',
      label: 'Stories',
      icon: BookOpen,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      border: 'border-orange-100'
    },
    {
      id: 'ai-calls',
      label: 'AI Calls',
      icon: Bot,
      color: 'text-pink-500',
      bg: 'bg-pink-50',
      border: 'border-pink-100'
    },
  ];

  const practiceCards = getPracticeCards();
  const humanPractice = practiceCards.filter(card => card.type === 'human');
  const aiPractice = practiceCards.filter(card => card.type === 'ai');

  const storiesScrollRef = useAutoScroll(0.8);
  const practiceScrollRef = useAutoScroll(0.8);

  const xpProgress = (userProfile.currentXP / userProfile.nextLevelXP) * 100;

  return (
    <div className="pb-20 min-h-screen">
      {/* Header with Green Theme */}
      <div className="px-6 pt-12 pb-8 rounded-b-[40px] bg-[#10B981] text-white">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-14 h-14 rounded-full border-[3px] border-white/30"
              />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#10B981] rounded-full"></div>
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium mb-0.5">Good Night</p>
              <h1 className="text-white text-2xl font-bold tracking-wide">Lorenzo</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <Moon size={20} className="text-white" />
            </button>
            <div className="flex items-center gap-1.5 bg-black/20 rounded-full pl-3 pr-4 py-1.5">
              <Gem size={16} className="text-orange-300" fill="currentColor" />
              <span className="text-white font-bold text-sm">30</span>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#FF8B7B] text-white text-xs font-bold tracking-wide shadow-sm">
              PRO
            </span>
          </div>
        </div>

        {/* XP Progress Card - Translucent Green */}
        <div className="relative overflow-hidden rounded-3xl bg-white/10 border border-white/10 p-5 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-4 w-full">
              {/* Level Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 shrink-0">
                <span className="text-white font-bold text-lg">L{userProfile.currentLevel || 3}</span>
              </div>

              {/* Progress Info */}
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-2">
                  <p className="text-xs font-bold text-white tracking-wider">XP PROGRESS</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2.5 bg-black/20 rounded-full overflow-hidden mb-1.5">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-white transition-all duration-300"
                    style={{ width: `${xpProgress}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs font-medium text-white/80">
                  <span>{formatXP(userProfile.currentXP)}/{formatXP(userProfile.nextLevelXP)} XP</span>
                  <span>Next: L{formatLevel(userProfile.nextLevel)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Sparkles size={20} className="text-white/90" />
            </div>

            <p className="text-white font-bold text-xl tracking-wide">
              {formatXP(userProfile.additionalXP)} XP
            </p>

            <button className="text-white/60 hover:text-white transition-colors">
              <MoreHorizontal size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-4 sm:mt-5 md:mt-6">
        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {actionButtons.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                className="flex flex-col items-center gap-3 group"
              >
                {/* Outer pastel circle */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full  flex items-center justify-center transition-transform group-active:scale-95 ${action.bg}`}>
                  {/* Inner white circle */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Icon className={action.color} size={20} strokeWidth={2.5} />
                  </div>
                </div>
                {/* Label */}
                <span className="text-xs sm:text-sm font-medium text-center text-gray-600 leading-tight block max-w-[80px]">
                  {action.label.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        {/* Audio Stories Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="flex gap-2 text-lg font-bold" style={{ color: 'var(--color-text-dark)' }}><Sparkles size={20} className="text-green-500" /> <span>Audio Stories</span> </h2>
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

        {/* Practice with Humans Section */}
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
            {humanPractice.map((card) => (
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

          {/* Horizontal scroll (carousel) for AI items */}
          <div
            className="flex gap-4 overflow-x-auto pb-4 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 px-4 sm:px-6 md:px-8 lg:px-10 scrollbar-hide"
          >
            {aiPractice.map((card) => (
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
      </div>
    </div>
  );
}