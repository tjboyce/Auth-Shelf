import React, {Component} from 'react';
import { connect } from 'react-redux';




// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_ITEM' })
  }

  render() {

    return (
      <>
      <ul>
        <li>
          {/* {JSON.stringify(this.props.itemList)} */}
            {this.props.itemList.map((items) =>  
            <li key={items.id}> {items.description} / {items.image_url} </li> )} 
        </li>
      </ul>
        
      </>
    )
};
}

  const mapReduxStateToProps = reduxState => {
    return reduxState;
  };

  export default connect(mapReduxStateToProps)(InfoPage);
