import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createDatalist,
  deleteDatalist,
  fetchDatalist,
  updateDatalist,
} from "./fetch";
import { CreateDatalistItem, DatalistItem, UpdateDatalistItem } from "./types";

// Fetch all Datalist items
export const useFetchDatalist = () => {
  return useQuery<DatalistItem[]>({
    queryKey: ["datalists"], // Wrap the queryKey in an object
    queryFn: fetchDatalist, // Specify the query function
  });
};

// Create a new item
export const useCreateDatalist = () => {
  const queryClient = useQueryClient();

  return useMutation<DatalistItem, unknown, CreateDatalistItem>(
    createDatalist, // Ensure createDatalist returns a Promise
    {
      onSuccess: () => {
        // You can invalidate queries with either a query key (array or string) or additional filters
        queryClient.invalidateQueries({ queryKey: ["datalists"] }); // Correct usage of invalidateQueries
      },
    }
  );
};

// Update an existing item
export const useUpdateDatalist = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation<DatalistItem, unknown, UpdateDatalistItem>(
    (updatedItem) => updateDatalist(id, updatedItem),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["datalists"] }); // Same fix here
      },
    }
  );
};

// Delete an item
export const useDeleteDatalist = () => {
  const queryClient = useQueryClient();
  return useMutation<DatalistItem, unknown, number>(
    (id) => deleteDatalist(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["datalists"] }); // Same fix here
      },
    }
  );
};
