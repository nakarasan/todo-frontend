import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  storeTaskRequested,
  updateTaskRequested,
  loadTasksRequested,
} from 'store/task/taskSlice';

export function useStoreTask() {
  const dispatch = useDispatch();
  const onStoreTask = useCallback(
    async (values: any) => {
      await dispatch(storeTaskRequested(values));
    },
    [dispatch]
  );
  return { onStoreTask };
}

export function useUpdateTask() {
  const dispatch = useDispatch();
  const onUpdateTask = useCallback(
    async (values: any) => {
      await dispatch(updateTaskRequested(values));
    },
    [dispatch]
  );
  return { onUpdateTask };
}

export function useLoadTasks() {
  const dispatch = useDispatch();
  const onLoadTasks = useCallback(async () => {
    await dispatch(loadTasksRequested({}));
  }, [dispatch]);

  useEffect(() => {
    onLoadTasks();
  }, [onLoadTasks]);
  return { onLoadTasks };
}
