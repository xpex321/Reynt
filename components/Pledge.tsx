import { Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export function Pledge() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Service Pledge</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Reynt, we're committed to providing the best possible experience for our customers. Here are a few
              key pledges we make to you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 space-y-4 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-50">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center group-hover:bg-primary-foreground transition-colors duration-300">
                <ClockIcon className="w-6 h-6 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Reliable Service</h3>
                <p className="text-muted-foreground">
                  Our Taskers are available 24/7 to assist you with any task, big or small.
                </p>
              </div>
            </Card>
            <Card className="p-6 space-y-4 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-50">
              <div className="bg-secondary rounded-full p-3 flex items-center justify-center group-hover:bg-secondary-foreground transition-colors duration-300">
                <TruckIcon className="w-6 h-6 text-secondary-foreground group-hover:text-secondary transition-colors duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  We work around your schedule to ensure your tasks are completed when you need them.
                </p>
              </div>
            </Card>
            <Card className="p-6 space-y-4 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-50">
              <div className="bg-muted rounded-full p-3 flex items-center justify-center group-hover:bg-muted-foreground transition-colors duration-300">
                <ReceiptIcon className="w-6 h-6 text-muted-foreground group-hover:text-muted transition-colors duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Satisfaction Guarantee</h3>
                <p className="text-muted-foreground">
                  If you're not completely satisfied, we'll make it right or refund your money.
                </p>
              </div>
            </Card>
            <Card className="p-6 space-y-4 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-50">
              <div className="bg-accent rounded-full p-3 flex items-center justify-center group-hover:bg-accent-foreground transition-colors duration-300">
                <CheckIcon className="w-6 h-6 text-accent-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Vetted Taskers</h3>
                <p className="text-muted-foreground">
                  Our Taskers are thoroughly vetted and insured to ensure your safety and peace of mind.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ReceiptIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  );
}

function TruckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
