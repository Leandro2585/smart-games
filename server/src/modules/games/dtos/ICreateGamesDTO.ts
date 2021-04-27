export interface ICreateGameDTO {
  name: string;
  description: string;
  thumb: string;
  price: number;
  platforms_id: string[];
}