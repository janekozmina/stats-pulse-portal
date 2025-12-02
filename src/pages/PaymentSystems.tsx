import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import { Zap, Building, Network } from "lucide-react";

const PaymentSystems = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Payment Systems & Infrastructure"
        subtitle="Operating and overseeing national payment and settlement systems to ensure safe, efficient, and resilient payment infrastructures."
        variant="compact"
      />

      <main className="flex-1">
        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Central Bank as Payment System Operator & Overseer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Central Bank operates and oversees the nation's core payment and settlement infrastructures, ensuring they meet the highest standards of safety, efficiency, and resilience. These systems form the backbone of the financial system, processing millions of transactions daily.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our role encompasses both direct operation of critical systems and oversight of market-operated infrastructures to ensure they function reliably and support the broader economy.
              </p>
            </div>
          </div>
        </section>

        {/* Main Infrastructures */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Main Payment Infrastructures</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <InfoCard
                icon={Building}
                title="Real-Time Gross Settlement (RTGS) System"
                description="Processes large-value and time-critical payments between financial institutions on a real-time, transaction-by-transaction basis with immediate finality."
                link="/statistics"
                linkLabel="View RTGS Statistics"
              />
              <InfoCard
                icon={Zap}
                title="Instant Payment System"
                description="Enables near real-time retail payments available 24/7/365, allowing consumers and businesses to send and receive funds instantly."
                link="/statistics"
                linkLabel="View Instant Payment Statistics"
              />
              <InfoCard
                icon={Network}
                title="Other Payment Infrastructures"
                description="Additional clearing and settlement systems for retail payments, securities transactions, and other payment types."
              />
            </div>
          </div>
        </section>

        {/* For Participants */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">For Participants</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Financial institutions and payment service providers can find comprehensive information to support their participation in payment systems:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-lg mb-2">Joining Payment Systems</h3>
                  <p className="text-muted-foreground">Information on participation criteria, technical requirements, and application procedures for accessing payment infrastructures.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-lg mb-2">Operational Updates</h3>
                  <p className="text-muted-foreground">Regular updates on system maintenance, enhancements, and operational notices affecting payment processing.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-semibold text-lg mb-2">Payment Statistics</h3>
                  <p className="text-muted-foreground">Detailed statistics on transaction volumes, values, and other key metrics across instant payment and RTGS systems.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/statistics" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8">
                  View Payment Statistics
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Information */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Operational Information</h2>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">System Availability</h3>
                  <p className="text-muted-foreground mb-4">
                    Our payment systems are designed for high availability with robust operational procedures and redundancy measures.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">RTGS System:</span> Monday-Friday, 07:00-18:00
                    </div>
                    <div>
                      <span className="font-semibold">Instant Payment System:</span> 24/7/365
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Operational Notices</h3>
                  <div className="space-y-3">
                    <div className="pb-3 border-b">
                      <p className="font-medium mb-1">Scheduled Maintenance – [Placeholder Date]</p>
                      <p className="text-sm text-muted-foreground">Planned system maintenance window for infrastructure upgrades.</p>
                    </div>
                    <div className="pb-3 border-b">
                      <p className="font-medium mb-1">System Enhancement Release – [Placeholder]</p>
                      <p className="text-sm text-muted-foreground">New features and improvements to payment processing capabilities.</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Participant Update – [Placeholder]</p>
                      <p className="text-sm text-muted-foreground">Important information for system participants regarding operational procedures.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Documentation & Rulebooks</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive documentation is available for participants, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>System rulebooks and participation agreements</li>
                    <li>Technical specifications and interface documentation</li>
                    <li>Operational procedures and business continuity plans</li>
                    <li>Fee structures and pricing information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSystems;
