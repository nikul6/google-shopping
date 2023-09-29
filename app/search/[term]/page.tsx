import { PageResult, SearchParams } from "@/typing";
import { redirect } from "next/navigation";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  }
}

async function SearchPage({ searchParams, params: { term } }: Props) {
  if (!term) {
    redirect("/");
  }

  const response = await fetch('http://localhost:3000/api/search', {
    method: "POST",
    body: JSON.stringify({ searchTerm: term, ...searchParams })
  });
  const results = (await response.json()) as PageResult[];

  console.log("results ---> ", results);

  return (
    <div>SearchPage</div>
  )
}

export default SearchPage;