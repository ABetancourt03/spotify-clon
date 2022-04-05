import Head from 'next/head'
import Image from 'next/image'

import { Sidebar } from 'components/Sidebar'
import { HomeContent } from 'components/HomeContent'
import { Footer } from 'components/Footer'

import { colors } from 'styles/theme'

export default function Home () {
  return (
    <>
      <div>
        <Head>
          <title>Spotify</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>

        <main>
          <div className='container'>
            <Sidebar />
            <HomeContent />
          </div>
          <div className='nav'>
            <Image width='64' height='64' src='/favicon.svg' />
          </div>
          {/* <Footer /> */}
        </main>
      </div>

      <style jsx>{`
        main {
          width: 100%;
          height: 100vh;
        }

        .container {
          display: flex;
          height: 100%;
          z-index: 0;
        }

        .nav {
          display: flex;
          align-items: center;
          background-color: ${colors.softBlack};
          position: fixed;
          width: 100%;
          height: 94px;
          bottom: 0;
          z-index: 1;
        }
      `}
      </style>
    </>
  )
}
