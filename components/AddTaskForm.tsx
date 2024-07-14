'use client'
import { useState } from 'react';

export function AddTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, imageUrl, categoryId, location }),
    });

    if (response.ok) {
      // Clear the form
      setTitle('');
      setDescription('');
      setImageUrl('');
      setCategoryId('');
      setLocation('');
    } else {
      console.error('Failed to add task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="categoryId">Category ID</label>
        <input
          id="categoryId"
          type="text"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}
