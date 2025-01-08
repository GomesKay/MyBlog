import express from "express"
import { postRoutes } from "./routes/postRoutes"

export const app = express()

app.use(express.json())
app.use(postRoutes)
