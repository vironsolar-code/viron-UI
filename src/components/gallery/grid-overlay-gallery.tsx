"use client";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  link: string;
}

// Solar blog posts data
const BLOG_POSTS: Array<BlogPost> = [
  {
    id: "1",
    title: "India's New Solar Policy: What Homeowners Need to Know",
    excerpt: "Understanding the latest government incentives and subsidies for residential solar installations in 2024.",
    category: "Policy Updates",
    readTime: "5 min read",
    publishDate: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/india-solar-policy-2024"
  },
  {
    id: "2", 
    title: "Essential Solar Panel Maintenance Tips for Maximum Efficiency",
    excerpt: "Simple maintenance practices to keep your solar panels performing at their best throughout the year.",
    category: "Maintenance",
    readTime: "4 min read",
    publishDate: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/solar-maintenance-tips"
  },
  {
    id: "3",
    title: "Solar Financing Options: Making Clean Energy Affordable",
    excerpt: "Explore various financing solutions including loans, leasing, and PPAs to make solar accessible for every budget.",
    category: "Financing",
    readTime: "6 min read", 
    publishDate: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/solar-financing-options"
  },
  {
    id: "4",
    title: "Latest Solar Technology Advances: Efficiency Breakthroughs",
    excerpt: "Discover the cutting-edge solar panel technologies that are revolutionizing energy generation efficiency.",
    category: "Technology",
    readTime: "7 min read",
    publishDate: "March 8, 2024", 
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/solar-technology-advances"
  },
  {
    id: "5",
    title: "Monsoon Season Solar Performance: What to Expect",
    excerpt: "How weather patterns affect solar energy generation and tips to optimize performance during different seasons.",
    category: "Performance",
    readTime: "5 min read",
    publishDate: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1000&auto=format&fit=crop", 
    link: "/blog/seasonal-solar-performance"
  },
  {
    id: "6",
    title: "Customer Success: The Sharma Family's Solar Journey",
    excerpt: "How a Mumbai family reduced their electricity bills by 90% with solar and achieved energy independence.",
    category: "Success Stories",
    readTime: "8 min read",
    publishDate: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "/blog/sharma-family-success-story"
  }
];

const BlogCard = ({ title, excerpt, category, readTime, publishDate, image, link }: BlogPost) => {
  return (
    <article className="group bg-white rounded-lg shadow-sm border border-neutral-light overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-orange-light/30">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground">
            {category}
          </span>
          <div className="flex items-center gap-4 text-sm text-neutral-gray">
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              {readTime}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-black mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-neutral-gray mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-neutral-gray">
            <Calendar className="size-4" />
            {publishDate}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary hover:text-orange-light hover:bg-orange-soft p-0 h-auto font-medium"
            asChild
          >
            <a href={link}>
              Read More
              <ArrowRight className="size-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

const GridOverlayGallery = () => {
  return (
    <section id="about" className="py-32 bg-pure-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-48 font-bold text-neutral-black mb-4">
            Solar Insights & Updates
          </h2>
          <p className="text-18 text-neutral-gray max-w-2xl mx-auto">
            Stay informed with the latest solar energy news, tips, and success stories from across India
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={`blog-post-${post.id}`} {...post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-orange-light text-primary-foreground">
            View All Articles
            <ArrowRight className="size-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { GridOverlayGallery };