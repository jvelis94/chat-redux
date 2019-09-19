import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { bindActionCreators } from 'redux';


class MessageList extends Component {

    componentWillMount() {
        this.fetchMessages();
    }

    componentDidMount() {
        setInterval(this.fetchMessages, 10000)
    }
    
    fetchMessages = () => {
        this.props.fetchMessages(this.props.selectedChannel);
    }

   

    render() {
        return (
            <div>
                {
                    this.props.messages.map((message) => {
                        return <Message key={message.id} message={message} />
                    })
                }
                <MessageForm />
            </div>
        ) 
    }  
}

function mapStateToProps(state) {
    return {
      messages: state.messages,
      selectedChannel: state.selectedChannel
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMessages }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MessageList);