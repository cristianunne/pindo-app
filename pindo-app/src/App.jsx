import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Index from "./Index"
import EmseforsPage from "../src/pages/EmseforsPage"
import EmpresasPage from "./pages/EmpresasPage"
import EmpresasDetailsPage from "./pages/EmpresasDetailsPage"
import RodalesPage from "./pages/RodalesPage"
import RodalesDetailsPage from "./pages/RodalesDetailsPage"




function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/empresas" element={<EmpresasPage/>}></Route>
        <Route path="/empresas/:empresaId" element={<EmpresasDetailsPage />} />
        <Route path="/rodales" element={<RodalesPage/>}></Route>
        <Route path="/rodales/:rodalId" element={<RodalesDetailsPage />} />
      </Routes>

    </Router>

  )
}

export default App
