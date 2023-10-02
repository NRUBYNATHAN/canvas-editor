import { useNavigate } from "react-router-dom"
import "./Homes.css"
import Button from '@mui/material/Button';
function Homes() {
    const navigate = useNavigate();
  return (
    <div className="ho">
    <div className="home">
        <h1 className="home_head">Hi! Welcome to my Text Editing Page</h1>
        <div className="home_btn">
        <Button variant="contained" onClick={()=>navigate("/canvas")}>create a canvas</Button>
        <Button variant="contained" onClick={()=>navigate("/project")}>My Project</Button>
        </div>

    </div>
    </div>

  )
}

export default Homes
