"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import FloatingDockDemo from "@/components/FloatingDock"

export default function PrivacyPolicyComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <FloatingDockDemo/>
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Privacy Policy</h1>
          <ScrollArea className="h-[calc(100vh-200px)] pr-4">
            <div className="space-y-8">
              <Section title="1. Introduction">
                <p>
                  We respect your privacy and are committed to protecting the personal information you provide us through this website. This privacy policy outlines how your information is collected, used, and safeguarded.
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <p>
                  We may collect personal information such as your name, email address, and any other information you provide via contact forms or when you register with our services. Additionally, we collect non-personal information such as browser type, IP address, and website usage statistics to improve our site performance.
                </p>
              </Section>

              <Section title="3. Use of Your Information">
                <p>The information we collect is used to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Respond to your inquiries or requests.</li>
                  <li>Improve our website functionality and user experience.</li>
                  <li>Send occasional promotional emails if you opt-in to receive them.</li>
                </ul>
              </Section>

              <Section title="4. Sharing of Your Information">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers to help us operate our website, provided they agree to keep your information confidential.
                </p>
              </Section>

              <Section title="5. Cookies">
                <p>We do not collect cookies on our website.</p>
              </Section>

              <Section title="6. Data Security">
                <p>
                  We take the security of your personal information seriously and implement various security measures to protect your data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>
              </Section>

              <Section title="7. Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites, and we encourage you to review their privacy policies before engaging with them.
                </p>
              </Section>

              <Section title="8. Your Rights">
                <p>
                  You have the right to access, correct, or request the deletion of your personal information at any time. If you wish to exercise these rights, please contact us directly.
                </p>
              </Section>

              <Section title="9. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and it is your responsibility to review this policy periodically for updates.
                </p>
              </Section>

              <Section title="10. Contact Information">
                <p>
                  If you have any questions about this Privacy Policy or how your information is handled, please feel free to contact us at  {" --> "}
                  <a href="mailto:Hamsa-Productions@proton.me" className="text-blue-600 hover:underline">
                    Hamsa-Productions@proton.me
                  </a>
                  .
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