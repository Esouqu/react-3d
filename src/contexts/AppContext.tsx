import { IEntity } from '@/lib/interfaces';
import { createContext, ReactNode, useState } from 'react';

interface IEntityList {
  [key: string]: IEntity;
}

type AppContextType = {
  floorSize: number;
  entities: IEntityList;
  selectedEntity: IEntity | null;
  selectEntity: (entity: IEntity | null) => void;
  addEntity: (data: Omit<IEntity, 'id' | 'position' | 'color'>) => void;
  clearEntities: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [entities, setEntities] = useState<IEntityList>({} as IEntityList);
  const [selectedEntity, setSelectedEntity] = useState<IEntity | null>(null);
  const floorSize = 20;

  function clearEntities() {
    setEntities({});
  }

  function selectEntity(entity: IEntity | null) {
    setSelectedEntity((prevEntity) => {
      if (prevEntity?.id === entity?.id) {
        return null;
      }

      return entity;
    });
  }

  function addEntity(data: Omit<IEntity, 'id' | 'position' | 'color'>) {
    setEntities((prevEntities) => {
      const size = floorSize - 1;
      const color = `#${(Math.floor(Math.random() * 16777215) >>> 0).toString(16).padStart(6, '0')}`;
      const position: [number, number, number] = [Math.random() * size - size / 2, 0, Math.random() * size - size / 2];
      const id = `${data.type}_${Object.keys(prevEntities).length + 1}`;

      return {
        ...prevEntities,
        [id]: {
          id,
          color,
          position,
          ...data,
        },
      }
    });
  }

  const value = {
    floorSize,
    entities,
    addEntity,
    clearEntities,
    selectedEntity,
    selectEntity
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext }