"use client";

import { useState } from "react";
import { ArrowLeft, MapPin, Phone, User, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    propertyType: '',
    monthlyBill: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your quote request has been submitted successfully. Our solar experts will contact you within 24 hours.');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          zipCode: '',
          propertyType: '',
          monthlyBill: '',
          additionalInfo: ''
        });
      } else {
        setSubmitError(data.error || 'Failed to submit your request. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
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
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Information */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-black">Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="name" className="text-neutral-gray font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
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

                <div>
                  <Label htmlFor="email" className="text-neutral-gray font-medium">
                    Email Address (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2"
                  />
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

                <div>
                  <Label htmlFor="monthlyBill" className="text-neutral-gray font-medium">
                    Current Monthly Electricity Bill (₹) *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('monthlyBill', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your monthly bill range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-1500">Less than ₹1500</SelectItem>
                      <SelectItem value="1500-2500">₹1500 - ₹2500</SelectItem>
                      <SelectItem value="2500-4000">₹2500 - ₹4000</SelectItem>
                      <SelectItem value="4000-8000">₹4000 - ₹8000</SelectItem>
                      <SelectItem value="more-8000">More than ₹8000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="propertyType" className="text-neutral-gray font-medium">
                    Property Type (Optional)
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

                <div className="md:col-span-2">
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
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-primary hover:bg-orange-light text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get My Free Quote
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                  </>
                )}
              </Button>

              {/* Success/Error Messages */}
              {submitMessage && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">{submitMessage}</p>
                </div>
              )}

              {submitError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{submitError}</p>
                </div>
              )}

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
