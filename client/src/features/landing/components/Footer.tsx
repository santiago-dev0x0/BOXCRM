import { MessageSquareDot } from 'lucide-react';

export function Footer() {
  return (
    <div className="bg-primary">
      <footer className="container mx-auto py-5">
        <div className="flex items-center justify-center gap-2">
          <MessageSquareDot className="h-10 w-10 text-white" />
          <h1 className="text-2xl font-extrabold md:text-4xl">
            Box<span className="text-white">CRM</span>
          </h1>
        </div>
      </footer>
    </div>
  );
}
