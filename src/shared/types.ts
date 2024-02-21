export interface ServiceType {
  icon: JSX.Element;
  title: string;
  description: string;
  iconBg: string;
  shadowColor: string;
  borderColor: string;
}

export interface StatType {
  number: string;
  title: string;
}

export interface QuestionType {
  title: string;
  message: string;
}

export interface Dentists {
  name: string;
  role: string;
  image: string;
}

export interface ReviewType {
  user: string;
  message: string;
}

export enum SelectedPage {
  Home = 'home',
  Services = 'services',
  AboutUs = 'aboutUs',
  Reviews = 'reviews',
  Faq = 'faq',
}
