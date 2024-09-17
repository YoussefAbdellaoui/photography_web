"'use client'"

import { ScrollArea } from "@/components/ui/scroll-area"

export function TermsAndConditionsComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Terms and Conditions</h1>
          <ScrollArea className="h-[calc(100vh-200px)] pr-4">
            <div className="space-y-8">
              <Section title="1. General Use">
                <p>
                  The content provided on this website, including photographs and other visual media, is for informational and personal use only. You may not use, reproduce, or distribute any materials for commercial purposes without prior written permission from me. All content is subject to change without notice.
                </p>
              </Section>

              <Section title="2. Ownership of Content">
                <p>
                  All photographs and images on this website are my original work and are protected by copyright law. I retain all rights to my work unless stated otherwise. You may not claim ownership of any of the images on this site. However, some of my work is available on Unsplash for free use under their licensing terms.
                </p>
              </Section>

              <Section title="3. Free Use via Unsplash">
                <p>
                  Some of my work is uploaded to Unsplash for free use. You may use these images in accordance with Unsplash's license, which allows for both personal and commercial use without the need for attribution. However, I always appreciate a shout-out if you choose to do so.
                </p>
              </Section>

              <Section title="4. User Responsibilities">
                <p>
                  You are responsible for ensuring that your use of this website and the images complies with all applicable laws and regulations. Unauthorized use of the content or images may result in legal action.
                </p>
              </Section>

              <Section title="5. Privacy Policy">
                <p>
                  Any personal information you provide via this website (such as through contact forms) will be kept private and not shared with third parties without your consent.
                </p>
              </Section>

              <Section title="6. Limitation of Liability">
                <p>
                  I do my best to ensure that the information and images on this website are accurate and up to date. However, I am not responsible for any errors or omissions in the content or for any damages resulting from the use of this website.
                </p>
              </Section>

              <Section title="7. Links to Third-Party Websites">
                <p>
                  This website may contain links to third-party websites. These links are provided for convenience only. I have no control over the content of these websites and am not responsible for their policies or practices.
                </p>
              </Section>

              <Section title="8. Changes to Terms and Conditions">
                <p>
                  I reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and it is your responsibility to review them periodically.
                </p>
              </Section>

              <Section title="9. Governing Law">
                <p>
                  These terms are governed by and construed in accordance with the laws of Germany. Any disputes arising from these terms shall be resolved exclusively in the courts of Germany.
                </p>
              </Section>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
      <div className="text-gray-600">{children}</div>
    </section>
  )
}