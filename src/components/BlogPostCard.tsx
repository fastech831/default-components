import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export function BlogPostCard({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image 
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      {image && (
        <div className="aspect-video overflow-hidden">
          <ImageWithFallback 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
        <h3 className="font-medium line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}