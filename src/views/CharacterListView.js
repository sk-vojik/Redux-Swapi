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
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h3>Please wait while we render your characters!</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  isLoading: state.isLoading,
})

export default connect(
  mapStateToProps,
  { getChars })(CharacterListView);
