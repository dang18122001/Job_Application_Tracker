export const setApplications = tasks => {
    return {
      type: 'SET_APPLICATIONS',
      payload: tasks
    }
  };
  
  export const tasksError = errorMessage => {
    return {
      type: 'TASKS_ERROR'
    }
  };