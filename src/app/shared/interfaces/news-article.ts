import { Publisher } from "./publisher";

export interface NewsArticle {
  id: string;
  publisher: Publisher;
  title: string;
  author: string;
  published_utc: Date;
  article_url: string;
  tickers: string[];
  amp_url: string;
  image_url: string;
  description: string;
  keywords: string[];
}
