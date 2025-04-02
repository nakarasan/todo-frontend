import React from 'react';
import TaskCard from './card';

const TaskList: React.FC = () => {
  return (
    <div className='py-8 px-[6vw] space-y-8'>
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default TaskList;
