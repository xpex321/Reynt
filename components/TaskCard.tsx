// components/TaskCard.tsx

import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="absolute inset-0 z-10">
        <span className="sr-only">{title}</span>
      </div>
      <img src={imageUrl} alt={title} className="object-cover w-full h-48" />
      <div className="p-4 bg-background">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
