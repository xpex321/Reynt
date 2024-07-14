'use client';
import { useEffect, useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import TaskCard from '../components/TaskCard';
import { Pledge } from '@/components/Pledge';
import { Footer } from '@/components/Footer';

interface Task {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  requestedAt: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async (searchTerm = '') => {
    setLoading(true);
    try {
      const response = await fetch(`/api/tasks?search=${encodeURIComponent(searchTerm)}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Network response was not ok');
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />
      <Hero onSearch={fetchTasks} services={tasks} />
      <section className="w-full py-12 bg-gray-100 pt-20">
        <div className="container mx-auto px-4">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-5xl mt-20">Popular Services</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {loading ? (
              <div>Loading...</div>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  imageUrl={task.imageUrl}
                />
              ))
            )}
          </div>
          <div className="mt-8 text-left">
            <button className="px-6 py-2 text-white bg-black rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 mb-20">
              View more services
            </button>
          </div>
        </div>
      </section>
      <Pledge />
      <Footer />
    </>
  );
}
