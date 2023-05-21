import { useContext } from "react"
import KioskContext from '../context/KioskProvider'

const UseKiosk = () => {
  return useContext(KioskContext)
}

export default UseKiosk