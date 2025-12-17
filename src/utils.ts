// Time formatting for audio player
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// XP formatting
export const formatXP = (xp: number): string => {
  return `${xp} XP`;
};

// Level formatting
export const formatLevel = (level: number): string => {
  return `L${level}`;
};