import { z } from "zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { PostsContext } from "@/contexts/PostContext"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { CreateNewPost } from "@/components/NewPostModal/index"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

// Formulário de busca
export function SearchForm() {
  const { queryPosts } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>()

  async function handleSearchPost(data: SearchFormInput) {
    await queryPosts(data.query)
  }

  return (
    <form className="flex gap-6" onSubmit={handleSubmit(handleSearchPost)}>
      <input
        type="text"
        placeholder="Busque por um post..."
        className="border-2 p-4 rounded-md flex-1 outline-none dark:bg-transparent focus:border-violet-600 hover:border-violet-600"
        {...register("query")}
      />

      <CreateNewPost />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex gap-2 items-center px-6 text-white rounded-md disabled:cursor-not-allowed bg-violet-600 hover:opacity-80"
      >
        <MagnifyingGlass size={24} />
        Buscar
      </button>
    </form>
  )
}
