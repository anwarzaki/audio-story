import { memo } from 'react';
import { Video, Phone, BookOpen, Bot } from 'lucide-react';

const ActionGrid = memo(function ActionGrid() {
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

  return (
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
  );
});

export default ActionGrid;
