/**
 * Grid de estadísticas para la página About
 */
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes satisfechos" },
  { value: "1000+", label: "Proyectos completados" },
];

export function StatsGrid() {
  return (
    <div className="mb-12 grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-primary">
              {stat.value}
            </CardTitle>
            <CardDescription className="text-base">{stat.label}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

