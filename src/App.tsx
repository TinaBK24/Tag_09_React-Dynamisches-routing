import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import RootLayout from './pages/rootLayout/RootLayout'
import CarList from './components/carList/CarList'
import CarItem from './components/carItem/CarItem'
import { useState } from 'react'
import { ICard } from '../interfaces/ICards';


function App() {
  const [card, setCard] = useState<ICard[]>([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='super-carlist' element={<CarList setCard={setCard} />} />
          <Route path='super-carlist/car/:id' element={<CarItem card={card} />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
