export type EntityType = 'box' | 'pyramid';

export interface IEntity {
  id: string;
  length: number;
  width: number;
  height: number;
  type: EntityType
  color: string;
  position: [number, number, number];
}