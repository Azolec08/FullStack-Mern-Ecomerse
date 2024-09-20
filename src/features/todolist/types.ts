// src/types.ts

export interface DatalistItem {
  id: number;
  attributes: {
    title: string;
    completed: boolean;
  };
}

export interface CreateDatalistItem {
  title: string;
  completed: boolean;
}

export interface UpdateDatalistItem {
  title?: string;
  completed?: boolean;
}
