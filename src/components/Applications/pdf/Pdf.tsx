import { Dispatch, SetStateAction } from "react"
import MacWindow from "../../MacWindow/MacWindow"
import './pdf.scss'
interface windowProps {
    windowname: string
    setWindowsopen:  Dispatch<SetStateAction<Record<string, boolean>>>
}
const Pdf: React.FC<windowProps> = ({ windowname, setWindowsopen }) => {
  return (
    <MacWindow  windowName={windowname} setWindowsOpens={setWindowsopen}>
        <div className="resume">
        <embed src="/resume.pdf" />
        </div>
    </MacWindow>
  )
}

export default Pdf