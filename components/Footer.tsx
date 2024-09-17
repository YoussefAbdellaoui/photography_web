import React from 'react'
import { Mail, Instagram, Github, Youtube } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-6 rounded-xl">
      <div className="mx-auto px-80">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Rif - Shift - Media</h2>
          </div>
          {/* <div className="mb-4 md:mb-0">
            <Button>
              <a href="/contact">Contact Me</a>
            </Button>
          </div> */}
          <div className="flex space-x-4">
            <a href="mailto:hamsa-productions@proton.me" className="hover:text-gray-300">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://instagram.com/yousseffo_o" className="hover:text-gray-300">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/YoussefAbdellaoui" className="hover:text-gray-300">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.youtube.com/@TheWorldThroughMyLens" className="hover:text-gray-300">
              <Youtube size={24} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy;2024 Rif Shift Media</p>
          <div className="mt-2 md:mt-0">
          <a href="/privacy-policy" className="hover:underline mr-4 ml-3">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
