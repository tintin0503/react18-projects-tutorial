import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data
    }
  })
  return { data, isError, isLoading }
}

export const useEditTask = () => {
  const queryClient = useQueryClient()

  const {mutate:editTask, isLoading} = useMutation({
    mutationFn: (item) => {
      customFetch.patch(`/${item.id}`, { isDone: !item.isDone })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks']});
      toast.success(' task updated')
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.msg)
    }
  })

  return { editTask }
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  const {mutate:deleteTask, isDeleting} = useMutation({
    mutationFn: (taksId) => {
      customFetch.delete(`/${taksId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks']});
      toast.success(' task updated')
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.msg)
    }
  })

  return { deleteTask, isDeleting }
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const {mutate:createTask, isLoading} = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks']});
      toast.success(' task added')
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.msg)
    }
  })

  return { createTask, isLoading }
}