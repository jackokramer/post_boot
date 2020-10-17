export const reducer = (state, action) => {
    if(action.type === 'Add_ITEM'){
      const newItems = [...state.people, action.payload]
      return {
        ...state, 
        people:newItems, 
        isModalOpen:true, 
        modalContent:'item added'
      }
    }
      if(action.type === "No_value"){
      return {...state, isModalOpen:true, modalContent: 'please enter a value'}
      }
    if(action.type =='CLOSE_MODAL'){
      return {...state,isModalOpen:false}
    }
    if(action === "Remove_Item"){
      const newPeople = state.people.filter((person) => person.id !== action.payload)
      return {...state, people:newPeople};
    }
      throw new Error ('no matching type')

    }
