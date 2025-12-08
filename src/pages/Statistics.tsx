import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, TrendingUp, Users, ExternalLink, ArrowUpRight, ArrowDownRight, Download } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, ComposedChart } from "recharts";

// Instant Payment data
const instantPaymentVolumeData = [
  { month: "Jan 2024", volume: 12.4, value: 8.2 },
  { month: "Feb 2024", volume: 13.1, value: 8.7 },
  { month: "Mar 2024", volume: 14.8, value: 9.4 },
  { month: "Apr 2024", volume: 15.2, value: 9.8 },
  { month: "May 2024", volume: 16.1, value: 10.3 },
  { month: "Jun 2024", volume: 15.8, value: 10.1 },
  { month: "Jul 2024", volume: 14.9, value: 9.6 },
  { month: "Aug 2024", volume: 16.4, value: 10.8 },
  { month: "Sep 2024", volume: 17.2, value: 11.2 },
  { month: "Oct 2024", volume: 18.1, value: 11.9 },
  { month: "Nov 2024", volume: 19.3, value: 12.4 },
  { month: "Dec 2024", volume: 21.2, value: 13.8 },
];

const instantPaymentDailyData = [
  { day: "Mon", volume: 3.2, avgValue: 245 },
  { day: "Tue", volume: 3.5, avgValue: 267 },
  { day: "Wed", volume: 3.8, avgValue: 289 },
  { day: "Thu", volume: 3.6, avgValue: 274 },
  { day: "Fri", volume: 4.1, avgValue: 312 },
  { day: "Sat", volume: 2.1, avgValue: 178 },
  { day: "Sun", volume: 1.8, avgValue: 156 },
];

const participantBreakdownInstant = [
  { category: "Commercial Banks", volume: 8945231, value: 5847.2, share: 42.3, change: 12.4 },
  { category: "Savings Banks", volume: 4521876, value: 2943.8, share: 21.4, change: 8.7 },
  { category: "Payment Institutions", volume: 3287654, value: 2145.3, share: 15.6, change: 23.1 },
  { category: "E-Money Institutions", volume: 2654321, value: 1732.4, share: 12.6, change: 31.2 },
  { category: "Credit Unions", volume: 1123456, value: 732.8, share: 5.3, change: 5.4 },
  { category: "Other PSPs", volume: 587432, value: 383.2, share: 2.8, change: 18.9 },
];

// RTGS data
const rtgsVolumeData = [
  { month: "Jan 2024", volume: 4521, value: 892.4 },
  { month: "Feb 2024", volume: 4234, value: 834.7 },
  { month: "Mar 2024", volume: 4876, value: 961.2 },
  { month: "Apr 2024", volume: 4654, value: 918.5 },
  { month: "May 2024", volume: 4789, value: 945.3 },
  { month: "Jun 2024", volume: 4432, value: 874.1 },
  { month: "Jul 2024", volume: 4123, value: 813.6 },
  { month: "Aug 2024", volume: 4567, value: 901.2 },
  { month: "Sep 2024", volume: 4891, value: 965.4 },
  { month: "Oct 2024", volume: 5012, value: 989.3 },
  { month: "Nov 2024", volume: 5234, value: 1032.8 },
  { month: "Dec 2024", volume: 5567, value: 1098.4 },
];

const rtgsIntradayData = [
  { hour: "08:00", volume: 234, value: 45.2 },
  { hour: "09:00", volume: 456, value: 89.4 },
  { hour: "10:00", volume: 678, value: 132.1 },
  { hour: "11:00", volume: 543, value: 106.7 },
  { hour: "12:00", volume: 387, value: 76.3 },
  { hour: "13:00", volume: 421, value: 82.9 },
  { hour: "14:00", volume: 567, value: 111.6 },
  { hour: "15:00", volume: 689, value: 135.8 },
  { hour: "16:00", volume: 534, value: 105.2 },
  { hour: "17:00", volume: 312, value: 61.4 },
];

const rtgsParticipantBreakdown = [
  { category: "Tier 1 Banks", transactions: 2341, value: 567.8, share: 51.7 },
  { category: "Tier 2 Banks", transactions: 1234, value: 298.4, share: 27.2 },
  { category: "Government Entities", transactions: 456, value: 112.3, share: 10.2 },
  { category: "Securities Firms", transactions: 312, value: 78.9, share: 7.2 },
  { category: "Central Counterparties", transactions: 167, value: 40.8, share: 3.7 },
];

const pieColors = ["hsl(var(--primary))", "hsl(var(--accent))", "#64748b", "#94a3b8", "#cbd5e1", "#e2e8f0"];

const Statistics = () => {
  const [instantPeriod, setInstantPeriod] = useState("12m");
  const [instantAggregation, setInstantAggregation] = useState("monthly");
  const [rtgsPeriod, setRtgsPeriod] = useState("12m");
  const [rtgsType, setRtgsType] = useState("all");

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatCurrency = (num: number) => {
    return `€${num.toFixed(1)}B`;
  };

  const formatMillions = (num: number) => {
    return `${num.toFixed(1)}M`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <Hero
        title="Statistics"
        subtitle="The Central Bank publishes regular statistics on payment systems, providing transparency and insights for financial institutions and payment system participants."
        variant="compact"
      />

      <main className="flex-1">
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
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold">Instant Payment Statistics</h2>
                        <p className="text-muted-foreground">
                          Transaction volumes and values processed through the national instant payment system
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2 w-fit">
                        <Download className="h-4 w-4" />
                        Export Data
                      </Button>
                    </div>

                    {/* Filters */}
                    <Card className="border-border/50">
                      <CardContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Time Period</label>
                            <Select value={instantPeriod} onValueChange={setInstantPeriod}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="3m">Last 3 Months</SelectItem>
                                <SelectItem value="6m">Last 6 Months</SelectItem>
                                <SelectItem value="12m">Last 12 Months</SelectItem>
                                <SelectItem value="ytd">Year to Date</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Aggregation</label>
                            <Select value={instantAggregation} onValueChange={setInstantAggregation}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Participant Type</label>
                            <Select defaultValue="all">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Participants</SelectItem>
                                <SelectItem value="banks">Commercial Banks</SelectItem>
                                <SelectItem value="psp">Payment Institutions</SelectItem>
                                <SelectItem value="emi">E-Money Institutions</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Currency</label>
                            <Select defaultValue="eur">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="eur">EUR</SelectItem>
                                <SelectItem value="local">Local Currency</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Daily Avg. Volume</p>
                          <p className="text-2xl font-bold mt-1">687,421</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            <span className="text-green-600 font-medium">+12.4%</span>
                            <span className="text-muted-foreground">vs last period</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Daily Avg. Value</p>
                          <p className="text-2xl font-bold mt-1">€448.2M</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            <span className="text-green-600 font-medium">+8.7%</span>
                            <span className="text-muted-foreground">vs last period</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">YoY Growth</p>
                          <p className="text-2xl font-bold mt-1">+23.8%</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            <span className="text-green-600 font-medium">+5.2pp</span>
                            <span className="text-muted-foreground">acceleration</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Avg. Transaction</p>
                          <p className="text-2xl font-bold mt-1">€652</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowDownRight className="h-3 w-3 text-muted-foreground" />
                            <span className="text-muted-foreground font-medium">-2.1%</span>
                            <span className="text-muted-foreground">vs last period</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="border-border/50">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-base">Transaction Volume Trend</CardTitle>
                              <CardDescription>Millions of transactions per month</CardDescription>
                            </div>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Updated: Dec 2024</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={instantPaymentVolumeData}>
                                <defs>
                                  <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `${v}M`} />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'hsl(var(--card))', 
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                  }}
                                  formatter={(value: number) => [`${value}M transactions`, 'Volume']}
                                />
                                <Area type="monotone" dataKey="volume" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#volumeGradient)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-base">Transaction Value Trend</CardTitle>
                              <CardDescription>Total value in EUR billions per month</CardDescription>
                            </div>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Updated: Dec 2024</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={instantPaymentVolumeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `€${v}B`} />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'hsl(var(--card))', 
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                  }}
                                  formatter={(value: number) => [`€${value}B`, 'Value']}
                                />
                                <Bar dataKey="value" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Weekly Pattern */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Weekly Transaction Pattern</CardTitle>
                        <CardDescription>Average daily volumes and values by day of week</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={instantPaymentDailyData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                              <XAxis dataKey="day" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                              <YAxis yAxisId="left" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `${v}M`} />
                              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `€${v}`} />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: 'hsl(var(--card))', 
                                  border: '1px solid hsl(var(--border))',
                                  borderRadius: '8px',
                                  fontSize: '12px'
                                }}
                              />
                              <Legend />
                              <Bar yAxisId="left" dataKey="volume" name="Volume (M)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                              <Line yAxisId="right" type="monotone" dataKey="avgValue" name="Avg Value (€)" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))' }} />
                            </ComposedChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Participant Breakdown Table */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-base">Breakdown by Participant Category</CardTitle>
                            <CardDescription>December 2024 - All instant payment participants</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-2 text-xs">
                            <Download className="h-3 w-3" />
                            CSV
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow className="hover:bg-transparent">
                                <TableHead className="text-xs font-medium">Participant Category</TableHead>
                                <TableHead className="text-xs font-medium text-right">Transactions</TableHead>
                                <TableHead className="text-xs font-medium text-right">Value (€M)</TableHead>
                                <TableHead className="text-xs font-medium text-right">Market Share</TableHead>
                                <TableHead className="text-xs font-medium text-right">YoY Change</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {participantBreakdownInstant.map((row, i) => (
                                <TableRow key={i}>
                                  <TableCell className="font-medium">{row.category}</TableCell>
                                  <TableCell className="text-right tabular-nums">{formatNumber(row.volume)}</TableCell>
                                  <TableCell className="text-right tabular-nums">{formatNumber(row.value)}</TableCell>
                                  <TableCell className="text-right tabular-nums">{row.share}%</TableCell>
                                  <TableCell className="text-right">
                                    <span className="inline-flex items-center gap-1 text-green-600">
                                      <ArrowUpRight className="h-3 w-3" />
                                      {row.change}%
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* RTGS Statistics */}
                <TabsContent value="rtgs">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold">RTGS Statistics</h2>
                        <p className="text-muted-foreground">
                          Large-value payment flows through the Real-Time Gross Settlement system
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2 w-fit">
                        <Download className="h-4 w-4" />
                        Export Data
                      </Button>
                    </div>

                    {/* Filters */}
                    <Card className="border-border/50">
                      <CardContent className="pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Date Range</label>
                            <Select value={rtgsPeriod} onValueChange={setRtgsPeriod}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1m">Last Month</SelectItem>
                                <SelectItem value="3m">Last 3 Months</SelectItem>
                                <SelectItem value="6m">Last 6 Months</SelectItem>
                                <SelectItem value="12m">Last 12 Months</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Transaction Type</label>
                            <Select value={rtgsType} onValueChange={setRtgsType}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="customer">Customer Payments</SelectItem>
                                <SelectItem value="interbank">Interbank</SelectItem>
                                <SelectItem value="ancillary">Ancillary Systems</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Participant Tier</label>
                            <Select defaultValue="all">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Tiers</SelectItem>
                                <SelectItem value="tier1">Tier 1 Banks</SelectItem>
                                <SelectItem value="tier2">Tier 2 Banks</SelectItem>
                                <SelectItem value="other">Other Participants</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Value Range</label>
                            <Select defaultValue="all">
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Values</SelectItem>
                                <SelectItem value="small">&lt; €1M</SelectItem>
                                <SelectItem value="medium">€1M - €50M</SelectItem>
                                <SelectItem value="large">&gt; €50M</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Daily Avg. Volume</p>
                          <p className="text-2xl font-bold mt-1">4,892</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            <span className="text-green-600 font-medium">+3.2%</span>
                            <span className="text-muted-foreground">vs last period</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Daily Avg. Value</p>
                          <p className="text-2xl font-bold mt-1">€965.4B</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            <span className="text-green-600 font-medium">+5.8%</span>
                            <span className="text-muted-foreground">vs last period</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Avg. Transaction</p>
                          <p className="text-2xl font-bold mt-1">€197.3M</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            <span className="text-green-600 font-medium">+2.5%</span>
                            <span className="text-muted-foreground">vs last period</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardContent className="pt-4">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">System Uptime</p>
                          <p className="text-2xl font-bold mt-1">99.98%</p>
                          <div className="flex items-center gap-1 mt-1 text-xs">
                            <span className="text-green-600 font-medium">Target: 99.9%</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="border-border/50">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-base">RTGS Transaction Volume</CardTitle>
                              <CardDescription>Number of transactions per month</CardDescription>
                            </div>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Updated: Dec 2024</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={rtgsVolumeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'hsl(var(--card))', 
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                  }}
                                  formatter={(value: number) => [formatNumber(value), 'Transactions']}
                                />
                                <Line type="monotone" dataKey="volume" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))', strokeWidth: 0, r: 3 }} />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-base">RTGS Transaction Value</CardTitle>
                              <CardDescription>Total value in EUR billions per month</CardDescription>
                            </div>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Updated: Dec 2024</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={rtgsVolumeData}>
                                <defs>
                                  <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `€${v}B`} />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'hsl(var(--card))', 
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                  }}
                                  formatter={(value: number) => [`€${value}B`, 'Value']}
                                />
                                <Area type="monotone" dataKey="value" stroke="hsl(var(--accent))" strokeWidth={2} fill="url(#valueGradient)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Intraday Distribution */}
                    <Card className="border-border/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Intraday Payment Distribution</CardTitle>
                        <CardDescription>Average hourly transaction volume and value during operating hours</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={rtgsIntradayData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                              <XAxis dataKey="hour" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                              <YAxis yAxisId="left" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `€${v}B`} />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: 'hsl(var(--card))', 
                                  border: '1px solid hsl(var(--border))',
                                  borderRadius: '8px',
                                  fontSize: '12px'
                                }}
                              />
                              <Legend />
                              <Bar yAxisId="left" dataKey="volume" name="Transactions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                              <Line yAxisId="right" type="monotone" dataKey="value" name="Value (€B)" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ fill: 'hsl(var(--accent))' }} />
                            </ComposedChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Participant Distribution */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <Card className="border-border/50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Market Share by Tier</CardTitle>
                          <CardDescription>Distribution of transaction value</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={rtgsParticipantBreakdown}
                                  dataKey="share"
                                  nameKey="category"
                                  cx="50%"
                                  cy="50%"
                                  outerRadius={80}
                                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                                  labelLine={false}
                                >
                                  {rtgsParticipantBreakdown.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                  ))}
                                </Pie>
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: 'hsl(var(--card))', 
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                  }}
                                  formatter={(value: number) => [`${value}%`, 'Share']}
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="mt-4 space-y-2">
                            {rtgsParticipantBreakdown.slice(0, 3).map((item, i) => (
                              <div key={i} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pieColors[i] }} />
                                  <span className="text-muted-foreground">{item.category}</span>
                                </div>
                                <span className="font-medium">{item.share}%</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50 lg:col-span-2">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-base">Participant Breakdown</CardTitle>
                              <CardDescription>December 2024 - RTGS participants</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-2 text-xs">
                              <Download className="h-3 w-3" />
                              CSV
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-x-auto">
                            <Table>
                              <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                  <TableHead className="text-xs font-medium">Category</TableHead>
                                  <TableHead className="text-xs font-medium text-right">Transactions</TableHead>
                                  <TableHead className="text-xs font-medium text-right">Value (€B)</TableHead>
                                  <TableHead className="text-xs font-medium text-right">Share</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {rtgsParticipantBreakdown.map((row, i) => (
                                  <TableRow key={i}>
                                    <TableCell className="font-medium">{row.category}</TableCell>
                                    <TableCell className="text-right tabular-nums">{formatNumber(row.transactions)}</TableCell>
                                    <TableCell className="text-right tabular-nums">{row.value.toFixed(1)}</TableCell>
                                    <TableCell className="text-right tabular-nums">{row.share}%</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* Participant Access */}
                <TabsContent value="access">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Participant Access</h2>
                      <p className="text-muted-foreground">
                        This area is intended for financial institutions and payment system participants. It serves as a gateway to additional tools, applications, and resources that support participation in payment systems.
                      </p>
                    </div>

                    <Card className="border-2 border-accent/20 bg-accent/5">
                      <CardContent className="py-12">
                        <div className="text-center max-w-xl mx-auto">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                            <ExternalLink className="h-8 w-8 text-accent" />
                          </div>
                          <h3 className="text-xl font-semibold mb-3">Participant Portal</h3>
                          <p className="text-muted-foreground mb-6">
                            Access configuration tools, reporting dashboards, technical documentation, and other resources for payment system participants.
                          </p>
                          <Button asChild size="lg" className="gap-2">
                            <a href="https://bian.cma.se/" target="_blank" rel="noopener noreferrer">
                              Go to Participant Portal
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle className="text-base">Configuration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Manage participant settings, routing configurations, and system parameters.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle className="text-base">Reporting</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Access detailed transaction reports, settlement statements, and reconciliation tools.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="border-border/50">
                        <CardHeader>
                          <CardTitle className="text-base">Documentation</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Technical specifications, API documentation, and integration guides.
                          </p>
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
