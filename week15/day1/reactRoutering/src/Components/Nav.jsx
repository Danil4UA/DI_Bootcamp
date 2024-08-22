import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
    <header>
      <h1>React routering</h1>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/phone"> Phone </Link>
        <Link to="/shop"> Shop </Link>

      </nav>
    </header>
    )

}

export default Nav
