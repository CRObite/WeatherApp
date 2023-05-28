const initialState = {
    currentIndex: 0,
  };
  
  const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_IMAGE_INDEX':
        return {
          ...state,
          currentIndex: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default sliderReducer;