import React from 'react'
import Image from 'next/image'

import { colors } from 'styles/theme'

export const Footer = () => {
  return (
    <>
      <nav>
        <Image width='64' height='64' src='/favicon.svg' />
      </nav>

      <style jsx>{`
        nav {
          background-color: ${colors.softBlack};
        }
      `}
      </style>
    </>
  )
}
