export interface ICreateGameDTO {
  name: string;
  description: string;
  thumb: string;
  price: number;
  platforms: string[];
  stores: string[];
}