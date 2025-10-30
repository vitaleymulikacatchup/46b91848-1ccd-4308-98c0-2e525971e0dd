"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BookOpen, Coffee, Mail, MessageSquare, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Coffee Experience"
          description="Discover our artisan-roasted coffee beans and signature drinks crafted by expert baristas in a warm, welcoming atmosphere."
          tag="Fresh Daily"
          tagIcon={Coffee}
          buttons={[
            {
              text: "View Menu",
              href: "products"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Coffee Story"
          description={[
            "We source the finest beans from sustainable farms around the world, roasting them to perfection in small batches.",
            "Our passion for coffee drives us to create exceptional experiences, one cup at a time."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Coffee Menu"
          description="Choose from our signature drinks and premium coffee selections"
          tag="Popular Choices"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Signature Espresso",
              price: "$4.50",
              imageSrc: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rich espresso shot"
            },
            {
              id: "2",
              name: "Artisan Latte",
              price: "$5.75",
              imageSrc: "https://images.pexels.com/photos/34435611/pexels-photo-34435611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Creamy latte with art"
            },
            {
              id: "3",
              name: "Classic Cappuccino",
              price: "$5.25",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Frothy cappuccino"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Why Choose Our Coffee"
          description="Discover what makes our coffee experience special"
          tag="Quality Promise"
          tagIcon={Award}
          features={[
            {
              title: "Freshly Roasted",
              description: "Our beans are roasted daily in small batches to ensure maximum flavor and freshness in every cup.",
              imageSrc: "https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh coffee beans roasting"
            },
            {
              title: "Expert Baristas",
              description: "Our skilled baristas are passionate about coffee and trained to create the perfect drink every time.",
              imageSrc: "https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional barista at work"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who visit us daily"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              company: "Downtown Office",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy customer Sarah"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Freelance Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Satisfied customer Mike"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Student",
              company: "Local University",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Regular customer Emily"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Software Engineer",
              company: "Tech Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee enthusiast David"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Coffee Partners"
          description="We work with premium suppliers and roasters worldwide"
          tag="Quality Sources"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/26954172/pexels-photo-26954172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/29324430/pexels-photo-29324430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820780/pexels-photo-4820780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1088120/pexels-photo-1088120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/762028/pexels-photo-762028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1435750/pexels-photo-1435750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Coffee Knowledge Hub"
          description="Learn more about coffee culture and brewing techniques"
          tag="Education"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              tags: ["Brewing", "Guide", "Tips"],
              title: "Perfect Brewing Methods",
              excerpt: "Master the art of coffee brewing with our comprehensive guide to different methods and techniques.",
              imageSrc: "https://images.pexels.com/photos/34492966/pexels-photo-34492966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee brewing equipment",
              authorName: "James Wilson",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              tags: ["Origins", "Quality", "Sourcing"],
              title: "Coffee Bean Origins",
              excerpt: "Explore the different coffee growing regions and how terroir affects the flavor profile of your cup.",
              imageSrc: "https://images.pexels.com/photos/32166341/pexels-photo-32166341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee beans varieties",
              authorName: "Maria Santos",
              date: "12 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join Our Coffee Community"
          description="Get updates on new blends, brewing tips, and special offers delivered to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our coffee updates and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Espresso", href: "products" },
                { label: "Lattes", href: "products" },
                { label: "Cappuccinos", href: "products" },
                { label: "Cold Brew", href: "products" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coffee Sources", href: "about" },
                { label: "Brewing Process", href: "about" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Brew & Bean Coffee Shop"
        />
      </div>
    </ThemeProvider>
  );
}