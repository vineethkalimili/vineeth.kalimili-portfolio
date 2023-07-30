import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Mail from '../components/Mail'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Vineeth | WEB3 FullStack-Developer</title>
        <meta name="description" content="I’m a WEB3 fullstack-developer specializing in building DApps." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Mail />
    </div>
  )
}
