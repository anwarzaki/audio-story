import type { UserProfile, Story, QuizTopic, DifficultyInfo, PracticeCard } from './types';

// Get user profile
export const getUserProfile = (): UserProfile => ({
  name: "Lorenzo",
  greeting: "Good Night",
  avatar: "https://i.pravatar.cc/100?u=lorenzo",
  coins: 30,
  isPro: true,
  currentXP: 42,
  nextLevelXP: 300,
  currentLevel: 3,
  nextLevel: 4,
  additionalXP: 242
});

// Get audio stories
export const getAudioStories = (): Story[] => [
  {
    id: "1",
    title: "Choosing the Right Path",
    coverImage: "https://images.unsplash.com/photo-1583737741781-59293ce3e919?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxib3klMjBzdGFuZGluZyUyMGF0JTIwY3Jvc3Nyb2FkcyUyMGluJTIwZm9yZXN0JTIwd2l0aCUyMGdvbGRlbiUyMGxpZ2h0JTIwcGF0aHxlbnwwfDB8fHwxNzY1OTE0ODA5fDA&ixlib=rb-4.1.0&q=85",
    description: "A story about making choices",
    duration: 138
  },
  {
    id: "2",
    title: "The Fountain and the Mayor",
    coverImage: "https://images.unsplash.com/photo-1680902084507-dba972cc412e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxmb3VudGFpbiUyMGluJTIwdG93biUyMHNxdWFyZSUyMHdpdGglMjBwZW9wbGV8ZW58MHwwfHx8MTc2NTkxNDgwOXww&ixlib=rb-4.1.0&q=85",
    description: "A heartwarming story about friendship and courage",
    duration: 138
  },
  {
    id: "3",
    title: "The Melody of Friendship",
    coverImage: "https://images.pexels.com/photos/30249601/pexels-photo-30249601.jpeg",
    description: "A heartwarming story about friendship and courage",
    duration: 138,
    isFavorite: false
  }
];

// Get quiz topics
export const getQuizTopics = (): QuizTopic[] => [
  { id: "1", label: "My Best Friend" },
  { id: "2", label: "Cricket Basics" },
  { id: "3", label: "Solar System" },
  { id: "4", label: "Healthy Habits" },
  { id: "5", label: "Animals & Birds" },
  { id: "6", label: "School Picnic" }
];

// Get difficulty levels
export const getDifficultyLevels = (): DifficultyInfo[] => [
  {
    level: "easy",
    label: "Easy",
    description: "Short sentences & gentle vocabulary.",
    color: "green"
  },
  {
    level: "medium",
    label: "Medium",
    description: "Everyday situations with detail.",
    color: "orange"
  },
  {
    level: "hard",
    label: "Hard",
    description: "Longer thinking and tricky choices.",
    color: "purple"
  }
];

// Get practice cards
export const getPracticeCards = (): PracticeCard[] => [
  {
    id: "1",
    title: "Favorite Animals",
    description: "Talk about your favorite animals and pets",
    image: "https://images.unsplash.com/photo-1762849523131-fe3e04d0a149?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnJvdHMlMjBhbmQlMjB0cm9waWNhbCUyMGJpcmRzfGVufDB8MHx8fDE3NjU5MTQ4MDl8MA&ixlib=rb-4.1.0&q=85",
    type: "human"
  },
  {
    id: "2",
    title: "Talk with Doraemon",
    description: "",
    image: "https://picsum.photos/300/300?random=1",
    type: "ai"
  },
  {
    id: "3",
    title: "Talk with Spider Man",
    description: "",
    image: "https://picsum.photos/300/300?random=2",
    type: "ai"
  }
];