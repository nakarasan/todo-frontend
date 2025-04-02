import React from 'react';
import { useSelector } from 'react-redux';
import { useLoadTasks } from 'hooks';
import { RootState } from 'store';
import TaskForm from 'templates/task/task-form';
import TaskList from 'templates/task/task-list';

const Task: React.FC = () => {
  const { onLoadTasks } = useLoadTasks();
  const { tasks } = useSelector((state: RootState) => state.task);

  return (
    <div className='min-h-screen flex'>
      <div className='bg-gray-100 basis-[50%] border-r-2 border-gray-400'>
        <TaskForm />
      </div>
      <div className='bg-gray-300 basis-[50%]'>
        <TaskList />
      </div>
    </div>
  );
};

export default Task;
