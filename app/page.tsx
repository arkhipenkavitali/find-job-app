import {Button} from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">Job finder app</h1>
            <p className="text-muted-foreground mb-10 text-xl">Some motivation text here</p>
            <div>
              <Button size="lg" className="h-12 px-8 text-lg font-medium">Start for free <ArrowRight className="ml-2" /></Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
