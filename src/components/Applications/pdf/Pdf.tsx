import MacWindow from "../../MacWindow/MacWindow"
import './pdf.scss'

const Pdf = ({ windowName }: { windowName: string }) => {
  return (
    <MacWindow windowName={windowName}>
      <div className="resume">


        <embed src="/resume.pdf" />

        
      </div>
    </MacWindow>
  )
}

export default Pdf