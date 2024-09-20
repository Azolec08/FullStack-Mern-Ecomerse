import { makeRequest } from "@/shared/hooks/makeRequest";
import { CreateDatalistItem, DatalistItem, UpdateDatalistItem } from "./types";

// Fetch all items
export const fetchDatalist = async (): Promise<DatalistItem[]> => {
  const response = await makeRequest.get("/datalists?populate=*");
  return response.data.data;
};

// Create a new item
export const createDatalist = async (
  newItem: CreateDatalistItem
): Promise<DatalistItem> => {
  const response = await makeRequest.post("/datalists", {
    data: newItem,
  });
  return response.data.data;
};

// Update an existing item
export const updateDatalist = async (
  id: number,
  updatedItem: UpdateDatalistItem
): Promise<DatalistItem> => {
  const response = await makeRequest.put(`/datalists/${id}`, {
    data: updatedItem,
  });
  return response.data.data;
};

// Delete an item
export const deleteDatalist = async (id: number): Promise<DatalistItem> => {
  const response = await makeRequest.delete(`/datalists/${id}`);
  return response.data.data;
};
