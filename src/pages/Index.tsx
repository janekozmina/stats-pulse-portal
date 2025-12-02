import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";
import { BarChart3, Shield, Network, Building2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Central Bank – Ensuring Stability and Efficient Payments"
        subtitle="Access comprehensive payment system statistics, infrastructure information, and resources for financial institutions and payment system participants."
        primaryCta={{ label: "View Statistics", to: "/statistics" }}
        secondaryCta={{ label: "About the Central Bank", to: "/about" }}
      />

      <main className="flex-1">
        {/* Key Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={Shield}
                title="Monetary Policy & Financial Stability"
                description="Maintaining price stability and monitoring systemic risks in the financial system."
                link="/monetary-policy"
              />
              <InfoCard
                icon={Network}
                title="Payment Systems & Infrastructure"
                description="Operating and overseeing national payment and settlement systems."
                link="/payment-systems"
              />
              <InfoCard
                icon={BarChart3}
                title="Statistics"
                description="Regular statistics on instant payments, RTGS, and payment system activities."
                link="/statistics"
              />
              <InfoCard
                icon={Building2}
                title="About the Central Bank"
                description="Learn about our mandate, governance, and core functions."
                link="/about"
              />
            </div>
          </div>
        </section>

        {/* Highlights for Participants */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">For Financial Institutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access comprehensive statistics for monitoring payment volumes and values across instant payment and RTGS systems. Find information on participation requirements and operational updates for payment infrastructures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/statistics" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-6 py-2">
                  View Payment Statistics
                </a>
                <a href="/payment-systems" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2">
                  Payment Systems Info
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Publications */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Publications & Announcements</h2>
            <div className="space-y-4 max-w-3xl">
              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="font-semibold mb-1">Latest policy statement – Quarterly Review</h3>
                <p className="text-sm text-muted-foreground mb-2">Overview of recent monetary policy decisions and economic outlook.</p>
                <a href="#" className="text-sm text-accent hover:underline">Read more →</a>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="font-semibold mb-1">Update on payment system operations</h3>
                <p className="text-sm text-muted-foreground mb-2">Recent enhancements to instant payment processing capabilities.</p>
                <a href="#" className="text-sm text-accent hover:underline">Read more →</a>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="font-semibold mb-1">Financial Stability Report – Annual Edition</h3>
                <p className="text-sm text-muted-foreground mb-2">Comprehensive analysis of risks and resilience in the financial system.</p>
                <a href="#" className="text-sm text-accent hover:underline">Read more →</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
