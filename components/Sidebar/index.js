import React from 'react'

import { colors } from 'styles/theme'

export const Sidebar = () => {
  return (
    <>
      <div>
        <h2>Spotify</h2>
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: ${colors.black};
          color: ${colors.white};
          width: 250px;
        }
      `}
      </style>
    </>
  )
}
