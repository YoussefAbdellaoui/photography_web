"use client"

import emailjs from 'emailjs-com'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Camera, Coffee } from "lucide-react"
import FloatingDockDemo from "@/components/FloatingDock"

export default function ContactMeComponent() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = {
      name: (e.target as HTMLFormElement).name.valueOf,
      email: (e.target as HTMLFormElement).email.value,
      message: (e.target as HTMLFormElement).message.value,
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )

      if (result.status === 200) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to send the message. Please try again.')
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again, or contact me at hamsa-productions@proton.com.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 pt-16 max-w-4xl">
      <FloatingDockDemo />
      <h1 className="text-4xl font-bold mb-8 text-center">Let‘s Connect!</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg">
            Ready to capture some moments or just want to chat about the latest camera gear? 
            Drop me a line! I promise I don‘t bite (unless you‘re a delicious slice of pizza).
          </p>
          
          <div className="flex items-center space-x-3">
            <Mail className="text-slate-900 dark:text-slate-50" />
            <span>hamsa-productions@proton.com</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="text-slate-900 dark:text-slate-50" />
            <span>+1 (555) 123-4567</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="text-slate-900 dark:text-slate-50" />
            <span>Somewhere between 🌍 and the 🌙</span>
          </div>
          
          <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400">
            <Coffee className="animate-bounce" />
            <span>Currently caffeinating...</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-slate-950">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="What's on your mind?" required />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <Camera className="mx-auto h-16 w-16 text-slate-900 animate-bounce dark:text-slate-50" />
              <h2 className="text-2xl font-semibold">Thanks for reaching out!</h2>
              <p>I‘ll get back to you faster than you can say &quot;cheese&quot; for a photo.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-500 dark:text-slate-400">
        <p>Don‘t be a stranger, unless you‘re actually a stranger. In that case, let‘s change that!</p>
      </div>
    </div>
  )
}
