import React from 'react'

export const NavbarMenu = () => {
  return (
    <button
      type="button"
      className="Navbar__menu"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle('active')
        document.getElementById('navbar')?.classList.toggle('open')
      }}
    >
      <div className="Navbar__menu-line"></div>
      <div className="Navbar__menu-line"></div>
      <div className="Navbar__menu-line"></div>
    </button>
  )
}
