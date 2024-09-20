// src/components/Todolist.tsx
import React, { useState } from "react";
import { DatalistItem } from "./types";
import {
  useCreateDatalist,
  useDeleteDatalist,
  useFetchDatalist,
  useUpdateDatalist,
} from "./useMutation";

const Todolist: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editTodoTitle, setEditTodoTitle] = useState<string>("");

  const { data: datalist, isLoading } = useFetchDatalist();
  const createTodoMutation = useCreateDatalist();
  const updateTodoMutation = useUpdateDatalist(editTodoId || 0); // Default to 0 if no ID
  const deleteTodoMutation = useDeleteDatalist();

  if (isLoading) return <div>Loading...</div>;

  const handleAddTodo = () => {
    if (newTodo) {
      createTodoMutation.mutate({ title: newTodo, completed: false });
      setNewTodo("");
    }
  };

  const handleEditTodo = (id: number, title: string) => {
    setEditTodoId(id);
    setEditTodoTitle(title);
  };

  const handleUpdateTodo = () => {
    if (editTodoTitle && editTodoId) {
      updateTodoMutation.mutate({ title: editTodoTitle });
      setEditTodoId(null);
      setEditTodoTitle("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {datalist?.map((todo: DatalistItem) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editTodoTitle}
                  onChange={(e) => setEditTodoTitle(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </div>
            ) : (
              <div>
                <span>{todo.attributes.title}</span>
                <button
                  onClick={() => handleEditTodo(todo.id, todo.attributes.title)}
                >
                  Edit
                </button>
                <button onClick={() => deleteTodoMutation.mutate(todo.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      mark
    </div>
  );
};

export default Todolist;
