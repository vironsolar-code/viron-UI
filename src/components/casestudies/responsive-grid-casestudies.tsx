const ResponsiveGridCasestudies = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-48 font-bold text-neutral-black mb-4">Our Projects</h2>
          <p className="text-18 text-neutral-gray max-w-2xl mx-auto">
            Discover how we've helped homeowners and businesses across India reduce their electricity bills with our solar installations
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl gap-6 lg:max-w-5xl lg:grid-cols-2">
          <a
            href="#"
            className="group relative row-span-2 flex aspect-square h-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md lg:aspect-auto lg:p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Residential solar installation on rooftop"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 rounded-2xl"></div>
            
            <div className="isolate">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                <span className="text-14 font-semibold text-neutral-black">Mumbai, Maharashtra</span>
              </div>
            </div>
            
            <div className="isolate space-y-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-14 font-medium text-neutral-black">System Size:</span>
                  <span className="text-14 font-bold text-primary">5.5 kW</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-14 font-medium text-neutral-black">Monthly Savings:</span>
                  <span className="text-14 font-bold text-success-green">₹3,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-14 font-medium text-neutral-black">Timeline:</span>
                  <span className="text-14 font-bold text-neutral-black">3 days</span>
                </div>
              </div>
              <blockquote className="text-16 font-normal text-white italic bg-black/20 backdrop-blur-sm rounded-lg p-3">
                "Our electricity bill dropped by 80%. Viron Solar made the entire process seamless!"
              </blockquote>
            </div>
          </a>
          
          <a
            href="#"
            className="group relative flex aspect-3/2 h-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md md:aspect-2/1 lg:p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Commercial solar installation on office building"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 rounded-2xl"></div>
            
            <div className="isolate">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                <span className="text-14 font-semibold text-neutral-black">Pune, Maharashtra</span>
              </div>
            </div>
            
            <div className="isolate space-y-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-12 text-neutral-gray block">System Size</span>
                  <span className="text-16 font-bold text-primary">25 kW</span>
                </div>
                <div>
                  <span className="text-12 text-neutral-gray block">Monthly Savings</span>
                  <span className="text-16 font-bold text-success-green">₹18,500</span>
                </div>
              </div>
              <blockquote className="text-14 font-normal text-white italic bg-black/20 backdrop-blur-sm rounded-lg p-3">
                "45% reduction in operational costs. ROI achieved in just 3.5 years!"
              </blockquote>
            </div>
          </a>
          
          <a
            href="#"
            className="group relative flex aspect-3/2 h-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md md:aspect-2/1 lg:p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Apartment complex solar installation"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 rounded-2xl"></div>
            
            <div className="isolate">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                <span className="text-14 font-semibold text-neutral-black">Bangalore, Karnataka</span>
              </div>
            </div>
            
            <div className="isolate space-y-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-12 text-neutral-gray block">System Size</span>
                  <span className="text-16 font-bold text-primary">15 kW</span>
                </div>
                <div>
                  <span className="text-12 text-neutral-gray block">Monthly Savings</span>
                  <span className="text-16 font-bold text-success-green">₹12,000</span>
                </div>
              </div>
              <blockquote className="text-14 font-normal text-white italic bg-black/20 backdrop-blur-sm rounded-lg p-3">
                "Common area electricity is now free for all 24 families. Excellent work!"
              </blockquote>
            </div>
          </a>
          
          <a
            href="#"
            className="group relative flex aspect-3/2 h-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md md:aspect-2/1 lg:p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Villa rooftop solar panel installation"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 rounded-2xl"></div>
            
            <div className="isolate">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                <span className="text-14 font-semibold text-neutral-black">Delhi NCR</span>
              </div>
            </div>
            
            <div className="isolate space-y-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-12 text-neutral-gray block">System Size</span>
                  <span className="text-16 font-bold text-primary">8 kW</span>
                </div>
                <div>
                  <span className="text-12 text-neutral-gray block">Monthly Savings</span>
                  <span className="text-16 font-bold text-success-green">₹5,800</span>
                </div>
              </div>
              <blockquote className="text-14 font-normal text-white italic bg-black/20 backdrop-blur-sm rounded-lg p-3">
                "Installation completed in 2 days. Professional team and quality equipment!"
              </blockquote>
            </div>
          </a>
          
          <a
            href="#"
            className="group relative row-span-2 flex aspect-square h-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md lg:aspect-auto lg:p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Industrial warehouse solar installation"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 rounded-2xl"></div>
            
            <div className="isolate">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                <span className="text-14 font-semibold text-neutral-black">Chennai, Tamil Nadu</span>
              </div>
            </div>
            
            <div className="isolate space-y-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-14 font-medium text-neutral-black">System Size:</span>
                  <span className="text-14 font-bold text-primary">50 kW</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-14 font-medium text-neutral-black">Monthly Savings:</span>
                  <span className="text-14 font-bold text-success-green">₹35,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-14 font-medium text-neutral-black">Timeline:</span>
                  <span className="text-14 font-bold text-neutral-black">7 days</span>
                </div>
              </div>
              <blockquote className="text-16 font-normal text-white italic bg-black/20 backdrop-blur-sm rounded-lg p-3">
                "Manufacturing facility now runs 60% on solar power. Incredible savings on operations!"
              </blockquote>
            </div>
          </a>
          
          <a
            href="#"
            className="group relative flex aspect-3/2 h-full flex-col justify-between overflow-hidden rounded-2xl p-4 shadow-md md:aspect-2/1 lg:p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Residential bungalow solar installation"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 rounded-2xl"></div>
            
            <div className="isolate">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                <span className="text-14 font-semibold text-neutral-black">Hyderabad, Telangana</span>
              </div>
            </div>
            
            <div className="isolate space-y-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-12 text-neutral-gray block">System Size</span>
                  <span className="text-16 font-bold text-primary">10 kW</span>
                </div>
                <div>
                  <span className="text-12 text-neutral-gray block">Monthly Savings</span>
                  <span className="text-16 font-bold text-success-green">₹7,500</span>
                </div>
              </div>
              <blockquote className="text-14 font-normal text-white italic bg-black/20 backdrop-blur-sm rounded-lg p-3">
                "Zero electricity bills for 8 months now. Best investment we've made!"
              </blockquote>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { ResponsiveGridCasestudies };