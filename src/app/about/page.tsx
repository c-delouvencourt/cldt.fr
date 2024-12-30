import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {GitHubIcon, InstagramIcon, LinkedInIcon, XIcon,} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({
                      className,
                      href,
                      children,
                      icon: Icon,
                    }: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
      <li className={clsx(className, 'flex')}>
        <Link
            href={href}
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
          <span className="ml-4">{children}</span>
        </Link>
      </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            fillRule="evenodd"
            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
      'I’m Clément de Louvencourt. I live in Paris, where I design the future.',
}

export default function About() {
  return (
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I’m Clément de Louvencourt. I live in the South of France (sometimes in Paris), where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, and wrote
                my first program when I was 12 years old. It was a simple website
                that I made on my parent’s old computer, and I remember the feeling
                of accomplishment I had when I saw it run for the first time.
              </p>
              <p>
                I run a lot, and I’m always looking for new ways to improve my
                time. Im preparing for my first marathon in 2025, and I’m excited
                to see how far I can push myself. I’m also a big fan of
                outdoors activities and love to go hiking whenever I can.
              </p>
              <p>
                I'm passionate about music also, I compose music. The music is an
                exit for me, I can express my feelings and my emotions.
              </p>
              <p>
                Today, I’m the CTO of MeilleursBiens, where we’re working on
                a SaaS about a new way to help real estate pros save time and
                money in their business. I’m also a founder of CLDT Consulting,
                where I help companies to build their digital products.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.linkedin.com/in/c-delouvencourt/" icon={LinkedInIcon}>
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://github.com/c-delouvencourt" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.instagram.com/clementdlc/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink
                  href="mailto:contact@cldt.fr"
                  icon={MailIcon}
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@cldt.fr
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
  )
}
