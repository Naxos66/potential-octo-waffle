export type DestinationTag = 'Culture' | 'Nature' | 'Luxe';

export interface Destination {
  id: string;
  title: string;
  epoch: string;
  tags: DestinationTag[];
  description: string;
  highlights: string[];
  preparationTips: string[];
  price: string;
  imageUrl: string;
}
