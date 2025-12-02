import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MonetaryPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Monetary Policy & Financial Stability"
        subtitle="Maintaining price stability and promoting financial system resilience through effective policy implementation and systemic risk monitoring."
        variant="compact"
      />

      <main className="flex-1">
        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Role in the Economy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Central Bank is responsible for maintaining monetary and financial stability, which are fundamental to sustainable economic growth and prosperity. Through our policy framework, we work to keep inflation low and stable while supporting the smooth functioning of financial markets and institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Monetary Policy Framework */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Monetary Policy Framework</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Policy Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our primary objective is to maintain price stability, which we define as keeping inflation low, stable, and predictable. This provides a foundation for sustainable economic growth and allows households and businesses to make long-term plans with confidence.
                    </p>
                    <p className="text-muted-foreground">
                      We also support general economic policy objectives, including high employment and sustainable growth, to the extent that this is consistent with our price stability mandate.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Policy Instruments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Policy Interest Rate</h4>
                        <p className="text-muted-foreground">
                          The primary tool for influencing monetary conditions and achieving our inflation objective. Changes to the policy rate affect short-term market rates and ultimately broader financial conditions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Open Market Operations</h4>
                        <p className="text-muted-foreground">
                          Regular market operations to manage liquidity in the banking system and ensure effective transmission of monetary policy decisions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Standing Facilities</h4>
                        <p className="text-muted-foreground">
                          Deposit and lending facilities available to financial institutions for overnight liquidity management.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Policy Decisions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monetary policy decisions are made at regular intervals based on comprehensive assessment of economic conditions, inflation trends, and financial market developments. Decisions are communicated through policy statements that explain the rationale and outlook.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Stability */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Financial Stability Responsibilities</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monitoring Systemic Risks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We continuously monitor risks to the financial system, including credit risk, liquidity risk, market risk, and operational risk. Our analysis covers banks, financial market infrastructures, and other systemically important institutions to identify potential vulnerabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Macroprudential Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We employ macroprudential policy instruments to address systemic risks and strengthen the resilience of the financial system. These tools complement monetary policy and focus on the stability of the system as a whole rather than individual institutions.
                    </p>
                    <p className="text-muted-foreground">
                      Key instruments include capital buffers, liquidity requirements, and measures to address risks in specific market segments.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Coordination with Other Authorities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Financial stability requires close coordination among regulatory and supervisory authorities. We work with banking supervisors, securities regulators, and international bodies to ensure a comprehensive and coordinated approach to systemic risk management.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Indicators */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Economic Indicators</h2>
              <p className="text-muted-foreground mb-8">
                The following indicators provide insight into monetary policy and financial stability conditions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">Policy Interest Rate</h4>
                  <p className="text-3xl font-bold text-primary mb-2">[Placeholder]</p>
                  <p className="text-sm text-muted-foreground">Current level and recent changes</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">Inflation Rate</h4>
                  <p className="text-3xl font-bold text-primary mb-2">[Placeholder]</p>
                  <p className="text-sm text-muted-foreground">Year-over-year percentage change</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">Systemic Risk Index</h4>
                  <p className="text-3xl font-bold text-primary mb-2">[Placeholder]</p>
                  <p className="text-sm text-muted-foreground">Composite measure of system-wide risks</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">Banking Sector Resilience</h4>
                  <p className="text-3xl font-bold text-primary mb-2">[Placeholder]</p>
                  <p className="text-sm text-muted-foreground">Capital adequacy and liquidity metrics</p>
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

export default MonetaryPolicy;
