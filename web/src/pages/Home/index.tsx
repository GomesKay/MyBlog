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
      <header className="flex items-center justify-between p-6 border-b-2">
        <Link to="/" className="flex gap-4 items-center">
          <img src={logo} className="size-10" />

          <h1 className="text-2xl font-serif font-medium">MyBlog</h1>
        </Link>

        <h1 className="text-3xl">Home</h1>

        <ThemeSwitch />
      </header>

      <main className="pt-12">
        <SearchForm />

        <div className="pt-12 flex gap-6 flex-wrap items-center justify-center">
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
