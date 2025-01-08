import { z } from "zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Plus } from "@phosphor-icons/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { PostsContext } from "@/contexts/PostContext"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

const newPostFormSchema = z.object({
  title: z.string().min(2, "O título é obrigatório"),
  content: z.string().min(4, "Conteúdo do post é obrigatório"),
})

type NewPostFormInputs = z.infer<typeof newPostFormSchema>

// Modal para criaçaõ do post
export function CreateNewPost() {
  const { createPost } = useContext(PostsContext)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPostFormInputs>({
    resolver: zodResolver(newPostFormSchema),
  })

  async function handleCreateNewPost(data: NewPostFormInputs) {
    const { title, content } = data

    await createPost({
      title,
      content,
    })

    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center rounded-md gap-2 p-6 text-white bg-violet-600 hover:opacity-80"
        >
          <Plus size={24} />
          Novo post
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="text-xl font-medium">
          Crie um post
        </DialogHeader>

        <form
          onSubmit={handleSubmit(handleCreateNewPost)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Escreva o título do seu post"
              className="px-4 py-3 rounded-sm text-black outline-none border-2 hover:border-violet-600"
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
              placeholder="Descrição do post"
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
            Criar
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
