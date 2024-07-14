import { useUser } from '@clerk/nextjs';
import { AddTaskForm } from '@/components/AddTaskForm';

const AddTaskPage = () => {
  const { user } = useUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  if (user.publicMetadata.role !== 'SUPERUSER') {
    return <p>Access Denied</p>;
  }

  return (
    <div>
      <h1>Add Task</h1>
      <AddTaskForm />
    </div>
  );
};

export default AddTaskPage;
