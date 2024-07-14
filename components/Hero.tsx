import { useState, useEffect, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface HeroProps {
  onSearch: (searchTerm: string) => void;
  services: Service[];
}

export function Hero({ onSearch, services }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  useEffect(() => {
    const handleSearch = () => {
      if (searchTerm) {
        setFilteredServices(
          services.filter(service =>
            service.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredServices([]);
      }
    };

    const timerId = setTimeout(handleSearch, 500); // delay of 500ms

    return () => clearTimeout(timerId);
  }, [searchTerm, services]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-cover bg-center pt-20">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
            Transform the way<br />you manage your home.
          </h1>
          <p className="max-w-[700px] mx-auto text-lg text-muted-foreground">
            Whether you're renting, owning, or investing, our tools empower you to oversee maintenance, and tenant relationships.
          </p>
        </div>
        <div className="relative w-full max-w-3xl">
          <form className="relative w-full" onSubmit={handleSearchSubmit}>
            <Input
              type="search"
              placeholder="What do you need help with?"
              className="flex-1 w-full h-14 text-lg rounded-md bg-background pl-6 pr-16 focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-4 text-sm font-medium bg-primary text-primary-foreground rounded-md shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Search
            </Button>
          </form>
          {filteredServices.length > 0 && (
            <ul className="absolute bg-white shadow-md rounded-lg mt-2 w-full max-w-3xl z-10">
              {filteredServices.map((service) => (
                <li key={service.id} className="p-2 border-b last:border-b-0">
                  {service.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
