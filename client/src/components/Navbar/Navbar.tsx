import { Link } from 'react-router-dom'
import { Footer } from '../Footer'
import { User, useUser } from '../../hooks/useUser'

import './Navbar.styles.scss'

import LogoImg from '../../assets/logo.png'
import searchLine from '../../assets/search-line.svg'
import articleLine from '../../assets/article-line.svg'
import focus3Line from '../../assets/focus-3-line.svg'
import userLine from '../../assets/user-line.svg'
import logoutuserLine from '../../assets/logout-circle-line.svg'
import briefcaseLine from '../../assets/briefcase-line.svg'
import fileAddLine from '../../assets/file-add-line.svg'

interface Item {
  title: string
  url: string
  icon: string
}

const professionalLinks: Item[] = [
  { title: 'Find that job', url: '/home', icon: searchLine },
  { title: 'Your applications', url: '/applications', icon: articleLine },
  { title: 'Following', url: '/following', icon: focus3Line },
]

const recruiterLinks: Item[] = [
  { title: 'Job Postings', url: '/home', icon: briefcaseLine },
  { title: 'Create New Job', url: '/jobs/new', icon: fileAddLine },
]

const NavbarItem = ({ title, url, icon }: Item) => {
  return (
    <li>
      <Link to={url}>
        <img src={icon} alt="" />
        <span>{title}</span>
      </Link>
    </li>
  )
}

export const Navbar = ({ user }: { user: User }) => {
  const { logout } = useUser()

  return (
    <nav className="Navbar" id="navbar">
      <div className="Navbar__container">
        <Link to="/home" className="Navbar__logo">
          <img src={LogoImg} alt="Get That Job logo" />
        </Link>
        <ul>
          {user.role === 'professional'
            ? professionalLinks.map(item => (
                <NavbarItem key={item.title} {...item} />
              ))
            : recruiterLinks.map(item => (
                <NavbarItem key={item.title} {...item} />
              ))}

<<<<<<< HEAD
        <footer className="navbar__footer">
          <p>© 2022 - Get That Job</p>
          <p>Codeable - Cohort X Final Project</p>
          <ul>
            <li>Cataldo Ivan</li>
            <li>Tomas Salinas</li>
          </ul>
          <p>Source code:</p>
          <p>Ruby on Rails REST API</p>
          <p>React Responsive SPA</p>
        </footer>
=======
          <NavbarItem title="Profile" url="/profile" icon={userLine} />
          <li>
            <button type="button" onClick={() => logout()}>
              <img src={logoutuserLine} alt="Logout icon" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
>>>>>>> 4996248797b6a8d61e5565fc06c08753c40ab9aa
      </div>
      <Footer />
    </nav>
  )
}
