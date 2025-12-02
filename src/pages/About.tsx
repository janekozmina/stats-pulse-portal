import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Scale, Network, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="About the Central Bank"
        subtitle="Our mission is to maintain price stability, promote financial system stability, and ensure safe and efficient payment systems."
        variant="compact"
      />

      <main className="flex-1">
        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Central Bank serves as the cornerstone of the nation's financial system, working to ensure economic stability and efficient payment infrastructures. We are committed to maintaining price stability, promoting financial system stability, and overseeing safe and efficient payment and settlement systems.
              </p>
            </div>
          </div>
        </section>

        {/* Core Functions */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Mandate & Core Functions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Conducting Monetary Policy</h3>
                  <p className="text-muted-foreground">
                    Implementing policy decisions to maintain price stability and support sustainable economic growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Scale className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Promoting Financial Stability</h3>
                  <p className="text-muted-foreground">
                    Monitoring systemic risks and implementing macroprudential measures to ensure financial system resilience.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <Network className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Overseeing Payment Systems</h3>
                  <p className="text-muted-foreground">
                    Operating and supervising payment and settlement systems to ensure safety, efficiency, and reliability.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <BarChart3 className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Providing Statistics & Analysis</h3>
                  <p className="text-muted-foreground">
                    Publishing comprehensive statistics and analysis on payment systems and financial markets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Governance & Organizational Structure</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Central Bank operates under a clear governance framework designed to ensure independence, accountability, and effective decision-making.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Governing Board</h3>
                  <p className="text-muted-foreground">Responsible for strategic direction and major policy decisions.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Executive Management</h3>
                  <p className="text-muted-foreground">Oversees day-to-day operations and implementation of policies.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-lg mb-2">Specialized Committees</h3>
                  <p className="text-muted-foreground">Technical committees focused on monetary policy, financial stability, and payment systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role in Payment Systems */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Role in Payment Systems</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Central Bank plays a critical role in the national payment infrastructure, operating key payment systems and providing oversight to ensure their safety and efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We operate the Real-Time Gross Settlement (RTGS) system for large-value payments and oversee the instant payment system for retail transactions. Regular statistics on these systems are published to provide transparency to market participants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/payment-systems" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
                  Payment Systems Overview
                </a>
                <a href="/statistics" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2">
                  View Statistics
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
