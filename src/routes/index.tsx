import { createFileRoute } from '@tanstack/react-router'
import appStoreBadge from '@/images/app-store.svg'
import app from '@/images/app.png'
import {
  Shield,
  Waves,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const features = [
    {
      icon: <Sparkles className="w-10 h-10 text-pink-400" />,
      title: 'Send doodles to friends',
      description:
        'Draw a quick doodle and send it to anyone in your contacts. Doodles gently disappear after a few days.',
    },
    {
      icon: <Waves className="w-10 h-10 text-sky-400" />,
      title: 'Live on your Home Screen',
      description:
        'Add a Mood widget and always see the latest doodle from your favorite people right on your Home Screen.',
    },
    {
      icon: <Shield className="w-10 h-10 text-emerald-400" />,
      title: 'Private by design',
      description:
        'Doodles are shared only between you and your friends. You can delete them any time from the app.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#ffda31] text-[#2f2e29]">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6b6650] mb-4">
              MOOD · FRIENDS · DOODLES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Doodle on your
              <br />
               friends' home screens
            </h1>
            <p className="text-lg md:text-xl text-[#6b6650] mb-6 max-w-xl">
              Mood is a small iOS app for sending quick hand-drawn doodles to the people you care about. They show up in widgets on their Home Screen, so your friends feel you there, even on busy days.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://testflight.apple.com/join/W6erFjfp"
                target="_blank"
                rel="noreferrer"
                className="inline-block transition-transform hover:-translate-y-0.5 drop-shadow-lg"
              >
                <img
                  src={appStoreBadge}
                  alt="Download Mood on the App Store via TestFlight"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <img
                  src={app}
                  alt="Mood App"
                  className="h-full w-auto"
                />
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-16 px-6 max-w-6xl mx-auto border-t border-[#2f2e29]/10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
          A tiny routine that keeps you close
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 border border-[#2f2e29]/10 rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="mb-1">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
               <p className="text-sm text-[#6b6650] leading-relaxed">

                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto border-t border-[#2f2e29]/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Built for real-life friendships</h3>
            <p className="text-[#6b6650] text-sm max-w-xl">
              Mood is intentionally simple. No feeds, no follower counts, just
              a tiny space for you and the few people who matter most.
            </p>
          </div>
          <a
            href="https://testflight.apple.com/join/W6erFjfp"
            target="_blank"
            rel="noreferrer"
            className="inline-block drop-shadow-md"
          >
            <img
              src={appStoreBadge}
              alt="Download Mood on the App Store via TestFlight"
              className="h-10 w-auto"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
