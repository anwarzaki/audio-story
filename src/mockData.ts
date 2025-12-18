import type { UserProfile, Story, QuizTopic, DifficultyInfo, PracticeCard } from './types';

// Get user profile
export const getUserProfile = (): UserProfile => ({
  name: "zaki",
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
  },
  {
    id: "4",
    title: "The Magical Tree",
    coverImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=300&h=300",
    description: "A mysterious tree in the backyard",
    duration: 120
  },
  {
    id: "5",
    title: "Lost in the Clouds",
    coverImage: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&q=80&w=300&h=300",
    description: "An adventure in the sky",
    duration: 150
  },
  {
    id: "6",
    title: "Secret Garden",
    coverImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Discovering nature's beauty",
    duration: 180
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

// // Get practice cards

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
    title: "Summer Vacation",
    description: "Share your best holiday memories",
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D",
    type: "human"
  },
  {
    id: "3",
    title: "Traveling",
    description: "Explore new places and cultures",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000",
    type: "human"
  },
  {
    id: "4",
    title: "Talk with Doraemon",
    description: "",
    image: "https://www.partysuppliesindia.com/cdn/shop/products/A2_33_c020ee18-0c82-4dc1-b16d-c90a64707b20.jpg?v=1735571897&width=1500",
    type: "ai"
  },
  {
    id: "5",
    title: "Talk with Spider Man",
    description: "",
    image: "https://i.etsystatic.com/42415510/r/il/d1e861/5761455247/il_1080xN.5761455247_13un.jpg",
    type: "ai"
  },
  {
    id: "6",
    title: "Talk with Batman",
    description: "",
    image: "https://www.jammable.com/cdn-cgi/image/width=3840,quality=25,format=webp/https://imagecdn.voicify.ai/models/55c75bda-317a-42b8-95c2-b39514a8808b.png",
    type: "ai"
  },
  {
    id: "7",
    title: "Talk with Captain America",
    description: "",
    image: "https://fatcatcollectibles.in/cdn/shop/files/HotToys-CapAmerica-1.webp?v=1693739197&width=2048",
    type: "ai"
  },
  {
    id: "8",
    title: "Talk with Deadpool",
    description: "",
    image: "https://www.esquireme.com/wp-content/uploads/sites/9/cloud/2021/09/09/deadpool-1563973577.jpg",
    type: "ai"
  }
];