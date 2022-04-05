import React from 'react'

import { colors } from 'styles/theme'

export const HomeContent = () => {
  return (
    <>
      <div>
        <h1>¡Buenas noches!</h1>
      </div>

      <style jsx>{`
        div {
          background-color: ${colors.mediumBlack};
          color: ${colors.white};
          width: 100%;
        }
      `}
      </style>
    </>
  )
}
