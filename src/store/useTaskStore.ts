import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TaskStatus = 'todo' | 'in_progress' | 'completed';

export interface Task { 
  id: string; 
  title: string; 
  assignee: string; 
  status: TaskStatus; 
  priority: 'low' | 'medium' | 'high'; 
}

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, newStatus: TaskStatus) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [
        { id: 't1', title: 'Confirmar DJ Paiva', assignee: 'João', status: 'completed', priority: 'high' },
        { id: 't2', title: 'Aprovar flyers nas redes sociais', assignee: 'Maria', status: 'in_progress', priority: 'medium' },
        { id: 't3', title: 'Verificar estoque do bar VIP', assignee: 'Carlos', status: 'todo', priority: 'high' },
      ],
      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (id, updates) => set((state) => ({ tasks: state.tasks.map(t => t.id === id ? { ...t, ...updates } : t) })),
      deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter(t => t.id !== id) })),
      moveTask: (id, newStatus) => set((state) => ({ tasks: state.tasks.map(t => t.id === id ? { ...t, status: newStatus } : t) })),
    }),
    { name: 'flash-events-storage' }
  )
);
