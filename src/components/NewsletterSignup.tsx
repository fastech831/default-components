"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-medium text-green-800 mb-2">Thank you for subscribing!</h3>
          <p className="text-green-700 text-sm">
            Check your email for confirmation and updates.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="p-6 text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 opacity-80" />
        <h3 className="font-medium text-xl mb-2">Stay Updated</h3>
        <p className="opacity-90 mb-6">
          Subscribe to our newsletter for the latest updates and exclusive content.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-foreground"
            required
          />
          <Button 
            type="submit" 
            variant="secondary"
            className="whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}