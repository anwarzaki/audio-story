// Enums
export type DifficultyLevel = "easy" | "medium" | "hard";
export type NavigationTab = "home" | "learn" | "call" | "profile";
export type ActionType = "video" | "peer-calls" | "stories" | "ai-calls";

// User profile data
export interface UserProfile {
  name: string;
  greeting: string;
  avatar: string;
  coins: number;
  isPro: boolean;
  currentXP: number;
  nextLevelXP: number;
  currentLevel: number;
  nextLevel: number;
  additionalXP: number;
}

// Story data
export interface Story {
  id: string;
  title: string;
  coverImage: string;
  description?: string;
  duration?: number;
  isFavorite?: boolean;
}

// Quiz topic
export interface QuizTopic {
  id: string;
  label: string;
}

// Difficulty level info
export interface DifficultyInfo {
  level: DifficultyLevel;
  label: string;
  description: string;
  color: string;
}

// Practice card
export interface PracticeCard {
  id: string;
  title: string;
  description: string;
  image: string;
  type: "human" | "ai";
}

// Audio player state
export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isRepeat: boolean;
}