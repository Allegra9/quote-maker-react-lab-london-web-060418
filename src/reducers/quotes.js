function reducer(state = [], action) {
  let index;
  let quote;

  console.log(action)
  console.log(action.type)

  switch (action.type) {
    case 'ADD_QUOTE':
      console.log("ACTION:", action)
      console.log([...state, action.quote])
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      console.log("Action State REMOVE:", state)
      console.log("Action REMOVE:", action)
      console.log("Quote", action.quote)
      console.log("Quote.id", action.quote.id)
      return state.filter(quote => quote.id !== action.quote.id);
      // index = state.indexOf(action.id)
      // return [...state.slice(0, index), ...state.slice(index+1)]

    case 'UPVOTE_QUOTE':
      console.log("Upvote ACTION:", action.quote)
      index = state.findIndex(quote => quote.id === action.quote.id)
      quote = state[index]
      console.log(quote, "upvote")
      return [
        ...state.slice(0, index),
         Object.assign({}, quote, { votes: quote.votes+=1 }),
        ...state.slice(index+1)
      ]

    case 'DOWNVOTE_QUOTE':
      console.log("Downvote ACTION:", action.quote) 
      index = state.findIndex(quote => quote.id === action.quote.id)
      quote = state[index]
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          //{...quote, votes: quote.votes-- },
           Object.assign({}, quote, { votes: quote.votes-=1 }),
          ...state.slice(index+1)
        ]
      }

    default:
      return state
  }
}

export default reducer
