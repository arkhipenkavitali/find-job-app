import {Briefcase} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar(){
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex gap-2 text-xl font-semibold text-primary items-center">
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="sign-in">
            <Button variant="ghost" className="text-gray-700 hover:text-black">Login</Button>
          </Link>
          <Link href="sign-up">
            <Button className="bg-foreground hover:bg-foreground/90">Start for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}