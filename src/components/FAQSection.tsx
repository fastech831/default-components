import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions below",
  items 
}: FAQSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}