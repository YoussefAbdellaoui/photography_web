"use client"

import FloatingDockDemo from "@/components/FloatingDock"
import { Button } from "@/components/ui/button"

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
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
        {/* Floating Dock */} 
      <FloatingDockDemo/>
      {/* Content Overlay */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Site</h1>
          <p className="text-xl text-white mb-6">Discover amazing content with our video background.</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
            Learn More
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