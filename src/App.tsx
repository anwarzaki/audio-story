import { useState } from 'react';
import HomePage from './components/HomePage';
import NowPlayingPage from './components/NowPlayingPage';
import QuizCreationPage from './components/QuizCreationPage';
import BottomNavigation from './components/BottomNavigation';
import { getUserProfile, getAudioStories, getQuizTopics, getDifficultyLevels } from './mockData';
import type { NavigationTab, AudioPlayerState } from './types';

type Screen = 'home' | 'now-playing' | 'quiz';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const userProfile = getUserProfile();
  const stories = getAudioStories();
  const topics = getQuizTopics();
  const difficultyLevels = getDifficultyLevels();

  const [audioState, setAudioState] = useState<AudioPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 138,
    volume: 80,
    isRepeat: false
  });

  const handleStoryClick = (storyId: string) => {
    setSelectedStoryId(storyId);
    setCurrentScreen('now-playing');
  };

  const handleTabChange = (tab: NavigationTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentScreen('home');
    } else if (tab === 'learn') {
      setCurrentScreen('quiz');
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setActiveTab('home');
  };

  const handlePlayPause = () => {
    setAudioState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const handleFavoriteToggle = () => {
    // Toggle favorite in stories array
    console.log('Toggle favorite');
  };

  const selectedStory = stories.find(s => s.id === selectedStoryId) || stories[2];

  return (
    <div className="responsive-container relative">
      {currentScreen === 'home' && (
        <HomePage
          userProfile={userProfile}
          stories={stories}
          onStoryClick={handleStoryClick}
        />
      )}

      {currentScreen === 'now-playing' && (
        <NowPlayingPage
          story={selectedStory}
          audioState={audioState}
          onPlayPause={handlePlayPause}
          onSeek={() => { }}
          onVolumeChange={() => { }}
          onRepeatToggle={() => setAudioState(prev => ({ ...prev, isRepeat: !prev.isRepeat }))}
          onFavoriteToggle={handleFavoriteToggle}
          onBack={handleBackToHome}
        />
      )}

      {currentScreen === 'quiz' && (
        <QuizCreationPage
          topics={topics}
          difficultyLevels={difficultyLevels}
          onBack={handleBackToHome}
        />
      )}

      {currentScreen !== 'now-playing' && (
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      )}
    </div>
  );
}

export default App;