import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {

  const queryClient = useQueryClient()

  const {mutate:updateTask, isLoading} = useMutation({
    mutationFn: (item) => {
      console.log('item ', item);
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


  const handleChange = ({item}) => {

    updateTask(item)
  };

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => handleChange({ item })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => console.log('delete task')}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
