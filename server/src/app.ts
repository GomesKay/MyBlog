import express from "express"
import cors from "cors"
import { postRoutes } from "./routes/postRoutes"

export const app = express()

app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json())
app.use(postRoutes)
