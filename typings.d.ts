type Article = {
  [x: string]: ReactNode;
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

type NewsResponse = {
  data: Article[];
  pagination: Pagination;
};

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "sciences"
  | "sports"
  | "technology";
