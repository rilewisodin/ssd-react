import { useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Quote from './Quote.jsx'
import Footer from './Footer.jsx'

function App() {
  const appInfo = {
    title: 'Quote of the Day',
    author: 'Richard Lewis',
    copyright: new Date().getFullYear(),
  }

  useEffect(() => { document.title = appInfo.title; }, [appInfo.title]); 

  return (
    <>
      <Header title={appInfo.title} />
      <Quote />
      <Footer author={appInfo.author} copyright={appInfo.copyright} />
    </>
  )
}

export default App
