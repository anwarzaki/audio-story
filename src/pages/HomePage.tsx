import { useMemo } from 'react';
import type { UserProfile, Story } from '../types';
import { getPracticeCards } from '../mockData';
import HomeHeader from '../components/HomeHeader';
import ActionGrid from '../components/ActionGrid';
import AudioStoriesSection from '../components/AudioStoriesSection';
import PracticeWithHumansSection from '../components/PracticeWithHumansSection';
import PracticeWithAISection from '../components/PracticeWithAISection';

interface HomePageProps {
  userProfile: UserProfile;
  stories: Story[];
  onStoryClick: (storyId: string) => void;
}

export default function HomePage({ userProfile, stories, onStoryClick }: HomePageProps) {
  const practiceCards = getPracticeCards();
  const humanPractice = useMemo(() => practiceCards.filter(card => card.type === 'human'), [practiceCards]);
  const aiPractice = useMemo(() => practiceCards.filter(card => card.type === 'ai'), [practiceCards]);

  return (
    <div className="pb-20 min-h-screen">
      {/* Header with Green Theme */}
      <HomeHeader userProfile={userProfile} />

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-4 sm:mt-5 md:mt-6">
        {/* Action Buttons */}
        <ActionGrid />

        {/* Audio Stories Section */}
        <AudioStoriesSection stories={stories} onStoryClick={onStoryClick} />

        {/* Practice with Humans Section */}
        <PracticeWithHumansSection cards={humanPractice} />

        {/* Practice with AI Section */}
        <PracticeWithAISection cards={aiPractice} />
      </div>
    </div>
  );
}