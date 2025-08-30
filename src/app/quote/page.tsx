"use client";
import { useState } from "react";
import { ArrowLeft, MapPin, Phone, User, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh",
  "Andaman and Nicobar Islands", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep"
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: '',
    roofType: '',
    monthlyBill: '',
    systemSize: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the data - later this will connect to backend
    console.log('Quote Request:', formData);
    alert('Thank you! Your quote request has been submitted. Our solar experts will contact you within 24 hours.');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-soft via-white to-orange-soft/50">

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-black mb-4">
              Let's Design Your
              <span className="text-primary"> Perfect Solar System</span>
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Fill out this form and our certified solar consultants will provide you with a detailed,
              customized quote for your home or business. No obligation, completely free!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Personal Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-black">Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-neutral-gray font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-neutral-gray font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-neutral-gray font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-neutral-gray font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-black">Property Address</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="address" className="text-neutral-gray font-medium">
                    House/Flat Number & Building Name *
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="e.g., A-101, Sunshine Apartments"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="street" className="text-neutral-gray font-medium">
                    Street/Locality/Area *
                  </Label>
                  <Input
                    id="street"
                    type="text"
                    placeholder="e.g., MG Road, Bandra West"
                    value={formData.street}
                    onChange={(e) => handleInputChange('street', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-neutral-gray font-medium">
                    City *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="e.g., Mumbai"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="state" className="text-neutral-gray font-medium">
                    State *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('state', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="zipCode" className="text-neutral-gray font-medium">
                    PIN Code *
                  </Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="e.g., 400001"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-black">Property Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="propertyType" className="text-neutral-gray font-medium">
                    Property Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential House</SelectItem>
                      <SelectItem value="apartment">Apartment/Flat</SelectItem>
                      <SelectItem value="commercial">Commercial Building</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="roofType" className="text-neutral-gray font-medium">
                    Roof Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('roofType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select roof type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concrete">Concrete/Cement</SelectItem>
                      <SelectItem value="tiles">Tiles</SelectItem>
                      <SelectItem value="metal">Metal Sheets</SelectItem>
                      <SelectItem value="asbestos">Asbestos</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="monthlyBill" className="text-neutral-gray font-medium">
                    Current Monthly Electricity Bill (₹)
                  </Label>
                  <Input
                    id="monthlyBill"
                    type="number"
                    placeholder="e.g., 5000"
                    value={formData.monthlyBill}
                    onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="systemSize" className="text-neutral-gray font-medium">
                    Preferred Solar System Size (kW)
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('systemSize', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select system size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 kW (Small homes)</SelectItem>
                      <SelectItem value="3-5">3-5 kW (Medium homes)</SelectItem>
                      <SelectItem value="5-10">5-10 kW (Large homes)</SelectItem>
                      <SelectItem value="10+">10+ kW (Commercial)</SelectItem>
                      <SelectItem value="not-sure">Not sure, need expert advice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-black">Additional Information</h3>
              </div>

              <div>
                <Label htmlFor="additionalInfo" className="text-neutral-gray font-medium">
                  Tell us more about your requirements (Optional)
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any specific requirements, concerns, or questions you have about solar installation..."
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-orange-light text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get My Free Quote
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
              <p className="text-sm text-neutral-gray mt-4">
                By submitting this form, you agree to receive a call from our solar experts.
                Your information is secure and will not be shared with third parties.
              </p>
            </div>
          </form>

          {/* Benefits Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-neutral-black text-center mb-8">
              Why Choose Viron Solar?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="text-xl font-semibold text-neutral-black mb-2">Zero Down Payment</h4>
                <p className="text-neutral-gray">Start your solar journey with no upfront costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-neutral-black mb-2">25 Year Warranty</h4>
                <p className="text-neutral-gray">Industry-leading warranty on panels and inverters</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="text-xl font-semibold text-neutral-black mb-2">Expert Installation</h4>
                <p className="text-neutral-gray">Certified technicians with 5+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
