/* eslint-disable @next/next/no-img-element */
"use client"
import Footer from "@/components/Footer"
import { useState } from "react"
import FloatingDockDemo from "@/components/FloatingDock"

export default function PhotographyPortfolio() {

  // Add zoom function to pictures
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/UA.jpeg", alt: "Brand Logo Prototyp" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/GoHardOrGoHome%20prototyp-1-Front.png?t=2024-09-18T13%3A13%3A25.082Z", alt: "Go Hard or Go Home" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/IsUrAhighenough.png?t=2024-09-18T13%3A09%3A22.212Z", alt: "Brand Design Prototyp" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/RSM%20visitcard.png", alt: "Visit Card prototyp design" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/Photography%20Services.png?t=2024-09-22T16%3A20%3A28.297Z", alt: "Branding Flayer Prototyp" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/Displate%20EG.png?t=2024-09-22T16%3A44%3A23.264Z", alt: "LA poster" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/GoldenGate%20poster.png?t=2024-09-22T19%3A07%3A26.169Z", alt: "Golden Gate poster" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/SF%20Downtown%20poster.png?t=2024-09-22T19%3A23%3A40.833Z", alt: "SF downtown poster" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/LAdowntown%20poster.png?t=2024-09-22T19%3A42%3A55.893Z", alt: "LA downtown poster" },
    // { src: "/placeholder.svg?height=300&width=400", alt: "San Francisco street" },
  ];

  // Function to handle closing the enlarged image
  const closeImage = () => {
    setSelectedImage(null);
  };

   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is outside the image (on the overlay)
    if ((e.target as HTMLElement).id === 'overlay') {
      closeImage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
    {/* Space for the navbar */}
      <FloatingDockDemo />

    {/* Page title */}
    <h1 className="text-3xl md:text-4xl font-bold mb-14 text-center animate-fade-up animate-duration-[1000ms]">Art & Design</h1>

    {/* Responsive Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl animate-fade-up animate-duration-[1000ms]">
      {images.map((images, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover-effect"
          onClick={() => setSelectedImage(images.src)} // Set the clicked image
        >
          {/* Image */}
          <img
            src={images.src}
            alt={images.alt}
            className="w-full h-64 object-cover hover-effect"
          />
          {/* Overlay with Alt Text */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-400 bg-opacity-50 
          opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center text-lg px-2">{images.alt}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Enlarged Image Modal */}
    {selectedImage && (
    <div
        id="overlay"
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        onClick={handleOverlayClick} // Click on overlay to close
      >
      <div className="relative flex flex-row flex-wrap justify-center">
          
          {/* Close Button */}
          <button
            className="absolute top-0 right-0 m-4 text-blue-500 text-4xl"
            onClick={closeImage}
          >
            &times;
          </button>

          {/* Enlarged Image */}
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-w-screen-lg max-h-screen rounded-2xl shadow-lg"
          />
      </div>
    </div>
    )}

    {/* Space for the footer */}
      <Footer />
  </div>
  )
  }