import React from 'react';
import { Button } from 'components';

const TaskCard: React.FC = () => {
  return (
    <div className='bg-gray-100 flex items-end justify-between p-4 rounded-xl'>
      <div>
        <h1 className='text-[18px] font-semibold'>Buy Books</h1>
        <div className='text-[14px]'>Buy books for the next school year</div>
      </div>
      <Button
        name='Done'
        type='submit'
        variant='secondary'
      />
    </div>
  );
};

export default TaskCard;
