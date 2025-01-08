import { describe, expect, test } from "vitest"
import request from "supertest"
import { app } from "../app"

describe("Testes das Rotas de Posts", () => {
  test("Deve ser possível retornar todo os posts", async () => {
    const response = await request(app).get("/posts")

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test("Deve ser possível criar um post", async () => {
    const newPost = {
      title: "Novo Post",
      content: "Conteúdo do novo post",
    }

    const response = await request(app).post("/posts").send(newPost)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("title", "Novo Post")
    expect(response.body).toHaveProperty("content", "Conteúdo do novo post")
  })

  test("Deve ser possível atualizar um post", async () => {
    // Insira um ID de um post abaixo para testar
    const postId = ""
    const updatedPost = {
      title: "Post Atualizado",
      content: "Conteúdo atualizado do Post",
    }

    const response = await request(app)
      .put(`/posts/${postId}`)
      .send(updatedPost)

    expect(response.status).toBe(200)
    expect(response.body.title).toBe(updatedPost.title)
    expect(response.body.content).toBe(updatedPost.content)
  })

  test("Deve ser possível deletar um post", async () => {
    // Insira um ID de um post abaixo para testar
    const postId = ""
    const response = await request(app).delete(`/posts/${postId}`)

    expect(response.status).toBe(200)
    expect(response.body.message).toBe("Post deletado com sucesso")
  })
})
