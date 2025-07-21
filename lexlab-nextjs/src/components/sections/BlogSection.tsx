import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import BlogCard from '@/components/ui/BlogCard'
import Divider from '@/components/ui/Divider'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  href: string
}

interface BlogSectionProps {
  title?: string
  subtitle?: string
  description?: string
  posts?: BlogPost[]
  className?: string
}

const defaultPosts: BlogPost[] = [
  {
    title: 'A Guide to Practicing Law in Multiple States',
    excerpt: 'Understanding the complexities of multi-state legal practice and how to navigate different jurisdictions effectively.',
    date: 'June 26, 2024',
    category: 'Legal Knowledge',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    href: '/blog/practicing-law-multiple-states'
  },
  {
    title: 'How to Successfully Organize Your Legal Files',
    excerpt: 'Best practices for maintaining organized legal documentation and case management systems.',
    date: 'June 24, 2024',
    category: 'Practice Management',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    href: '/blog/organize-legal-files'
  },
  {
    title: 'Modern Offices in The Best District in Town',
    excerpt: 'Exploring the benefits of strategic office location for law firms and client accessibility.',
    date: 'June 22, 2024',
    category: 'Business',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    href: '/blog/modern-law-offices'
  }
]

export default function BlogSection({
  title = "Latest News & Articles",
  subtitle = "Our Blog",
  description = "Stay updated with the latest legal insights, case studies, and industry news from our expert team.",
  posts = defaultPosts,
  className = ""
}: BlogSectionProps) {
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
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              image={post.image}
              href={post.href}
            />
          ))}
        </div>
      </Container>
      <Divider />
    </section>
  )
}