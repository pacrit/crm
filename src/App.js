import Home from './pages/Home'
import Login from './pages/Login'
import Config from './pages/Config'
import UserGroup from './pages/UserGroup'
import Tasks from './pages/Tasks'
import ErrorPage from './pages/Err'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path="/usergroup" element={<UserGroup />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
