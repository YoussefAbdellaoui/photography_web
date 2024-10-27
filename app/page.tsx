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
        <div className="pt-6">
        <FloatingDockDemo/>
        </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 text-center">
        <div className="bg-black bg-opacity-50 px-16 py-10 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-7">Welcome to</h1>
          <h3 className="text-4xl font-bold text-white mb-7"><Cover>Rif Shift Media</Cover></h3>
          <Button variant="outline" className="hover-effect hover:text-white inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a href="/contact" className="font-semibold">Services & Contact</a>
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