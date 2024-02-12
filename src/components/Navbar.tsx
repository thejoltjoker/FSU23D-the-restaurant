import { getImageUrl } from "../helpers/strings"


const Navbar = () => {
  return (
    <div className="bg-pale-yellow">
      <div>
        <img src={getImageUrl("BlackLogo.svg")} alt="Black Vaca Caliente logo"/>
      </div>
      
    </div>
  )
}

export default Navbar
