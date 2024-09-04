import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import LogIn from './components/login/LogIn';
import Event from './components/event/Event';
import Venue from './components/venue/Venue';
import Checkout from './components/payment/Checkout';
import RSVPInvitation from './components/invitation/RSVPInvitation';
import EventGuest from './components/eventguest/EventGuest';
import Home from './components/dashboard/Dashboard';
import ContactUs from './components/contactus/ContactUs';
import Profile from './components/profile/Profile';
import Dashboard from './components/admin/Dashboard';
import AdminUsers from './components/admin/AdminUsers';
import AdminOrders from './components/admin/AdminOrders';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminVenuePage from './components/admin/Adminvenue/AdminVenue';
import AdminAddVenue from './components/admin/Adminvenue/AdminAddVenue';
import Message from './components/admin/Adminvenue/Message';
import AdminEvent from './components/admin/Adminvenue/AdminEvent';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
      <Route path="/" element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/venue" element={<Venue isAuthenticated={isAuthenticated} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rsvp" element={<RSVPInvitation isAuthenticated={isAuthenticated} />} />
        <Route path="/checkout" element={<Checkout isAuthenticated={isAuthenticated} />} />
        <Route path="/contactus" element={<ContactUs isAuthenticated={isAuthenticated} />} />
        <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<LogIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/event" element={<Event isAuthenticated={isAuthenticated} />} />
        <Route path="/eventguest" element={<EventGuest isAuthenticated={isAuthenticated} />} />
        <Route path="/home" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/adminvenue" element={<AdminVenuePage />} />
        <Route path="/adminaddvenue" element={<AdminAddVenue />} />
        <Route path="/message" element={<Message />} />
        <Route path="/adminevent" element={<AdminEvent />} />
      </Routes>
    </>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/users" element={<AdminUsers />} />
      <Route path="/orders" element={<AdminOrders />} />
    </Routes>
  );
};


export default App;
