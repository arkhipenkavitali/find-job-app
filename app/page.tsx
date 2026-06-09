import {Button} from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {


  // console.log(favouriteIdsSet)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">Job finder app</h1>
            <p className="text-muted-foreground mb-10 text-xl">Some motivation text here</p>
            <div>
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">Start for free <ArrowRight className="ml-2" /></Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t bg-white py-16">
          <div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
