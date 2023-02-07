import { Article } from './article.model'

export interface Product {
  id: string;
  brandname: string;
  name: string;
  descriptionText: string;
  articles: Article[];
}
