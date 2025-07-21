import Container from '@/components/ui/Container'
import Divider from '@/components/ui/Divider'

interface Stat {
  number: string
  label: string
  description?: string
}

interface StatsSectionProps {
  stats?: Stat[]
  className?: string
}

const defaultStats: Stat[] = [
  {
    number: "500+",
    label: "Cases Won",
    description: "Successfully resolved legal cases"
  },
  {
    number: "25+",
    label: "Years Experience",
    description: "Combined team experience"
  },
  {
    number: "1000+",
    label: "Happy Clients",
    description: "Satisfied clients served"
  },
  {
    number: "50+",
    label: "Expert Lawyers",
    description: "Professional legal team"
  }
]

export default function StatsSection({
  stats = defaultStats,
  className = ""
}: StatsSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-primary ${className}`}>
      <Divider />
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-6xl font-serif text-heading mb-2 font-bold">
                {stat.number}
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-heading mb-2">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-heading/80 text-sm lg:text-base">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
      <Divider />
    </section>
  )
}