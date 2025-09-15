import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export function TeamMemberCard({ 
  name, 
  role, 
  bio, 
  avatar, 
  linkedin, 
  twitter, 
  email 
}: TeamMemberCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <Avatar className="h-20 w-20 mx-auto mb-4">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-primary mb-3">{role}</p>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        <div className="flex justify-center space-x-2">
          {linkedin && (
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4" />
            </Button>
          )}
          {twitter && (
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
          )}
          {email && (
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}