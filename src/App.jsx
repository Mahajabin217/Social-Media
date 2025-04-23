import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className='app-container'>
      <SideBar selectedTab={selectedTab}></SideBar>
      <div className='content'>
        <Header></Header>
        {selectedTab === 'Home' ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
