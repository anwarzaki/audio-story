import { memo } from 'react';
import { Moon, Gem, Sparkles, MoreHorizontal } from 'lucide-react';
import type { UserProfile } from '../types';
import { formatXP, formatLevel } from '../utils';

interface HomeHeaderProps {
  userProfile: UserProfile;
}

const HomeHeader = memo(function HomeHeader({ userProfile }: HomeHeaderProps) {
  const xpProgress = (userProfile.currentXP / userProfile.nextLevelXP) * 100;

  return (
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
            <h1 className="text-white text-2xl font-bold tracking-wide">zaki</h1>
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
  );
});

export default HomeHeader;
