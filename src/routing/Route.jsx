
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../hooks/Login';
import './Route.css'; // Import the new CSS file

function AppRoutes() {
  return (
    <div className='container-fluid'>
      <header>
        <nav>
          <div className='fs-5 fw-bold'>Shopper.</div>
          <div>
            <span> <Link to="/">Home</Link> </span>
            <span> <Link to="/kids"> Kids Fashion</Link> </span>
            <span> <Link to="/women"> Women Fashion </Link> </span>
            <span> <Link to="/men">Men Fashion </Link> </span>
          </div>
          <div>
            <Link className='bi bi-person-fill' to="/login"> Signin </Link>
          </div>
        </nav>
      </header>

      <section>
        <Routes>
          <Route path='/' element={
            <div>
              <h2>Shopper Home</h2>
              <p>Offers on Men, Women, and Kids fashion</p>
            </div>
          } />
          <Route path='/men' element={
            <div>
              <h3>Men's Fashion</h3> 
              <img src="/images/men-fashion.jpg" width="200" height="200" alt="Men Fashion"/>
            </div>
          } />
          <Route path='/women' element={
            <div>
              <h3>Women's Fashion</h3>
              <img src="/images/women-fashion.jpg" width="200" height="200" alt="Women Fashion"/>
            </div>
          } />
          <Route path='/kids' element={
            <div>
              <h3>Kids' Fashion</h3>
              <img src="/images/kid-1.jpg" width="200" height="200" alt="Kids Fashion"/>
            </div>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={
            <div>
              <h4 className='text-danger'>Not Found</h4>
              <p>Requested category not found</p>
            </div>
          } />
        </Routes>
      </section>
    </div>
  );
}

export default AppRoutes;
