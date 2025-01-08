import { PostsContext } from "@/contexts/PostContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"

// Post Detalhado
export function PostDetailed() {
  const { id } = useParams<{ id: string }>()
  const { getPostById } = useContext(PostsContext)

  const post = getPostById(id!)

  if (!post) {
    return <p>Post não encontrado</p>
  }

  return (
    <div className="p-6 rounded-md text-white bg-gray-500">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="text-sm text-gray-300">
        {new Date(post.created_at).toLocaleString()}
      </p>
      <div className="mt-4">{post.content}</div>
    </div>
  )
}
