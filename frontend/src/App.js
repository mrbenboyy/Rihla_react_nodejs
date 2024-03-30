import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Login from './components/Login';
import Booking from './components/Booking';
import BookingSuccess from './components/BookingSuccess';
import Dashboard from './components/Admin/Dashboard';
import WelcomeAdmin from './components/Admin/WelcomeAdmin';
import Users from './components/Admin/Users';
import Cities from './components/Admin/Cities';
import Bookings from './components/Admin/Bookings';
import SingleCity from './components/SingleCity';
import ViewBooking from './components/Admin/ViewBooking';
import ContactSuccess from './components/ContactSuccess';

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact-success' element={<ContactSuccess />} />
          <Route path='/login' element={<Login />} />
        
          <Route path='/booking' element={<Booking />} />
          <Route path='/booking-success' element={<BookingSuccess />} />
          <Route path='/city/:id' element={<SingleCity />} />
          {
            token
            ?
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='' element={<WelcomeAdmin />} />
            <Route path='admins' element={<Users />} />
            <Route path='cities' element={<Cities />} />
            <Route path='bookings' element={<Bookings />} />
            <Route path='booking/:id' element={<ViewBooking />} />
          </Route>
          :
          null
          }
        </Routes>
    </div>
  );
}

export default App;
