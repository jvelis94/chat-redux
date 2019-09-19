import React from 'react';

const Message = (props) => {
    const { author, content, created_at } = props.message;
    return(
        <div>
            <section id='author-info'>
                <p>{author} <small>{created_at}</small></p>
            </section>
            <section id='content'>
                <p>{content}</p>
            </section>
        </div>
    )
}

export default Message;