import comoFunciona from "../../../data/comoFunciona.json";
import type { Etapas } from "../../../types/Etapas";

const steps: Etapas[] = comoFunciona as Etapas[];

export function ComoFunciona() {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Como funciona?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Implementação rápida e sem complicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative ${
                index !== steps.length - 1
                  ? "lg:border-r lg:border-gray-300"
                  : ""
              }`}
            >
              <div className="text-6xl font-bold text-primary/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
