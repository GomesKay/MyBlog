import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home/index"
import { PostDetailed } from "@/pages/PostDetailed"

// Roteamento da aplicação
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetailed />} />
    </Routes>
  )
}
