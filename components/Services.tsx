import Link from "next/link";
import { Pledge } from "./Pledge";
import { Footer } from "./Footer";

export function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Services</h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {["Electrical Help", "Plumbing Repairs", "Home Cleaning", "Hurricane Assessment"].map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Service</span>
              </Link>
              <img src="/placeholder.svg" width={500} height={400} alt={`Service ${index + 1}`} className="object-cover w-full h-48" />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="text-sm text-muted-foreground">
                  {service === "Electrical Help" && "Custom web applications tailored to your business needs."}
                  {service === "Plumbing Repairs" && "Engaging mobile apps for iOS and Android platforms."}
                  {service === "Home Cleaning" && "Effective strategies to boost your online presence."}
                  {service === "Hurricane Assessment" && "Expert guidance to optimize your technology infrastructure."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-left">
          <button className="px-6 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75">
            View more services
          </button>
        </div>
      </div>
    </section>
  );
}
