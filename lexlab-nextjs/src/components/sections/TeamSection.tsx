import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import TeamCard from '@/components/ui/TeamCard'
import Divider from '@/components/ui/Divider'

interface TeamMember {
  name: string
  position: string
  image: string
  bio?: string
  social?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

interface TeamSectionProps {
  title?: string
  subtitle?: string
  description?: string
  members?: TeamMember[]
  className?: string
}

const defaultMembers: TeamMember[] = [
  {
    name: 'Rebecca Edwards',
    position: 'Senior Partner',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Specializing in corporate law with over 15 years of experience.',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Shawn S. Kerendian',
    position: 'Associate Director',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Expert in family law and estate planning with a compassionate approach.',
    social: {
      linkedin: '#',
      facebook: '#'
    }
  },
  {
    name: 'Franklin Tavarez',
    position: 'Criminal Defense Attorney',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    bio: 'Dedicated criminal defense attorney with a strong track record.',
    social: {
      linkedin: '#',
      instagram: '#'
    }
  }
]

export default function TeamSection({
  title = "Meet Our Expert Team",
  subtitle = "Our Team",
  description = "Our experienced attorneys are dedicated to providing exceptional legal representation and personalized service to every client.",
  members = defaultMembers,
  className = ""
}: TeamSectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className}`}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              bio={member.bio}
              social={member.social}
            />
          ))}
        </div>
      </Container>
      <Divider />
    </section>
  )
}