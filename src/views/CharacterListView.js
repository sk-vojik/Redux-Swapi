import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    
    return (
      <div>
      {this.props.fetching && 
        // return something here to indicate that you are fetching data
        <h3>Please wait while we render your characters!</h3>
      }

      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>

      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading,
})

export default connect(
  mapStateToProps,
  { getChars })(CharacterListView);
