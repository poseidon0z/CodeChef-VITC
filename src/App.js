import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import Home from './Pages/Home';
import Join from './Pages/Join';
import BackToTop from './Components/BackToTop';
import CookOff from './Events/CookOff';
import Blogs from './Pages/Blogs';
import Layout from './Pages/Layout';
import Expo24 from './Blogs/BlogPages/Expo24';
import BlogLayout from './Blogs/BlogPages/BlogLayout';
import PreVibrance from './Blogs/BlogPages/PreVibrance';
import TShirt from './Blogs/BlogPages/TShirt';

function App() {
  return (
    <Router>
      <BackToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/joinus"
          element={
            <Layout>
              <Join />
            </Layout>
          }
        />
        <Route
          path="/CookOff"
          element={
            <Layout>
              <CookOff />
            </Layout>
          }
        />
        <Route
          path="/expo24"
          element={
            <BlogLayout>
              <Expo24 />
            </BlogLayout>
          }
        />
        <Route
          path="/previbrance24"
          element={
            <BlogLayout>
              <PreVibrance />
            </BlogLayout>
          }
        />
        <Route
          path="/tshirt"
          element={
            <BlogLayout>
              <TShirt />
            </BlogLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
