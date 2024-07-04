import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-[80px] fixed flex justify-center items-center bg-black">
      <Link to='/'>
        <img src="/images/nasa-logo.png" alt="nasa-logo" width={70} height={70} />
      </Link>
    </div>
  )
}

export default Header;