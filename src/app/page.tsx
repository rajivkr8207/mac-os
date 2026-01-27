'use client'
import Github from "@/components/Applications/Github"
import Navbar from "@/components/Navbar/Navbar"
import Dock from "@/components/dock/Dock"
import { useState } from "react"

// import  "./page.module.scss";
const Home = () => {
  const [windowstate, setWindowstate] = useState({
    github: false,
  })
  return (
    <main>
      <Navbar />
      <Dock setWindow={setWindowstate} />
      {windowstate.github && <Github windowname='github' setWindowsopen={setWindowstate} />}
    </main>
  )
}

export default Home