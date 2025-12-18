import { useState } from 'react';
import { ArrowLeft, Bot, FileText, Clock, Lightbulb, Star, Target, Check } from 'lucide-react';
import type { QuizTopic, DifficultyInfo, DifficultyLevel } from '../types';

interface QuizCreationPageProps {
  topics: QuizTopic[];
  difficultyLevels: DifficultyInfo[];
  onBack: () => void;
}

export default function QuizCreationPage({ topics, difficultyLevels, onBack }: QuizCreationPageProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('medium');
  const [topicInput, setTopicInput] = useState('');

  const getDifficultyIcon = (level: DifficultyLevel) => {
    switch (level) {
      case 'easy': return Lightbulb;
      case 'medium': return Star;
      case 'hard': return Target;
    }
  };

  const getDifficultyColor = (level: DifficultyLevel) => {
    switch (level) {
      case 'easy': return 'var(--color-primary)';
      case 'medium': return 'var(--color-secondary-orange)';
      case 'hard': return 'var(--color-secondary-purple)';
    }
  };

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--color-background-white)' }}>
      {/* Top bar */}
      <div className="flex items-center px-4 sm:px-6 md:px-8 py-4" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft size={24} style={{ color: 'var(--color-text-dark)' }} />
        </button>
      </div>

      <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 md:pt-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold mb-2 tracking-wide" style={{ color: 'var(--color-primary)' }}>LEARN TAB</p>
          <h1 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-dark)' }}>Craft a custom quiz</h1>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-gray)' }}>
            Pick a topic, choose difficulty, and we will build four fun questions instantly.
          </p>

          {/* Badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
              <Bot size={14} style={{ color: 'var(--color-text-gray)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-gray)' }}>AI Powered</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
              <FileText size={14} style={{ color: 'var(--color-text-gray)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-gray)' }}>4 Questions</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
              <Clock size={14} style={{ color: 'var(--color-text-gray)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-gray)' }}>Instant play</span>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="mb-8">
          <p className="text-xs font-semibold mb-2 tracking-wide" style={{ color: 'var(--color-primary)' }}>STEP 1</p>
          <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-dark)' }}>Choose a topic</h2>

          <input
            type="text"
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            placeholder='e.g. "My school day" or "Planets in space"/60'
            className="w-full px-4 py-3 rounded-xl text-sm mb-4"
            style={{ border: '1px solid var(--color-border-light)' }}
          />

          {/* Topic chips */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setTopicInput(topic.label)}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-left transition-colors"
                style={{ color: 'var(--color-text-dark)' }}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <p className="text-xs font-semibold mb-2 tracking-wide" style={{ color: 'var(--color-primary)' }}>STEP 2</p>
          <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-dark)' }}>Pick a challenge level</h2>

          <div className="space-y-3">
            {difficultyLevels.map((difficulty) => {
              const Icon = getDifficultyIcon(difficulty.level);
              const isSelected = selectedDifficulty === difficulty.level;
              const color = getDifficultyColor(difficulty.level);

              return (
                <button
                  key={difficulty.level}
                  onClick={() => setSelectedDifficulty(difficulty.level)}
                  className="w-full p-4 rounded-xl border-2 transition-all text-left"
                  style={{
                    borderColor: isSelected ? color : 'var(--color-border-light)',
                    backgroundColor: isSelected ? `${color}10` : 'white'
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold" style={{ color }}>
                        {difficulty.label}
                      </span>
                      {isSelected && (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ backgroundColor: color, color: 'white' }}
                        >
                          Selected
                        </span>
                      )}
                    </div>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                    {difficulty.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Benefits card */}
        <div
          className="rounded-xl p-6 mb-6"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <h3 className="text-white font-bold mb-3">WHAT YOU'LL GET</h3>
          <p className="text-white font-semibold text-lg mb-4">
            Friendly quiz with instant feedback
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <Check size={16} style={{ color: 'white', marginTop: 2 }} />
              <p className="text-white text-sm">bite-sized explanations for every answer.</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={16} style={{ color: 'white', marginTop: 2 }} />
              <p className="text-white text-sm">tone automatically matches the learner profile.</p>
            </div>
          </div>
        </div>

        {/* Generate button */}
        <button
          className="w-full rounded-xl py-4 font-semibold text-white"
          style={{ backgroundColor: 'var(--color-border-light)' }}
          disabled={!topicInput || !selectedDifficulty}
        >
          Generate Quiz
        </button>
      </div>
    </div>
  );
}