'use client'
import CalenderCom from "@/components/Applications/Calender/calender"
import Cli from "@/components/Applications/cli/Cli"
import Github from "@/components/Applications/github/Github"
import Note from "@/components/Applications/note/Note"
import Pdf from "@/components/Applications/pdf/Pdf"
import Navbar from "@/components/Navbar/Navbar"
import Dock from "@/components/dock/Dock"
import { useState } from "react"

// import  "./page.module.scss";
const Home = () => {
  const [windowstate, setWindowstate] = useState<Record<string, boolean>>({
    github: false,
    note: false,
    pdf: false,
    calender: false,
    cli: false
  })
  return (
    <main>
      <Navbar />
      <Dock windowstate={windowstate} setWindow={setWindowstate} />
      {windowstate.github && <Github windowname='github' setWindowsopen={setWindowstate} />}
      {windowstate.note && <Note windowname='note' setWindowsopen={setWindowstate} />}
      {windowstate.pdf && <Pdf windowname='pdf' setWindowsopen={setWindowstate} />}
      {windowstate.calender && <CalenderCom windowname='calender' setWindowsopen={setWindowstate} />}
      {windowstate.cli && <Cli windowname='cli' setWindowsopen={setWindowstate} />}

    </main>
  )
}

export default Home