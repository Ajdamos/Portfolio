import { PortFolio } from "./PortFolio"
import { TitleScreen } from "./projects/wordle/TitleScreen"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom'
import { SpaceEvader } from "./projects/spaceEvader/SpaceEvader"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<PortFolio />} />
        <Route path="/wordle" element={<TitleScreen  />} />
        <Route path="/spaceevader" element={<SpaceEvader  />} />
      </Route>
    )
  )
  return (
    // <PortFolio />
    
    <RouterProvider router={router} />
    )
}

export default App
