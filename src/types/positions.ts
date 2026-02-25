export type TPosition = {
  id: number;
  name: string;
  cost: number;
  isActive: boolean;
}

export type TCreatePosition = Omit<TPosition, 'id'>;
