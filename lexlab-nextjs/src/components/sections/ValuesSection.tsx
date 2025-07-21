import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Divider from '@/components/ui/Divider'

interface Value {
  title: string
  description: string
  icon: string
}

interface ValuesSectionProps {
  title?: string
  subtitle?: string
  description?: string
  values?: Value[]
  className?: string
}

const defaultValues: Value[] = [
  {
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our professional dealings.',
    icon: '🤝'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every case, delivering superior legal representation.',
    icon: '⭐'
  },
  {
    title: 'Dedication',
    description: 'We are committed to our clients success and work tirelessly to achieve their goals.',
    icon: '💪'
  }
]

export default function ValuesSection({
  title = "What Drives Us",
  subtitle = "Our Values",
  description = "Our core values guide everything we do and ensure we provide the highest quality legal services to our clients.",
  values = defaultValues,
  className = ""
}: ValuesSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-secondary ${className}`}>
      <Divider />
      <Container>
        <div className="text-center mb-12">
          <SectionHeading
            title={title}
            subtitle={subtitle}
            description={description}
            alignment="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-heading mb-3">{value.title}</h3>
              <p className="text-text">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
      <Divider />
    </section>
  )
}