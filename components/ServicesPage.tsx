'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Task {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  requestedAt: string;
}

export default function ServicesPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      console.log('Fetched tasks:', data); // Debugging statement
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 2) {
      setTasks((prevTasks) => prevTasks.filter((task) =>
        task.title.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      fetchTasks(); // Re-fetch tasks if the search term is cleared or too short
    }
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 space-y-6 text-left text-black -mb-20 mt-20">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl mt-10">What can we help you with?</h1>
            <p className="max-w-[700px] text-lg md:text-xl">
              Our servicemen are eager to assist you with your challenges.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Input type="search" placeholder="Search services..." className="max-w-lg" onChange={handleSearchChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.length === 0 ? (
              <div>No services found</div>
            ) : (
              tasks.map((task) => (
                <Card key={task.id}>
                  <img
                    src={task.imageUrl}
                    width={400}
                    height={300}
                    alt="Service Image"
                    className="rounded-t-lg object-cover w-full aspect-[4/3]"
                  />
                  <CardContent className="p-4 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {task.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
