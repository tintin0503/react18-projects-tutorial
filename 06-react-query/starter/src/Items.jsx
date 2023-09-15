import SingleItem from './SingleItem';
import { useFetchTasks } from './reactQueryCustomHooks';
const Items = () => {
  const {data, isError, isLoading} =  useFetchTasks();
  
  if (isLoading) {
    return <p style={{ marginTop: '1rem'}}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem'}}>There was an error...</p>
  }
// console.log(error)
//   if (error) {
//     return <p style={{ marginTop: '1rem'}}>There was an error: {error.response.data}</p>
//   }

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
