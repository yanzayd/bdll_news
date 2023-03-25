import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general | entertainment | sports | sciences | health | business  | technology",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Result for: {searchParams?.term}</h1>

      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
