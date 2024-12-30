import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({
                        children,
                        ...props
                      }: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
      <Section {...props}>
        <ul role="list" className="space-y-16">
          {children}
        </ul>
      </Section>
  )
}

function Tool({
                title,
                href,
                children,
              }: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
      <Card as="li">
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
        <Card.Description>{children}</Card.Description>
      </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
      <SimpleLayout
          title="Software I use, gadgets I love, and other things I recommend."
          intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M4 Pro, 24GB RAM">
              I was using an M4 Pro 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it through
              with our various launch simulations.
            </Tool>
            <Tool title="Xiaomi Curved Pro Display 34”">
              I’ve had this monitor for a few years now and it’s still the best
              monitor I’ve ever used. I love the curve and the extra real estate
              for having multiple windows open side by side.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              I’ve tried a bunch of mechanical keyboards but I always come back to
              the Magic Keyboard. I love the low profile and the feel of the keys.
            </Tool>
            <Tool title="Apple Magic Mouse">
              I know everyone hates this mouse but I love it. I’ve tried a bunch of
              other mice and I always come back to this one.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="JetBrains Suite">
              I’ve been using JetBrains products for years and I still think
              they’re the best IDEs out there.
            </Tool>
            <Tool title="Termius">
              I’ve tried a bunch of different terminal emulators but I always come
              back to Termius. I love the simplicity and the cross-platform
              syncing.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become our
              virtual whiteboard for the entire company. Never would have expected
              the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Slack">
              Slack is the hub of our company. We have a bunch of different
              channels for different teams and projects and it’s the first thing I
              check in the morning.
            </Tool>
            <Tool title="Notion">
              We use Notion for all of our internal documentation and it’s been a
              game-changer for us. It’s so easy to keep everything up to date and
              organized.

              I'm using Notion for my personal notes and tasks. I love the
                simplicity and the cross-platform syncing.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
  )
}
