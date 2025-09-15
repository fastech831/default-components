import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Circle } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status?: "completed" | "current" | "upcoming";
  badge?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-2xl font-medium">{title}</h3>
      )}
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-8">
          {items.map((item, index) => {
            const isCompleted = item.status === "completed";
            const isCurrent = item.status === "current";
            
            return (
              <div key={item.id} className="relative flex items-start space-x-4">
                {/* Timeline dot */}
                <div className="relative z-10 mt-1">
                  {isCompleted ? (
                    <CheckCircle className="h-8 w-8 text-green-500 bg-background" />
                  ) : isCurrent ? (
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                      <Circle className="h-4 w-4 text-primary-foreground fill-current" />
                    </div>
                  ) : (
                    <Circle className="h-8 w-8 text-muted-foreground bg-background" />
                  )}
                </div>
                
                {/* Content */}
                <Card className={`flex-1 ${isCurrent ? 'border-primary' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{item.title}</h4>
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <Badge variant={isCurrent ? "default" : "secondary"}>
                            {item.badge}
                          </Badge>
                        )}
                        <span className="text-sm text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}