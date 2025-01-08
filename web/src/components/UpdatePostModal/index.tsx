import { z } from "zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PencilSimple } from "@phosphor-icons/react"
import { PostsContext } from "@/contexts/PostContext"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

interface UpdatePostProps {
  postId: string
}

const updatePostFormSchema = z.object({
  title: z.string().min(2, "O título é obrigatório"),
  content: z.string().min(4, "Conteúdo do post é obrigatório"),
})

type NewPostFormInputs = z.infer<typeof updatePostFormSchema>

// Modal para atualizar post
export function UpdatePost({ postId }: UpdatePostProps) {
  const { updatePost } = useContext(PostsContext)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPostFormInputs>({
    resolver: zodResolver(updatePostFormSchema),
  })

  async function handleUpdatePost(data: NewPostFormInputs) {
    if (!postId) {
      console.error("ID do post não encontrado")

      return
    }

    await updatePost(postId, data)

    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PencilSimple
          size={24}
          className="cursor-pointer hover:text-green-400"
          aria-label="Editar"
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>Edite seu post</DialogHeader>

        <form
          onSubmit={handleSubmit(handleUpdatePost)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Escreva um novo título do seu post"
              className="px-4 py-3 rounded-sm text-black outline-none border-2 hover:border-violet-600"
              aria-label="Novo título do post"
              {...register("title")}
            />
            {errors.title && (
              <span className="text-red-400 font-medium">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Nova descrição do post"
              className="px-4 py-3 rounded-sm text-black outline-none border-2 hover:border-violet-600"
              {...register("content")}
            />
            {errors.content && (
              <span className="text-red-400 font-medium">
                {errors.content.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-3 w-20 rounded-md text-white bg-violet-600 hover:opacity-80"
          >
            Atualizar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
