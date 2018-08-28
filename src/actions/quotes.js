export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote: Object.assign({}, quote, { votes: 0 })
  }
}

export const removeQuote = quote => {
  console.log('hit REMOVE action with id:', quote)
  return {
    type: 'REMOVE_QUOTE',
    quote
  }
}

export const upVoteQuote = quote => {
  console.log('hit UPVOTE action with id:', quote)
  return {
    type: 'UPVOTE_QUOTE',
    quote
  }
}

export const downVoteQuote = quote => {
  console.log('hit DOWNVOTE action with id:', quote)
  return {
    type: 'DOWNVOTE_QUOTE',
    quote
  }
}

// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]
