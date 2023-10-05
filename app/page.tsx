import Link from 'next/link'

const SEARCHES = [
  {
    id: 1,
    term: "Monitors over $500",
    url: "/search/monitors?sort_by=r&min_price=500",
    color: "bg-blue-500"
  },
  {
    id: 2,
    term: "Women Kurti's",
    url: "/search/kurtis",
    color: "bg-green-600"
  },
  {
    id: 3,
    term: "Oneplus Mobile Phones",
    url: "/search/oneplus",
    color: "bg-yellow-400"
  },
  {
    id: 4,
    term: "Dinner Sets",
    url: "/search/dinnerset",
    color: "bg-pink-600"
  },
  {
    id: 5,
    term: "Men Wallet's under $250",
    url: "/search/menwallet?sort_by=r&max_price=250",
    color: "bg-purple-600"
  }
]

export default function Home() {
  return (
    <main className="p-10 pt-0 text-center md:text-left">
      <h1 className='text-3xl font-extralight mb-5'>
        Welcome to Google Shopping
      </h1>
      <h2 className='mb-5'>
        Get started by clicking one of the example search item or
        typing in
        an item yourself above!
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5'>
        {SEARCHES.map((search) => (
          <Link
            prefetch={false}
            key={search.id}
            href={search.url}
            className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}>
            {search.term}
          </Link>
        ))}
      </div>
    </main>
  )
}
