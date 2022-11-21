import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Horizontal from './components/Horizontal';

import React, { useState } from 'react';


function App() {
  const [theme, settheme] = useState("light")
  function changeTheme() {
    if (theme === "light") {
      settheme("dark")
    }
    else {
      settheme("light")
    }
  }
  const [type, settype] = useState([{
    type: "Mystery",
    para: "Paragraph for Mystery",

  },
  {
    type: "Fantasy",
    para: "Paragraph for Fantasy",
  },
  {
    type: "Children Books",
    para: "Paragraph for young children to middle school."
  }])
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col">
            <Cards theme={theme} heading="New" img="https://i.pinimg.com/170x/0c/ee/7e/0cee7e54fda8ac99ec11459448e89c7d.jpg" />
          </div>
          <div className="col">
            <Cards theme={theme} heading="Best Sellers" img="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg" />
          </div>
          <div className="col">
            <Cards theme={theme} heading="Famous" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KuFBHfsxQZK3XSsXtiRqaXOWcRn2MId1Tw&usqp=CAU" />
          </div>
        </div>
      </div>
      <div className="container">
        {type.map((element, index) => {
          return <Horizontal theme={theme} heading={element.type} para="Here you can find " img="https://s2982.pcdn.co/wp-content/uploads/2020/01/They-All-Fall-Down-by-Rachel-Howzell-Hall.jpg.optimal.jpg" />

        })}
        {/* <div className="row">
          <div className="col">
           
          </div>
          <div className="col">
            <Horizontal theme={theme} heading="Fantasy" img="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525646348l/40049890._SY475_.jpg" />
          </div>
          <div className="col">
            <Horizontal theme={theme} heading="Clildren Books" img="https://i0.wp.com/readingmiddlegrade.com/wp-content/uploads/2021/09/Holes-1.jpeg?resize=339%2C499&ssl=1" />
          </div>
        </div> */}
      </div>



    </>

  )
}

export default App;
