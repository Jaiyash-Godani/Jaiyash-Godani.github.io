import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
{ name: 'Home', path: '/' },
{ name: 'About', path: '/about' },
{ name: 'Skills', path: '/skills' },
{ name: 'Services', path: '/services' },
{ name: 'Projects', path: '/projects' },
{ name: 'Blogs', path: '/blogs' },
{ name: 'Contact', path: '/contact' },
];

export default function Navbar() {
return (
<Disclosure as="nav" className="
fixed top-4 inset-x-0 z-50
flex justify-center
px-6
">
{({ open }) => (
<div className="
w-full max-w-7xl
bg-black/50 backdrop-blur-xl
border border-orange-500/30
rounded-2xl
shadow-2xl shadow-orange-500/10
transition-all duration-500 ease-out
hover:shadow-orange-500/20 hover:border-orange-500/40
">
<div className="flex items-center justify-between md:justify-center px-6 py-4">
{/* Mobile hamburger left */}
<Disclosure.Button className="
md:hidden
p-2 rounded-xl
text-white/90 hover:text-orange-400
hover:bg-orange-500/10
focus:outline-none focus:ring-2 focus:ring-orange-400/50
transition-all duration-300
">
<span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
{open ? (
<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
) : (
<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
)}
</Disclosure.Button>

{/* Mobile brand name */}
<div className="
md:hidden
text-orange-400 text-2xl font-bold
select-none tracking-wide
bg-gradient-to-r from-orange-400 to-orange-300
bg-clip-text text-transparent
">
Jaiyash
</div>

{/* Desktop navigation centered */}
<nav className="hidden md:block">
<ul className="flex items-center gap-2">
{navItems.map((item, index) => (
<li key={item.name}>
<NavLink
to={item.path}
end={item.path === '/'}
className={({ isActive }) =>
`
relative px-5 py-3 rounded-xl
font-medium text-sm tracking-wide
transition-all duration-300 ease-out
hover:text-orange-400
hover:bg-orange-500/10
hover:scale-105
focus:outline-none focus:ring-2 focus:ring-orange-400/50
${
isActive
? 'text-orange-400 bg-orange-500/20 shadow-lg shadow-orange-500/25 scale-105'
: 'text-white/90 hover:text-white'
}
${index === 0 || index === navItems.length - 1 ? 'font-semibold' : ''}
`
}
>
<span className="relative z-10">{item.name}</span>
{/* Active indicator */}
<span className={`
absolute inset-0 rounded-xl
bg-gradient-to-r from-orange-500/20 to-orange-400/20
opacity-0 transition-opacity duration-300
${({ isActive }) => isActive ? 'opacity-100' : 'group-hover:opacity-50'}
`} />
</NavLink>
</li>
))}
</ul>
</nav>
</div>
{/* Mobile dropdown menu */}

<Transition
enter="transition duration-300 ease-out"
enterFrom="transform scale-95 opacity-0"
enterTo="transform scale-100 opacity-100"
leave="transition duration-200 ease-in"
leaveFrom="transform scale-100 opacity-100"
leaveTo="transform scale-95 opacity-0"
>
<Disclosure.Panel className="
md:hidden
bg-black/60 backdrop-blur-2xl
border-t border-orange-500/20
rounded-b-2xl
mx-2 mb-2
shadow-xl shadow-black/50
origin-top
">
{({ close }) => (
<nav className="px-4 py-6">
<ul className="flex flex-col gap-2">
{navItems.map((item) => (
<li key={item.name}>
<NavLink
to={item.path}
end={item.path === '/'}
onClick={() => close()}
className={({ isActive }) =>
`
block px-6 py-4 rounded-xl
font-medium text-center
transition-all duration-300 ease-out
hover:text-orange-400
hover:bg-orange-500/10
hover:scale-[1.02]
focus:outline-none focus:ring-2 focus:ring-orange-400/50
${
isActive
? 'text-orange-400 bg-orange-500/20 shadow-lg shadow-orange-500/25'
: 'text-white/90'
}
`
}
>
{item.name}
</NavLink>
</li>
))}
</ul>
</nav>
)}
</Disclosure.Panel>
</Transition>
</div>
)}
</Disclosure>
);
}
