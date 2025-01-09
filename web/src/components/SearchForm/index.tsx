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
    <form
      className="flex items-center gap-6 md:flex-col md:gap-4"
      onSubmit={handleSubmit(handleSearchPost)}
    >
      <input
        type="text"
        placeholder="Busque por um post..."
        className="flex-1 rounded-md border-2 p-4 outline-none hover:border-violet-600 focus:border-violet-600 dark:bg-transparent md:max-w-[360px]"
        {...register("query")}
      />

      <div className="flex gap-4">
        <CreateNewPost />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 rounded-md bg-violet-600 px-6 text-white hover:opacity-80 disabled:cursor-not-allowed sm:p-4"
        >
          <MagnifyingGlass size={24} />
          <p className="sm:hidden">Buscar</p>
        </button>
      </div>
    </form>
  )
}
