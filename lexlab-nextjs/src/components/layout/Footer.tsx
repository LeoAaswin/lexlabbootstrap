'use client'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <g clipPath="url(#clip0_1_603)">
            <mask id="mask0_1_603" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
              <path d="M0 7.62939e-06H60V60H0V7.62939e-06Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_603)">
              <path d="M34.1523 1.18332C47.759 1.18332 58.8285 12.2529 58.8285 25.8594" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M34.1523 8.2332C43.8708 8.2332 51.7785 16.141 51.7785 25.8594" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M34.1523 15.2845C39.9837 15.2845 44.7273 20.0281 44.7273 25.8594" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M34.1523 22.3344C36.0988 22.3344 37.6773 23.913 37.6773 25.8594" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.9629 38.0625C21.9629 38.7097 21.4382 39.2344 20.791 39.2344C20.1439 39.2344 19.6191 38.7097 19.6191 38.0625C19.6191 37.4154 20.1439 36.8906 20.791 36.8906C21.4382 36.8906 21.9629 37.4154 21.9629 38.0625Z" fill="#E8BF96" />
              <path d="M17.3666 34.0558C16.6232 33.0792 15.9186 32.0708 15.2551 31.0326C14.3833 29.6674 14.647 27.8592 15.7918 26.7143L19.7705 22.7357C20.627 21.8803 20.627 20.4917 19.7705 19.6361L10.4071 10.2729C9.55159 9.41615 8.16304 9.41615 7.30757 10.2729L4.93792 12.6423C1.09194 16.4874 0.0524892 22.356 2.46655 27.2287C6.76147 35.8994 15.5998 49.1908 32.6271 57.5404C37.515 59.9358 43.4107 58.9198 47.2591 55.0713L49.6826 52.6478C50.5391 51.7924 50.5391 50.4038 49.6826 49.547L40.3192 40.185C39.4637 39.3283 38.0751 39.3283 37.2197 40.185L33.2412 44.1635C32.0961 45.3083 30.288 45.572 28.9227 44.7003C27.4458 43.7563 26.0284 42.7289 24.6772 41.6241" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_603">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Phone:',
      content: '0-869-878-08-68'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30.1149 4.68753C29.4668 4.68284 28.9383 5.20433 28.9336 5.85121C28.9289 6.49808 29.4493 7.0266 30.0973 7.03129C30.7442 7.03597 31.2727 6.51566 31.2774 5.86878C31.2821 5.22191 30.7618 4.69339 30.1149 4.68753Z" fill="#E8BF96" />
          <path d="M30.0617 11.719C25.5369 11.6869 21.8313 15.3371 21.7971 19.8605C21.763 24.3836 25.4153 28.0909 29.9386 28.125C29.9596 28.1251 29.9804 28.1252 30.0014 28.1252C34.4959 28.1252 38.1692 24.4859 38.2032 19.9835C38.2373 15.4606 34.5851 11.7531 30.0617 11.719ZM30.0012 25.7816C29.9864 25.7816 29.971 25.7815 29.9562 25.7814C26.7252 25.757 24.1164 23.1088 24.1407 19.878C24.165 16.6618 26.7886 14.0624 29.9991 14.0624C30.0138 14.0624 30.0293 14.0625 30.0441 14.0626C33.2751 14.087 35.8839 16.7352 35.8595 19.9659C35.8351 23.1821 33.2117 25.7816 30.0012 25.7816Z" fill="#E8BF96" />
          <path d="M35.1126 5.57551C34.503 5.35918 33.8328 5.67851 33.6165 6.28859C33.4003 6.89867 33.7196 7.5684 34.3295 7.78473C39.4913 9.61415 42.9314 14.5303 42.8901 20.0178C42.8853 20.665 43.406 21.1936 44.0532 21.1985C44.0561 21.1985 44.0592 21.1985 44.0622 21.1985C44.7051 21.1985 45.2289 20.6796 45.2339 20.0354C45.2826 13.5494 41.2152 7.73844 35.1126 5.57551Z" fill="#E8BF96" />
          <path d="M37.1908 44.1144C44.9853 34.0814 49.8564 28.8495 49.9222 20.0717C50.0047 9.02756 41.0419 0 29.9986 0C19.0842 0 10.1618 8.83924 10.0788 19.7729C10.0118 28.7887 14.9734 34.0134 22.8217 44.1127C15.014 45.2795 10.0788 48.2112 10.0788 51.797C10.0788 54.199 12.299 56.3544 16.3306 57.8661C20.0001 59.2421 24.8549 60 30.0005 60C35.1461 60 40.0008 59.2421 43.6703 57.8661C47.7019 56.3543 49.9222 54.1989 49.9222 51.7969C49.9222 48.213 44.9915 45.282 37.1908 44.1144ZM12.4224 19.7905C12.4956 10.1426 20.3676 2.34375 29.9988 2.34375C39.744 2.34375 47.6512 10.3111 47.5785 20.0542C47.5162 28.3903 42.3503 33.5274 34.103 44.2786C32.6319 46.1953 31.281 48.0075 30.0022 49.7802C28.7272 48.0064 27.4032 46.2267 25.9102 44.2779C17.3219 33.0766 12.3589 28.3277 12.4224 19.7905ZM30.0005 57.6564C19.9398 57.6564 12.4224 54.563 12.4224 51.797C12.4224 49.7457 16.9163 47.1545 24.4724 46.2572C26.1427 48.4487 27.607 50.4397 29.0433 52.4731C29.2627 52.7837 29.6191 52.9686 29.9994 52.9689C29.9998 52.9689 30.0001 52.9689 30.0005 52.9689C30.3804 52.9689 30.7368 52.7846 30.9565 52.4747C32.3792 50.4677 33.8836 48.4276 35.5396 46.2584C43.0886 47.1567 47.5785 49.7471 47.5785 51.7971C47.5784 54.563 40.0612 57.6564 30.0005 57.6564Z" fill="#E8BF96" />
        </svg>
      ),
      title: 'Address:',
      content: '13 Division st, New York, 16004'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <mask id="mask0_1_641" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
            <path d="M0 7.62939e-06H60V60H0V7.62939e-06Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1_641)">
            <path d="M5.64258 57.4062L21.0052 42.0437" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M54.3562 57.4062L38.8164 41.8665" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.2733 58.8281H50.9168C53.6033 58.8281 55.7811 56.6503 55.7811 53.9638V26.7914C55.7811 25.5019 55.269 24.265 54.3574 23.3529L50.1468 19.1402" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.81574 19.1907L5.64445 23.3524C4.73156 24.2648 4.21875 25.5025 4.21875 26.7932V53.9637C4.21875 56.6502 6.39656 58.8281 9.08309 58.8281H24.7264" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.5137 7.5L32.197 1.17949C30.4921 1.17891 29.5362 1.17867 27.8314 1.17809L21.5059 7.49988" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M55.2956 25.2669L33.4549 47.1211C31.5558 49.0213 28.4759 49.0223 26.5757 47.1231L4.78711 25.3479" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.4184 29.5866H29.5541C26.8221 29.5866 24.6075 27.3719 24.6075 24.64C24.6075 21.9082 26.8221 19.6933 29.5541 19.6933C32.1205 19.6933 34.201 21.7738 34.201 24.3402V27.0528C34.201 28.6244 35.475 29.8985 37.0468 29.8985C38.6184 29.8985 39.8924 28.6244 39.8924 27.0528V24.6513C39.8924 19.1878 35.4634 14.7588 29.9999 14.7588C24.5364 14.7588 20.1074 19.1878 20.1074 24.6513C20.1074 30.1984 24.6043 34.6953 30.1514 34.6953H37.2739" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.84375 30.3828V11.0147C9.84375 9.07297 11.4177 7.49903 13.3594 7.49903H46.6406C48.5823 7.49903 50.1562 9.07297 50.1562 11.0147V29.999" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      ),
      title: 'Email:',
      content: 'info@lexlab.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <g clipPath="url(#clip0_1_667)">
            <mask id="mask0_1_667" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
              <path d="M0 7.62939e-06H60V60H0V7.62939e-06Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_667)">
              <path d="M53.9155 13.8938C61.4844 25.1053 60.3068 40.4626 50.3846 50.3847C39.1268 61.6426 20.8736 61.6426 9.61559 50.3847C-1.64237 39.1268 -1.64237 20.8735 9.61559 9.61556C19.6613 -0.429985 35.2778 -1.51221 46.5224 6.37146" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.0002 53.2617C17.1737 53.2617 6.73853 42.8265 6.73853 30C6.73853 17.1735 17.1737 6.73828 30.0002 6.73828C42.8269 6.73828 53.262 17.1735 53.262 30C53.262 42.8265 42.8269 53.2617 30.0002 53.2617Z" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.9299 30C32.9299 31.618 31.6184 32.9297 30.0002 32.9297C28.3822 32.9297 27.0706 31.618 27.0706 30C27.0706 28.382 28.3822 27.0703 30.0002 27.0703C31.6184 27.0703 32.9299 28.382 32.9299 30Z" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.0002 27.0703V17.5781" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.0725 32.0714L36.6302 36.6289" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.0002 11.4851V12.6719" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.7424 13.9643L21.3359 14.9922" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.967 20.7425L14.9949 21.3359" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.4846 30H12.6714" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.967 39.2578L14.9949 38.6645" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.7424 46.0352L21.3359 45.0073" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30.0002 48.5156V47.3289" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M39.2576 46.0352L38.6643 45.0073" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M46.034 39.2578L45.0061 38.6645" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48.5152 30H47.3284" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M46.034 20.7425L45.0061 21.3359" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M39.2576 13.9643L38.6643 14.9922" stroke="#E8BF96" strokeWidth="2.34375" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M51.3428 9.009C51.8001 9.46627 51.8001 10.2076 51.3428 10.6649C50.8857 11.1221 50.1441 11.1221 49.6869 10.6649C49.2297 10.2076 49.2297 9.46627 49.6869 9.009C50.1441 8.55174 50.8857 8.55174 51.3428 9.009Z" fill="#E8BF96" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_667">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: 'Working Hours:',
      content: 'Mon-Fri: 8am - 4pm'
    }
  ]

  const socialLinks = [
    { href: '#', icon: 'facebook' },
    { href: '#', icon: 'twitter' },
    { href: '#', icon: 'linkedin' },
    { href: '#', icon: 'instagram' },
  ]

  return (
    <footer className="bg-bg">
      <div className="divider"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          {/* Logo */}
          <div className="col-span-1 lg:col-span-4">
            <div className="text-center mb-14 animate-fade-in-up">
              <Link href="/" className="inline-block">
                <Image
                  src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop"
                  alt="LexLab"
                  width={100}
                  height={60}
                  className="h-auto max-w-[100px]"
                />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          {contactInfo.map((item, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white mb-0 font-semibold text-lg xl:text-xl">{item.title}</p>
                  <p className="mb-0 text-white text-sm xl:text-lg">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* Footer Line */}
      <div className="w-full h-px bg-white/20"></div>

      {/* Bottom Content */}
      <div className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="w-8 h-8 xl:w-10 xl:h-10 border border-white rounded-full flex items-center justify-center text-white text-sm xl:text-base hover:bg-primary hover:border-primary hover:text-heading transition-all duration-300"
                >
                  <span className="sr-only">{link.icon}</span>
                  {link.icon === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {link.icon === 'twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  )}
                  {link.icon === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {link.icon === 'instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.57 14.24c.613.515 1.407.824 2.272.824 1.96 0 3.554-1.594 3.554-3.555S10.802 7.955 8.842 7.955c-.865 0-1.659.309-2.272.824L5.121 7.328c.88-.807 2.031-1.297 3.328-1.297 2.616 0 4.738 2.122 4.738 4.738s-2.122 4.738-4.738 4.738z"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Footer Bottom Nav */}
            <div className="flex items-center">
              <Link
                href="#"
                className="text-white text-sm sm:text-base hover:text-primary transition-colors"
              >
                Privacy & Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer