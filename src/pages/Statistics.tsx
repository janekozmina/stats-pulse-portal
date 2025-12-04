import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, ExternalLink } from "lucide-react";

const Statistics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Statistics"
        subtitle="The Central Bank publishes regular statistics on payment systems, providing transparency and insights for financial institutions and payment system participants. Data visualizations are provided via an integrated analytics platform."
        variant="compact"
      />

      <main className="flex-1">
        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="instant" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="instant">Instant Payment Statistics</TabsTrigger>
                  <TabsTrigger value="rtgs">RTGS Statistics</TabsTrigger>
                  <TabsTrigger value="access">Participant Access</TabsTrigger>
                </TabsList>

                {/* Instant Payment Statistics */}
                <TabsContent value="instant">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">Instant Payment Statistics</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        Comprehensive data on transaction volumes, values, and characteristics of instant payments processed through the national instant payment system.
                      </p>
                    </div>

                    {/* Filters Placeholder */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Data Filters</CardTitle>
                        <CardDescription>Select time period and aggregation options</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Time Period</label>
                            <div className="p-3 border rounded-md bg-muted text-muted-foreground text-sm">
                              [Date range selector placeholder]
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Aggregation</label>
                            <div className="p-3 border rounded-md bg-muted text-muted-foreground text-sm">
                              [Daily / Weekly / Monthly selector]
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Participant Group</label>
                            <div className="p-3 border rounded-md bg-muted text-muted-foreground text-sm">
                              [Group filter placeholder]
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">Daily Volume</CardTitle>
                          <TrendingUp className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">[Placeholder]</div>
                          <p className="text-xs text-muted-foreground mt-1">Average transactions per day</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">Daily Value</CardTitle>
                          <BarChart3 className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">[Placeholder]</div>
                          <p className="text-xs text-muted-foreground mt-1">Total value processed daily</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">YoY Growth</CardTitle>
                          <TrendingUp className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">[Placeholder]</div>
                          <p className="text-xs text-muted-foreground mt-1">Year-over-year volume change</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Chart Placeholders */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Transaction Volume Trend</CardTitle>
                          <CardDescription>Number of instant payment transactions over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
                            <iframe
                              width="100%"
                              height="400"
                              seamless
                              frameBorder="0"
                              scrolling="no"
                              src="http://bian.cma.se/superset/explore/p/8KgdpYD3L0b/?standalone=1&height=400"
                            >
                            </iframe>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Transaction Value Trend</CardTitle>
                          <CardDescription>Total value of instant payments over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
                            <div className="text-center">
                              <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground font-medium">Chart Placeholder</p>
                              <p className="text-sm text-muted-foreground">Bar chart showing instant payment values over time</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Breakdown by Participant Category</CardTitle>
                          <CardDescription>Distribution of transactions across participant types</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-96 bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
                            <div className="text-center">
                              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground font-medium">Table Placeholder</p>
                              <p className="text-sm text-muted-foreground">Detailed breakdown of instant payment statistics by participant category</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Key Insights */}
                    <Card className="bg-accent/5">
                      <CardHeader>
                        <CardTitle>Key Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">Year-on-year growth in instant payment volumes continues to accelerate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">Share of instant payments in total retail payments reaching new highs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">Average transaction value remains stable with broad-based adoption</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* RTGS Statistics */}
                <TabsContent value="rtgs">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">RTGS Statistics</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        Key statistics on large-value payments processed via the Real-Time Gross Settlement system, providing insights into interbank payment flows and system liquidity.
                      </p>
                    </div>

                    {/* Filters Placeholder */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Data Filters</CardTitle>
                        <CardDescription>Select time period and analysis options</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Date Range</label>
                            <div className="p-3 border rounded-md bg-muted text-muted-foreground text-sm">
                              [Date range selector placeholder]
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Transaction Type</label>
                            <div className="p-3 border rounded-md bg-muted text-muted-foreground text-sm">
                              [Type filter placeholder]
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Participant Group</label>
                            <div className="p-3 border rounded-md bg-muted text-muted-foreground text-sm">
                              [Group filter placeholder]
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">Daily Volume</CardTitle>
                          <BarChart3 className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">[Placeholder]</div>
                          <p className="text-xs text-muted-foreground mt-1">Average RTGS transactions per day</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">Daily Value</CardTitle>
                          <TrendingUp className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">[Placeholder]</div>
                          <p className="text-xs text-muted-foreground mt-1">Total RTGS value processed daily</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium">Avg. Transaction Size</CardTitle>
                          <BarChart3 className="h-4 w-4 text-accent" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">[Placeholder]</div>
                          <p className="text-xs text-muted-foreground mt-1">Mean value per transaction</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Chart Placeholders */}
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>RTGS Transaction Volume</CardTitle>
                          <CardDescription>Number of RTGS transactions over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
                            <div className="text-center">
                              <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground font-medium">Chart Placeholder</p>
                              <p className="text-sm text-muted-foreground">Line chart showing RTGS transaction volumes over time</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>RTGS Transaction Value</CardTitle>
                          <CardDescription>Total value of RTGS payments over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-80 bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
                            <div className="text-center">
                              <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground font-medium">Chart Placeholder</p>
                              <p className="text-sm text-muted-foreground">Bar chart showing total RTGS values over time</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Intraday Payment Distribution</CardTitle>
                          <CardDescription>Distribution of RTGS payments by time of day</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-96 bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
                            <div className="text-center">
                              <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground font-medium">Table Placeholder</p>
                              <p className="text-sm text-muted-foreground">Detailed breakdown of RTGS payments by time of day and participant category</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Key Insights */}
                    <Card className="bg-accent/5">
                      <CardHeader>
                        <CardTitle>Key Insights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">Average daily RTGS volume remains stable with seasonal variations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">Concentration of payments among major participants reflects interbank market structure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-muted-foreground">Peak payment processing hours align with market settlement windows</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Participant Access */}
                <TabsContent value="access">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">Participant Access</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        This area provides financial institutions and payment system participants with access to additional tools, applications, and resources that support participation in payment systems.
                      </p>
                    </div>

                    <Card className="border-2 border-accent/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ExternalLink className="h-5 w-5 text-accent" />
                          Participant Portal
                        </CardTitle>
                        <CardDescription>
                          Access the dedicated portal for payment system participants
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          The Participant Portal provides authorized users with access to:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>System configuration and technical settings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Detailed reporting and transaction analytics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Technical documentation and integration guides</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Operational notifications and service status</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>Support resources and contact information</span>
                          </li>
                        </ul>
                        <div className="pt-4">
                          <Button asChild size="lg" className="w-full sm:w-auto">
                            <a href="https://bian.cma.se/" target="_blank" rel="noopener noreferrer">
                              Go to Participant Portal
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>For New Participants</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-muted-foreground">
                            Information on becoming a participant in payment systems:
                          </p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Eligibility criteria and requirements</li>
                            <li>• Application procedures and timelines</li>
                            <li>• Technical specifications and testing</li>
                            <li>• Onboarding process and support</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>For Existing Participants</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-muted-foreground">
                            Resources for current payment system participants:
                          </p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Operational procedures and guidelines</li>
                            <li>• System updates and enhancements</li>
                            <li>• Incident management and support</li>
                            <li>• Continuing education and training</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Statistics;
