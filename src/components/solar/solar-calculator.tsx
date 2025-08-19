"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Zap, TrendingUp, Calendar, IndianRupee, Home } from "lucide-react"
import { motion } from "motion/react"

const cities = [
  { name: "Hyderabad", state: "Telangana", tariff: 5.5 },
  { name: "Warangal", state: "Telangana", tariff: 5.5 },
  { name: "Karimnagar", state: "Telangana", tariff: 5.5 },
  { name: "Nizamabad", state: "Telangana", tariff: 5.5 },
  { name: "Khammam", state: "Telangana", tariff: 5.5 },
  { name: "Adilabad", state: "Telangana", tariff: 5.5 },
  { name: "Medak", state: "Telangana", tariff: 5.5 },
  { name: "Nalgonda", state: "Telangana", tariff: 5.5 },
  { name: "Mahbubnagar", state: "Telangana", tariff: 5.5 },
  { name: "Rangareddy", state: "Telangana", tariff: 5.5 },
  { name: "Vijayawada", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Visakhapatnam", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Kurnool", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Guntur", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Nellore", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Ongole", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Kadapa", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Anantapur", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Tirupati", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Rajahmundry", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Eluru", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Kakinada", state: "Andhra Pradesh", tariff: 5.8 },
  { name: "Vizianagaram", state: "Andhra Pradesh", tariff: 5.8 }
]

interface CalculationResults {
  monthlyUnits: number
  systemSize: number
  requiredRoofArea: number
  estimatedCost: number
  annualSavings: number
  paybackPeriod: number
}

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [results, setResults] = useState<CalculationResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateSavings = () => {
    if (!monthlyBill || !city) return

    setIsCalculating(true)

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const bill = parseFloat(monthlyBill)
      const selectedCity = cities.find(c => c.name === city)
      
      if (!selectedCity) return

      // Calculate monthly units using the formula: Monthly Units = Electricity bill/Tariff rate
      const monthlyUnits = Math.round(bill / selectedCity.tariff)
      
      // Calculate system size: Monthly Units/120 (each KW produces 120 units per month)
      const systemSize = Math.round((monthlyUnits / 120) * 10) / 10
      
      // Calculate required roof area: System size/80 (each KW requires 80 sq.ft area)
      const requiredRoofArea = Math.round((systemSize / 80) * 100) / 100
      
      // Calculate estimated cost: System size * 55000
      const estimatedCost = Math.round(systemSize * 55000)
      
      // Calculate annual savings: Monthly electricity bill * 12
      const annualSavings = Math.round(bill * 12)
      
      // Calculate payback period: Estimated cost/Annual Savings
      const paybackPeriod = Math.round((estimatedCost / annualSavings) * 10) / 10

      setResults({
        monthlyUnits: monthlyUnits,
        systemSize: systemSize,
        requiredRoofArea: requiredRoofArea,
        estimatedCost: estimatedCost,
        annualSavings: annualSavings,
        paybackPeriod: paybackPeriod
      })
      setIsCalculating(false)
    }, 1500)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <section className="bg-pure-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-48 font-bold text-neutral-black mb-4">
              Calculate Your Solar Savings
            </h2>
            <p className="text-18 text-neutral-gray max-w-2xl mx-auto">
              Get an instant estimate of your solar installation cost and savings potential using state-specific tariff rates
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-pure-white border-neutral-light p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-soft rounded-lg">
                      <Calculator className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-24 font-bold text-neutral-black">Input Details</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="monthly-bill" className="text-16 font-medium text-neutral-black mb-2 block">
                        Monthly Electricity Bill (₹)
                      </Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-gray" />
                        <Input
                          id="monthly-bill"
                          type="number"
                          placeholder="5000"
                          value={monthlyBill}
                          onChange={(e) => setMonthlyBill(e.target.value)}
                          className="pl-10 h-12 text-16 bg-pure-white border-neutral-light focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-16 font-medium text-neutral-black mb-2 block">
                        Your City
                      </Label>
                      <Select value={city} onValueChange={setCity}>
                        <SelectTrigger className="h-12 text-16 bg-pure-white border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-xl rounded-lg max-h-[300px] overflow-y-auto">
                          {cities.map((cityOption) => (
                            <SelectItem 
                              key={cityOption.name} 
                              value={cityOption.name} 
                              className="text-16 hover:bg-orange-soft/20 focus:bg-orange-soft/30 cursor-pointer transition-colors duration-150"
                            >
                              {cityOption.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      onClick={calculateSavings}
                      disabled={!monthlyBill || !city || isCalculating}
                      className="w-full h-12 text-16 font-medium bg-primary hover:bg-orange-light text-primary-foreground transition-colors"
                    >
                      {isCalculating ? (
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Calculator className="h-5 w-5" />
                          </motion.div>
                          Calculating...
                        </div>
                      ) : (
                        <>
                          <Calculator className="h-5 w-5 mr-2" />
                          Calculate Savings
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-orange-soft rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-24 font-bold text-neutral-black">Your Results</h3>
                  </div>

                  {results ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-orange-soft border-0 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-12 font-medium text-neutral-gray">Monthly Units</span>
                          </div>
                          <p className="text-20 font-bold text-neutral-black font-mono">
                            {results.monthlyUnits} units
                          </p>
                        </Card>

                        <Card className="bg-orange-soft border-0 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-12 font-medium text-neutral-gray">System Size</span>
                          </div>
                          <p className="text-20 font-bold text-neutral-black font-mono">
                            {results.systemSize} kW
                          </p>
                        </Card>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-orange-soft border-0 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Home className="h-4 w-4 text-primary" />
                            <span className="text-12 font-medium text-neutral-gray">Required Roof Area</span>
                          </div>
                          <p className="text-16 font-bold text-neutral-black font-mono">
                            {results.requiredRoofArea} sq ft
                          </p>
                        </Card>

                        <Card className="bg-orange-soft border-0 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <IndianRupee className="h-4 w-4 text-primary" />
                            <span className="text-12 font-medium text-neutral-gray">Estimated Cost</span>
                          </div>
                          <p className="text-16 font-bold text-neutral-black font-mono">
                            {formatCurrency(results.estimatedCost)}
                          </p>
                        </Card>
                      </div>

                      <Card className="bg-success-green/10 border-success-green/20 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-success-green" />
                          <span className="text-14 font-medium text-success-green">Annual Savings</span>
                        </div>
                        <p className="text-24 font-bold text-success-green font-mono">
                          {formatCurrency(results.annualSavings)}
                        </p>
                      </Card>

                      <Card className="bg-muted border-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-neutral-gray" />
                          <span className="text-12 font-medium text-neutral-gray">Payback Period</span>
                        </div>
                        <p className="text-18 font-bold text-neutral-black font-mono">
                          {results.paybackPeriod} years
                        </p>
                      </Card>

                      <Button className="w-full h-12 text-16 font-medium bg-primary hover:bg-orange-light text-primary-foreground mt-6">
                        Get Detailed Quote
                      </Button>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
                      <div className="text-center">
                        <Calculator className="h-12 w-12 text-neutral-gray mx-auto mb-4" />
                        <p className="text-16 text-neutral-gray">
                          Fill in your details to see your solar savings potential
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 pt-6 border-t border-neutral-light">
                <p className="text-14 text-neutral-gray text-center">
                  <strong>Disclaimer:</strong> These are estimated calculations based on average values. 
                  Actual savings may vary based on roof orientation, shading, local electricity rates, and system performance. 
                  Professional consultation and site assessment recommended for accurate projections.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}