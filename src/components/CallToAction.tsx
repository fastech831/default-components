import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  showRating?: boolean;
  rating?: number;
  ratingText?: string;
}

export function CallToAction({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  showRating = false,
  rating = 5,
  ratingText = "Trusted by thousands"
}: CallToActionProps) {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {showRating && (
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-1 mr-2">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm opacity-90">{ratingText}</span>
          </div>
        )}
        
        <h2 className="text-3xl md:text-5xl font-medium mb-6">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8"
          >
            {primaryButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {secondaryButtonText && (
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}