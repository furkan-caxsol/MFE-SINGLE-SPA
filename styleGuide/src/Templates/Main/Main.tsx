import React from 'react'
import { Sidebar } from '../../Organisms/Sidebar/Sidebar'
import Content from '../../Organisms/Content/Content'
import Header from '../../Organisms/Header/Header'
import Footer from '../../Organisms/Footer/Footer'
import './Main.css';

export const Main = () => {
  return (
    <div className="container">
        <Sidebar/>
        <main className='main-right'>
            <Header/>
            <Content/>
            <Footer/>
        </main>
    </div>
  )
}