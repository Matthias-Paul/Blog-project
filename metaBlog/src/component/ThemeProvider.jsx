import { useSelector } from "react-redux"

const ThemeProvider = ({children}) => {
    const { theme } = useSelector((state) => state.theme)
    return (
      <>
        <div>
            <div className={`${theme==="light"? "bg-white text-black": "bg-black text-white"  } min-h-[100vh]`}>
            {children}
            </div>
        
        </div>
      </>
    )
  }
  
  export default ThemeProvider
  