import { useDeleteTask, useEditTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {

 const {deleteTask, isDeleting} = useDeleteTask()
 const {editTask} = useEditTask()

  const handleChange = ({item}) => {
    editTask(item)
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId)
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
        disabled={isDeleting}
        onClick={() => handleDelete(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
