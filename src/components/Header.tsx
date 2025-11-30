import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import moodLogo from '../images/app-icon-light.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#2f2e29]/10 bg-[#fffae4] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-[#2f2e29]">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={moodLogo}
            alt="Mood app icon"
            className="h-8 w-8 shadow-sm rounded-lg"
          />
          <span className="text-base font-semibold tracking-tight">Mood</span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link
            to="/"
            activeProps={{ className: 'text-[#2f2e29]' }}
            className="text-[#6b6650] hover:text-[#2f2e29]"
          >
            Home
          </Link>
          <Link
            to="/privacy"
            activeProps={{ className: 'text-[#2f2e29]' }}
            className="text-[#6b6650] hover:text-[#2f2e29]"
          >
            Privacy
          </Link>
          <Link
            to="/support"
            activeProps={{ className: 'text-[#2f2e29]' }}
            className="text-[#6b6650] hover:text-[#2f2e29]"
          >
            Support
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#2f2e29] hover:bg-[#ffe992] md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[#2f2e29]/10 bg-[#ffda31] px-4 py-3 text-sm font-medium md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              activeProps={{ className: 'text-[#2f2e29]' }}
              className="text-[#6b6650] hover:text-[#2f2e29]"
            >
              Home
            </Link>
            <Link
              to="/privacy"
              onClick={() => setIsOpen(false)}
              activeProps={{ className: 'text-[#2f2e29]' }}
              className="text-[#6b6650] hover:text-[#2f2e29]"
            >
              Privacy
            </Link>
            <Link
              to="/support"
              onClick={() => setIsOpen(false)}
              activeProps={{ className: 'text-[#2f2e29]' }}
              className="text-[#6b6650] hover:text-[#2f2e29]"
            >
              Support
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
