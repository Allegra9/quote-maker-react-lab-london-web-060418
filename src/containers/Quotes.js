import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upVoteQuote, downVoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {

    const { quotes, removeQuote, upVoteQuote, downVoteQuote } = this.props;

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               { quotes.map(quote =>
                     <QuoteCard key={quote.id} quote={quote}
                       removeQuote={removeQuote} upVoteQuote={upVoteQuote}
                       downVoteQuote={downVoteQuote}
                     />
                 )
                 }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => ({
  removeQuote: (quote) => dispatch(removeQuote(quote)),
  upVoteQuote: (quote) => dispatch(upVoteQuote(quote)),
  downVoteQuote: (quote) => dispatch(downVoteQuote(quote))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);

//removeQuote, upVoteQuoteQuote, downVoteQuote
// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]
