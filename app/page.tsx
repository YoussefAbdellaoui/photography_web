"use client"

import FloatingDockDemo from "@/components/FloatingDock"
import { Button } from "@/components/ui/button"
import {Cover} from "@/components/ui/cover"

export default function Component() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/bgvideo.mp4?t=2024-09-18T08%3A10%3A06.536Z" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
        {/* Floating Dock */} 
      <FloatingDockDemo/>
      {/* Content Overlay */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 text-center">
        <div className="bg-black bg-opacity-50 px-16 py-10 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to</h1>
          <h3 className="text-4xl font-bold text-white mb-4"><Cover>Rif Shift Media</Cover></h3>
          <p className="text-xl text-white mb-6"></p>
          <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black transition-colors">
            <a href="/projects">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Placeholder for Navbar (you'll implement this) */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Your Navbar component will go here */}
      </div>

      {/* Placeholder for Footer (you'll implement this) */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Your Footer component will go here */}
      </div>
    </div>
  )
}