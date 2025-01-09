import { api } from "@/lib/axios"
import { createContext, ReactNode, useState } from "react"

// Interfaces
interface Post {
  id: string
  title: string
  content: string
  created_at: string
}

interface CreatePostInput {
  title: string
  content: string
}

interface UpdatePostInput {
  title?: string
  content?: string
}

interface PostContextType {
  posts: Post[]
  queryPosts: (query?: string) => Promise<void>
  createPost: (data: CreatePostInput) => Promise<void>
  deletePost: (id: string) => Promise<void>
  getPostById: (id: string) => Post | undefined
  updatePost: (id: string, data: CreatePostInput) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

// Criação do Contexto
export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  // Buscar um post
  async function queryPosts(query?: string) {
    try {
      const response = await api.get("/posts", {
        params: {
          search: query,
        },
      })

      // Filtragem
      const filteredPosts = query
        ? response.data.filter((post: Post) =>
            post.title.toLowerCase().includes(query.toLowerCase()),
          )
        : response.data

      // Ordenação dos Posts
      const sortedPosts = filteredPosts.sort((a: Post, b: Post) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB.getTime() - dateA.getTime()
      })

      setPosts(sortedPosts)
    } catch (error) {
      console.error("Erro ao buscar posts: ", error)
    }
  }

  // Crar um post
  async function createPost(data: CreatePostInput) {
    const { title, content } = data

    const response = await api.post("/posts", {
      title,
      content,
      created_at: new Date(),
    })

    setPosts((state) => [response.data, ...state])
  }

  // Deletar um post
  async function deletePost(id: string) {
    try {
      await api.delete(`/posts/${id}`)

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
    } catch (error) {
      console.error("Erro ao excluir post: ", error)
    }
  }

  // Buscar um post por ID
  function getPostById(id: string): Post | undefined {
    return posts.find((post) => post.id === id)
  }

  // Atualizar um post
  async function updatePost(id: string, data: UpdatePostInput) {
    try {
      const response = await api.put(`/posts/${id}`, data)

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === id ? { ...post, ...response.data } : post,
        ),
      )
    } catch (error) {
      console.error("Erro ao excluir post: ", error)
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        queryPosts,
        createPost,
        deletePost,
        getPostById,
        updatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
