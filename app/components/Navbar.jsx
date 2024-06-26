import React from 'react'
import Link from 'next/link'
import styles from '../sass/Navbar.scss'

export default function Navbar() {
  return (
    <main className={styles.main}>
        <nav> 
        <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      </div>
    </nav>
    </main>
  )
}
