import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import z from "zod"

// ESquema de Validação com Zod
const postSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  content: z.string().min(1, "Conteúdo é obrigatório"),
})

const idSchema = z.object({
  id: z.string().uuid(),
})

// Lista todos os posts
export const getPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany()

  res.status(200).json(posts)
}

// Cria um post
export const createPost = async (req: Request, res: Response) => {
  try {
    const postValidation = postSchema.parse(req.body)

    const newPost = await prisma.post.create({
      data: postValidation,
    })

    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ message: "Erro: ", error })
  }
}

// Atualiza um post
export const updatePost = async (req: Request, res: Response) => {
  const { id } = idSchema.parse(req.params)

  try {
    const postValidation = postSchema.parse(req.body)

    const updatedPost = await prisma.post.update({
      where: { id },
      data: postValidation,
    })

    res.json(updatedPost)
  } catch (error) {
    res.status(400).json({ message: "Erro: ", error })
  }
}

// Deleta um post
export const deletePost = async (req: Request, res: Response) => {
  const { id } = idSchema.parse(req.params)

  try {
    await prisma.post.delete({
      where: { id },
    })

    res.status(200).json({ message: "Post deletado com sucesso" })
  } catch (error) {
    res.status(400).json({ message: "Erro: ", error })
  }
}
