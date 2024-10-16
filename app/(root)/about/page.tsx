"use client"

import Image from "next/image"
import { Camera, Code, Plane, Share } from "lucide-react"
import FloatingDockDemo from "@/components/FloatingDock"
import Footer from "@/components/Footer"

export default function AboutMeComponent() {
  return (
    <div className="container mx-auto px-4 pb-6 max-w-4xl">
      <div className="pt-6">
        <FloatingDockDemo />
      </div>
      <Image 
        src="https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/City%20Waterfront%20Spain.jpg?t=2024-09-18T09%3A47%3A56.093Z" 
        alt="Aerial view of a city" 
        width={1200} 
        height={600} 
        className="rounded-lg shadow-lg mb-8"
      />
      
      <h1 className="text-4xl font-bold mb-8 text-center">SO, WHAT ABOUT ME? WHO AM I?</h1>
      
      <div className="space-y-6 text-lg">
      <p>
        My name is Youssef, a guy who finds his inner peace in <span className="text-blue-500 font-semibold">photography</span>.
        I&apos;m currently diving into the <span className="italic">world of software development</span> (frontend) through my apprenticeship, 
        but when I&apos;m not coding, I find peace behind the lens.
      </p>

      <div className="flex items-center">
        <Camera className="text-blue-500 mr-2" size={24} />
        <p>
          Photography has become my <span className="text-blue-500 font-semibold">creative outlet</span>,
          allowing me to capture the <span className="text-blue-500 font-semibold">beauty</span> and 
          <span className="text-blue-500 font-semibold"> uniqueness</span> of the world around us.
        </p>
      </div>

      <div className="flex items-center">
        <Plane className="text-blue-500 mr-2" size={24} />
        <p>
          Whether it&apos;s an interesting street scene, a stunning landscape, or capturing dynamic 
          <span className="text-blue-500 font-semibold"> aerial footage</span> from above, 
          I&apos;m always on the lookout for that perfect shot.
        </p>
      </div>

      <p>
        I shoot just about anything that catches my eye, from landscapes to candid moments, 
        always looking for that <span className="text-blue-500 font-semibold">special shot</span>. 
        Aerial photography also allows me to capture stunning <span className="text-blue-500 font-semibold">aerial perspectives </span> 
        that give a new sense of scale and wonder to familiar places.
      </p>

      <div className="flex items-center">
        <Share className="text-blue-500 mr-2" size={24} />
        <p>
          Beyond personal satisfaction, I love <span className="text-blue-500 font-semibold">sharing </span> 
          my work with others, which is why I upload some of my photos to 
          <a href="https://unsplash.com/@theworldthrumylenses" className="text-blue-500"> Unsplash</a>. 
          It brings me joy knowing that people can use my images freely for their own projects.
        </p>
      </div>

      <p>
        For me, photography isn&apos;t just about taking pictures; it&apos;s a way to slow down, appreciate the moment, and share that experience with others.
      </p>

      <p>
        I&apos;m creative, open-minded, and passionate about this visual journey I&apos;m on, and I&apos;m excited to share it with you :)
      </p>

        <div className="flex items-center justify-center">
          <Code className="text-blue-500 mr-2" size={24} />
          <p className="italic">
            P.S. - I also do video editing, well I try to...
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}