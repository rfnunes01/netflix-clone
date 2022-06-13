import React from 'react'
import { HeaderStyled } from './style'

export default function Header({black}) {
  return (
    <HeaderStyled className={black ? 'black' : ''}>
      <div className="header--logo img-controler">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" alt="Logo da Netflix" />
        </a>
      </div>
      <div className="header--user img-controler">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
        </a>
      </div>
    </HeaderStyled>
  )
}
