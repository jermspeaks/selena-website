import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const Navigation = () => {
  return (
    <nav class="navigation">
      {/* <li>Meet Selena</li> */}
      <li>
        <Link to={'/about'}>Resume</Link>
      </li>
    </nav>
  )
}

export default Navigation
