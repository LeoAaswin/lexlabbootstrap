import Breadcrumb from '@/components/sections/Breadcrumb'
import BlogSection from '@/components/sections/BlogSection'
import CTASection from '@/components/sections/CTASection'

export default function BlogPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog' }
  ]

  const blogPosts = [
    {
      title: 'A Guide to Practicing Law in Multiple States',
      excerpt: 'Understanding the complexities of multi-state legal practice and how to navigate different jurisdictions effectively for better client service.',
      date: 'June 26, 2024',
      category: 'Legal Knowledge',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/practicing-law-multiple-states'
    },
    {
      title: 'How to Successfully Organize Your Legal Files',
      excerpt: 'Best practices for maintaining organized legal documentation and case management systems to improve efficiency and client service.',
      date: 'June 24, 2024',
      category: 'Practice Management',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/organize-legal-files'
    },
    {
      title: 'Modern Offices in The Best District in Town',
      excerpt: 'Exploring the benefits of strategic office location for law firms and how it impacts client accessibility and business growth.',
      date: 'June 22, 2024',
      category: 'Business',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/modern-law-offices'
    },
    {
      title: 'Quick Solutions for Worst Legal Problems',
      excerpt: 'Effective strategies for handling complex legal challenges and providing swift resolution for urgent client matters.',
      date: 'June 20, 2024',
      category: 'Legal Solutions',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/quick-legal-solutions'
    },
    {
      title: 'Variety of Different Cases & Best Solutions',
      excerpt: 'Comprehensive overview of various legal case types and the most effective approaches to achieve successful outcomes.',
      date: 'June 18, 2024',
      category: 'Case Studies',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/case-variety-solutions'
    },
    {
      title: 'What Can Paralegals Do: A Guide for Lawyers',
      excerpt: 'Understanding the role of paralegals in modern law practice and how to effectively utilize their skills for better client service.',
      date: 'June 16, 2024',
      category: 'Legal Team',
      image: 'https://images.pexels.com/photos/5669688/pexels-photo-5669688.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/paralegal-guide'
    },
    {
      title: 'Flexible Working Hours for Every Employee',
      excerpt: 'Implementing flexible work arrangements in law firms to improve work-life balance and increase productivity.',
      date: 'June 14, 2024',
      category: 'Workplace',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/flexible-working-hours'
    },
    {
      title: 'How to Become a Legal Project Manager',
      excerpt: 'Career guidance for legal professionals interested in project management roles and the skills required for success.',
      date: 'June 12, 2024',
      category: 'Career Development',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/legal-project-manager'
    },
    {
      title: 'Essential Types of Business Law Firm',
      excerpt: 'Overview of different business law specializations and how to choose the right legal representation for your company.',
      date: 'June 10, 2024',
      category: 'Business Law',
      image: 'https://images.pexels.com/photos/5669688/pexels-photo-5669688.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      href: '/blog/business-law-types'
    }
  ]

  return (
    <>
      <Breadcrumb
        title="News & Articles"
        items={breadcrumbItems}
      />
      
      <BlogSection
        title="Latest Legal Insights"
        subtitle="Our Blog"
        description="Stay informed with the latest legal news, case studies, and expert insights from our experienced legal team."
        posts={blogPosts}
      />

      <CTASection />
    </>
  )
}