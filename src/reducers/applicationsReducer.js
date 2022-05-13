const applicationsReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_APPLICATIONS":
        state = action.payload;
        return state;

      case "ADD_APPLICATION":
        state = [...state, action.payload];
        return state;

      case "DELETE_APPLICATION":
        const modifiedApplications = state.filter((application) =>
          application.id === action.payload ? null : application
        );
        state = modifiedApplications;
        return state;
        
      case "UPDATE_APPLICATION":
        const updatedApplications = state.filter((application) =>
          application.id === action.payload.id
            ? Object.assign(application, action.payload)
            : application
        );
        state = updatedApplications;
        return state;

      case "RESET_APPLICATION":
        state = [{ companyName: null, position: null, status: null }];
        return state;
      
      default:
          return state;
    }
}

export default applicationsReducer;
  