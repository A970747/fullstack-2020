export const addNote = (e) => {
  return {
    type: "ADD_NOTE", 
    data: { 
      anecdote: e.target.elements[0].value
    }
  };
};

export const addVote = (id) => {
  return {
    type: "INCREMENT_VOTE", 
    data: { id }
  };
};