import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Navbar, Footer, CreatePost, DisplayPosts } from './components';
import PostContextProvider from './store/postContextStore';

function App() {

  const [selectedTab, setSelectedTab] = React.useState("Home");

  return (
    <>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <main className="container my-5 p-5 bg-body-secondary rounded-3">
        <PostContextProvider>
          {selectedTab === 'Home' ? <DisplayPosts /> : <CreatePost />}
        </PostContextProvider>
      </main>

      <Footer />
    </>
  )
}

export default App
