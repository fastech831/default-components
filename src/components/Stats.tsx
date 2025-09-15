import { Card, CardContent } from "./ui/card";

interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  layout?: "grid" | "inline";
}

export function Stats({ 
  title, 
  subtitle, 
  stats, 
  layout = "grid" 
}: StatsProps) {
  const gridClass = layout === "grid" 
    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    : "flex flex-wrap justify-center gap-8";

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-medium mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        
        <div className={gridClass}>
          {stats.map((stat) => (
            <Card key={stat.id} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-medium text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-medium mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}