import React, { Component } from 'react';
import { connect } from 'react-redux';





class ShelfForm extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ITEM' })
    }

    state = {
        description: '',
        imageUrl: '',
        user_id: this.props.user.id
    };


    handleSubmit = () => {
        console.log('in handleSubmit', this.state);
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state,
        })
        this.setState({                        //clear inputs
            description: '',
            imageUrl: '',
        })
    }


    handleChangeFor = (property) => (event) => {  //handling the parameter of property set below 
        console.log('in handleChange');
        this.setState({                        //currying
            ...this.state,
            [property]: event.target.value,
        })
    }





    render() {
        
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChangeFor('description')}// event listener
                />
                <input
                    placeholder="imageUrl"
                    type="text"
                    value={this.state.imageUrl}
                    onChange={this.handleChangeFor('imageUrl')}// event listener
                />
                <button type="Submit">Add Shelf Item</button>
            </form>

            <div>
                {JSON.stringify(this.props.itemList)}
                
            </div>
            
            </>
        )
    }
}



const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(ShelfForm);
