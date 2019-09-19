import React, { Component } from 'react';
import { createMessage } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        this.messageBox.focus();
      }
    
    handleInput = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.input);
        this.setState({
            input: ''
        })
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="channel-editor">
                    <input 
                        onChange={this.handleInput} 
                        type='text' 
                        value={this.state.input} 
                        ref={(input) => { this.messageBox = input; }}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createMessage }, dispatch);
  }
  
  function mapStateToProps(state) {
    return {
      currentUser: state.currentUser,
      selectedChannel: state.selectedChannel
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

