import Head from 'next/head'

import { Sidebar } from 'components/Sidebar'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main>
        <Sidebar />
      </main>
    </div>
  )
}
