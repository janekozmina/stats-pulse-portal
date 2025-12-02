import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  variant?: "default" | "compact";
}

const Hero = ({ title, subtitle, primaryCta, secondaryCta, variant = "default" }: HeroProps) => {
  const heightClass = variant === "compact" ? "py-16 md:py-24" : "py-24 md:py-32";
  
  return (
    <div className={`bg-gradient-to-br from-primary to-primary/90 text-primary-foreground ${heightClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <Link to={primaryCta.to}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button asChild size="lg" variant="outline" className="font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
