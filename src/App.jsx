import React from 'react';
import { Nav } from './components/Nav';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards'

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Cards />
    </>
  )
}

export default App