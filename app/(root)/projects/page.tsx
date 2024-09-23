"use client"
import Footer from "@/components/Footer"
import { useState } from "react"
import FloatingDockDemo from "@/components/FloatingDock"

export default function PhotographyPortfolio() {

  // Add zoom function to pictures
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1717169322817-e08bffe120af?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Coastal city view" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/City%20Waterfront%20Spain.jpg?t=2024-09-18T09%3A47%3A56.093Z", alt: "Spanish coast" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/camel.jpg", alt: "Camel in desert" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/yate%20in%20dubai.jpg", alt: "Yate tour, Dubai Marina, UAE" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/cat.jpg?t=2024-09-18T12%3A11%3A11.905Z", alt: "Cat being curious" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/santamonicaOver.jpg", alt: "Aerial view of Santa Monica Pier, Los Angeles, CA" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/houseinthethrees.jpg", alt: "Countryside house" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/LAdowntown.jpg", alt: "Downtown Los Angeles" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/goldengate.jpg", alt: "Golden Gate Bridge" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/sfdowntown.jpg?t=2024-09-18T12%3A14%3A28.702Z", alt: "Downtown San Francisco" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/santamonicabeach.jpg?t=2024-09-18T12%3A25%3A00.263Z", alt: "Santa Monica beach, Los Angeles, CA" },
    { src: "https://mcazjrqrbacpcxpqdjca.supabase.co/storage/v1/object/public/Assets/sf.jpg", alt: "Arial View of San Francisco" },
    // { src: "/placeholder.svg?height=300&width=400", alt: "San Francisco street" },
  ];

  // Function to handle closing the enlarged image
  const closeImage = () => {
    setSelectedImage(null);
  };

   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the click is outside the image (on the overlay)
    if ((e.target as HTMLDivElement).id === 'overlay') {
      closeImage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
    {/* Space for the navbar */}
    <div className="">
      <FloatingDockDemo />
    </div>

    {/* Page title */}
    <h1 className="text-3xl md:text-4xl font-bold mb-14 text-center animate-fade-up animate-duration-[1000ms]">My Photography Work</h1>

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