import Head from 'next/head'
import Landing from "../components/landing";
import BackgroundLines from "../components/backgroundLines";
import Introduction from "../components/introduction";
import SocialSvg from "../public/blob-scene-haikei.svg";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Callum Stringer</title>
        <meta name="description" content="My portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundLines />
      <Landing />
      <Introduction />


    </div>

  )
}
