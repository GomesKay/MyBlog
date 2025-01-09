import { ptBR } from "date-fns/locale"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { PostsContext } from "@/contexts/PostContext"
import { UpdatePost } from "@/components/UpdatePostModal"
import { Dot, ThumbsUp, Trash } from "@phosphor-icons/react"

interface Post {
  id: string
  title: string
  content: string
  created_at: string
}

interface PostCardProps {
  post: Post
}

// Post Card
export function PostCard({ post }: PostCardProps) {
  const { deletePost } = useContext(PostsContext)
  const [like, setLike] = useState(0)

  const createdAtDate = new Date(post.created_at)
  const isValidDate = !isNaN(createdAtDate.getTime())

  return (
    <div className="flex flex-col gap-4 truncate rounded-md bg-gray-500 p-6 text-white">
      <span className="flex items-center">
        <Link to={`/posts/${post.id}`} className="text-2xl font-semibold">
          {post.title}
        </Link>

        <Dot size={32} />

        <p>
          {isValidDate
            ? formatDistanceToNow(createdAtDate, {
                addSuffix: true,
                locale: ptBR,
              })
            : "Data inválida"}
        </p>
      </span>

      <p>{post.content}</p>

      <div className="flex items-center gap-8">
        <span className="flex items-center gap-2">
          <ThumbsUp
            size={24}
            onClick={() => {
              setLike((prev) => (prev += 1))
            }}
            className="cursor-pointer hover:text-blue-400"
            aria-label="Curtir"
          />

          <p>{like}</p>
        </span>

        <UpdatePost postId={post.id} />

        <Trash
          size={24}
          onClick={() => {
            deletePost(post.id)
          }}
          className="cursor-pointer hover:text-red-400"
          aria-label="Excluir"
        />
      </div>
    </div>
  )
}
