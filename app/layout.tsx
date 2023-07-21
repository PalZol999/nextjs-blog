import '../styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'In2DaVoid',
  description: 'Tech Blog',
  icons: {
    icon: '/invader_icon.ico',
  },
}

export default function RootLayout({children
}: {
  children: React.ReactNode
}) {
  <head>
      <link rel="icon" href='/invader_icon.ico' />
  </head>

  const header = (
    <>
         
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image alt="" src="/invader_icon_215138.ico" width={41} height={41} className='mx-auto'/>
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">In2_Da_Void</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog. 💻</p>
      </div>
 
    </>
 
  )

  const footer = (
    <footer>
       <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <br />
        <h4>Developed by PalZAllTech</h4>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <head>
      <link rel="icon"
  href='/invader_icon.ico'
  sizes="<generated>" /> 
   </head>
      <body className={inter.className} style={{ backgroundColor: 'yellow' }}>

      <header className='navbar bg-slate-800 h-20 flex items-center text-2xl text-white font-bold sticky top-0 z-50'>
  <div className="navbar bg-base-100 flex items-center justify-between px-4 w-full">
    <div className="flex items-center">
      <a className="btn btn-ghost normal-case text-xl" href="/">
        Tech_BLOG
      </a>
    </div>
    <div className="flex items-center">
      <a href="https://github.com/PalZol999" target="_blank" rel="noopener noreferrer">
        <img
          src="wgit.png"
          alt="Git Logo"
          className="w-8 h-8"
        />
      </a>
      <a className="btn btn-ghost normal-case text-xl px-4" href="https://luminous-gingersnap-f8a604.netlify.app/">
        About Me
      </a>
    </div>
  </div>
</header>




      <div className="mx-auto  max-w-2xl px-6">  
          {header}
          {children}
          {footer}
        </div>
        </body>
    </html>
  )
}
