import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80";

const HeroSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollTo = (id: string) => {
    const behavior: ScrollBehavior =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
    document.querySelector(id)?.scrollIntoView({ behavior });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-[20vh] px-4 overflow-hidden"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        aria-hidden
      />
      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90"
        aria-hidden
      />
      <div className="container relative z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          className="text-sm uppercase tracking-[0.2em] text-accent mb-4"
        >
          Expert Real Estate Services
        </motion.p>
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.05 }
          }
          className="text-xs text-muted-foreground mb-6"
        >
          Licensed Realtor • Greater Sudbury Area
        </motion.p>
        <motion.h1
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }
          }
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-8"
        >
          <span className="font-semibold">Selling Sudbury</span>
          <br />
          Guiding You Home with Integrity and Expertise
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.3 }
          }
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Tristan Ritchie — Your trusted partner for buying and selling homes in
          Greater Sudbury with precision, care, and unwavering dedication.
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.45 }
          }
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="rounded-md bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Schedule a consultation
          </Button>
        </motion.div>
      </div>
      {/* Scroll to explore */}
      <motion.button
        type="button"
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.7 }
        }
        onClick={() => scrollTo("#properties")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
        aria-label="Scroll to explore"
      >
        <span className="text-xs tracking-wider uppercase">Scroll to explore</span>
        <ChevronDown
          className={prefersReducedMotion ? "h-5 w-5" : "h-5 w-5 animate-bounce"}
          aria-hidden
        />
      </motion.button>
    </section>
  );
};

export default HeroSection;
