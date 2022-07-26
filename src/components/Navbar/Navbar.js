import './Navbar.css';
const Navbar =() => {
    return (
        <nav className='nav'>
          <div className='navLogo'>
            <h3>The Freak Shop</h3>
          </div>
          <div className='navLinks'>
            <ul>
              <li><a>Tienda</a></li>
              <li><a href='carrito.js' target='_blank'>Carrito</a></li>
            </ul>
          </div>
        </nav>
    );
  }

  export default Navbar;