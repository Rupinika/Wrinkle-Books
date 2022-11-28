import React from 'react'
import Carousel from './Carousel'
import Category from './Category'
import kids from '../data/kids.json'

function Home() {
    let theme ="light"
  return (
    <div>
      <Carousel />
      {/* <Category heading = "Top Categories"></Category>
       */}
      <Category heading="Kids" data = {kids} />
      {/* <Category heading="Teenagers" />
      <Category heading="Adults" />
       */}
    </div>
  )
}

export default Home