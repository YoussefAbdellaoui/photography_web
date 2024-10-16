"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import FloatingDockDemo from "@/components/FloatingDock"
import Footer from "@/components/Footer"

const videos = [
  { id: 1, src: "", title: "'Nature Scenery'" },
  { id: 2, src: "", title: "'Urban Landscape'" },
  { id: 3, src: "", title: "'Wildlife Close-up'" },
  { id: 4, src: "", title: "'Aerial City View'" },
]

export default function FootagePageComponent() {
//   const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <main className="flex flex-col items-center justify-center p-4 min-h-screen">
        <FloatingDockDemo />
      <h1 className="text-3xl font-bold mb-8 text-center">Footage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <Dialog key={video.id}>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer">
                <video 
                  className="w-full h-64 object-cover rounded-lg"
                  src={video.src}
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p className="text-white text-lg font-semibold">{video.title}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
              <div className="relative">
                <video 
                  className="w-full h-auto"
                  src={video.src}
                  controls
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
                {/* <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label="Close video"
                >
                  <X size={24} />
                </button> */}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <Footer />
    </main>
  )
}