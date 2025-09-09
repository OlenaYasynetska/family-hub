export interface Category {
  id: number;
  icon: string;
  title: string;
  bgColor: string;
  textColor: string;
}

export type CategoriesResponse = Category[];
