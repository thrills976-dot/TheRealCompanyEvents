import React, { createContext, useContext, useState, useEffect } from 'react';

export interface InspirationItem {
  id: string;
  title: string;
  image?: string;
  type: 'portfolio' | 'service';
}

interface InspirationContextType {
  items: InspirationItem[];
  toggleItem: (item: InspirationItem) => void;
  isInBoard: (id: string) => boolean;
  clearBoard: () => void;
}

const InspirationContext = createContext<InspirationContextType | undefined>(undefined);

export function InspirationProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InspirationItem[]>(() => {
    try {
      const saved = localStorage.getItem('inspirationBoard');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('inspirationBoard', JSON.stringify(items));
  }, [items]);

  const toggleItem = (item: InspirationItem) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.filter(i => i.id !== item.id);
      return [...prev, item];
    });
  };

  const isInBoard = (id: string) => items.some(i => i.id === id);
  const clearBoard = () => setItems([]);

  return (
    <InspirationContext.Provider value={{ items, toggleItem, isInBoard, clearBoard }}>
      {children}
    </InspirationContext.Provider>
  );
}

export const useInspiration = () => {
  const context = useContext(InspirationContext);
  if (context === undefined) throw new Error('useInspiration must be used within an InspirationProvider');
  return context;
};
