'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import plectrum from '@/images/icon.svg'

const navOptions = [
    { name: 'Home', href: '/' },
    { name: 'Fretboard', href: '/fretboard' },
    { name: 'Handbook', href: '/handbook' },
]

export function MobileNav() {

    const mobileNav = useMemo(() => navOptions, [])
    const [openMenu, setOpenMenu] = useState(() => false)
    const handleOpenMenu = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setOpenMenu(!openMenu)
    }

    return (
        <div className="fixed bottom-9 opacity-60 right-24 z-50 flex h-5 w-5 flex-row rounded-full lg:hidden">
            <div className="grid-row grid grid-cols-2 grid-rows-1 gap-x-5">
                <div
                    id="mobile_menu"
                    className="z-50 col-start-1 row-start-1 self-center"
                >
                    <button
                        onClick={handleOpenMenu}
                        className="z-40  flex  cursor-pointer items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-emerald-600 text-slate-100"
                    >
                        <h3 className="mx-2">Menu</h3>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        <span className="sr-only">Open main menu</span>
                    </button>
                    <div className="relative">
                        {openMenu && (
                            <div className="absolute bottom-0 right-0 z-50 w-32 rounded-lg bg-neutral-50A p-2 text-sm font-normal text-slate-900 ring-1 ring-gray-200 dark:bg-blue-95A dark:text-slate-100 dark:ring-gray-200/20">
                                <ul>
                                    <li className="mb-1 rounded-sm pb-1 pl-1 hover:bg-neutral-200 dark:hover:bg-slate-700">
                                        <button
                                            className="w-full text-left"
                                            onClick={handleOpenMenu}
                                        >
                                            Close
                                        </button>
                                    </li>
                                    <li className="border-1 w-full rounded-sm pl-1">
                                        <Link
                                            className="block w-full text-left hover:bg-neutral-200 dark:hover:bg-slate-700"
                                            href={mobileNav[2].href}
                                        >
                                            {mobileNav[2].name}
                                        </Link>
                                    </li>
                                    <li className="w-full rounded-sm pl-1">
                                        <Link
                                            className="block w-full text-left hover:bg-neutral-200 dark:hover:bg-slate-700"
                                            href={mobileNav[0].href}
                                        >
                                            {mobileNav[0].name}
                                        </Link>
                                    </li>
                                    <li className="mb-2 w-full rounded-sm pl-1">
                                        <Link
                                            className="block w-full text-left hover:bg-neutral-200 dark:hover:bg-slate-700"
                                            href={mobileNav[1].href}
                                        >
                                            {mobileNav[1].name}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function NavBar() {

    const navigation = useMemo(() => navOptions, [])

    return (
        <nav
            id="nav_menu"
            className="supports-backdrop-blur:bg-white/90 sticky top-0 z-40 w-full flex-none border-b border-slate-900/10 bg-white/90 text-sm font-semibold leading-6 text-slate-700  backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 dark:text-slate-200 lg:z-50"
        >
            <div
                className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-2 pt-2 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center gap-x-12">
                    <Link
                        href="/"
                        className="-m-1.5 p-1.5"
                    >
                        <Image
                            src={plectrum}
                            width={30}
                            height={30}
                            alt="Colorful plectrum"
                        />
                    </Link>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link
                            href={navigation[0].href}
                            className="text-sm font-semibold leading-6 hover:text-indigo-600 focus:text-indigo-600 active:text-indigo-600 dark:hover:text-indigo-400 dark:focus:text-indigo-400 dark:active:text-indigo-400"
                        >
                            {navigation[0].name}
                        </Link>
                        <Link
                            href={navigation[1].href}
                            className="text-sm font-semibold leading-6 hover:text-indigo-600 focus:text-indigo-600 dark:hover:text-indigo-400 dark:focus:text-indigo-400 dark:active:text-indigo-400"
                        >
                            {navigation[1].name}
                        </Link>
                        <Link
                            href={navigation[2].href}
                            className="text-sm font-semibold leading-6 hover:text-indigo-600 focus:text-indigo-600 dark:hover:text-indigo-400 dark:focus:text-indigo-400 dark:active:text-indigo-400"
                        >
                            {navigation[2].name}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
