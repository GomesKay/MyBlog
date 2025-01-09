import logo from "@/assets/logo.svg"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ThemeSwitch } from "@/components/ThemeSwitch/index"
import { SearchForm } from "@/components/SearchForm"
import { PostCard } from "@/components/PostCard"
import { PostsContext } from "@/contexts/PostContext"

export function Home() {
  const { posts, queryPosts } = useContext(PostsContext)

  useEffect(() => {
    queryPosts()
  }, [])

  return (
    <div className="h-screen p-6">
      <header className="flex items-center justify-between border-b-2 p-6">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} className="size-10" />

          <h1 className="font-serif text-2xl font-medium">MyBlog</h1>
        </Link>

        <h1 className="text-3xl md:hidden">Home</h1>

        <ThemeSwitch />
      </header>

      <main className="pt-12">
        <SearchForm />

        <div className="flex flex-wrap items-center justify-center gap-6 pt-12 md:gap-4">
          {posts?.length ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-gray-400">Nenhum post encontrado</p>
          )}
        </div>
      </main>
    </div>
  )
}
