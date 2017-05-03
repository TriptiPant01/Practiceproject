import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.handlecomment = this.handlecomment.bind(this);
      
    }

    handlecomment (event) {
        if(event.keyCode !=13) {
            return ;
        }
        else {
         
            this.props.addcomment(event.target.value);
            event.target.value ="";
        }
       
       
    }
    render() {
        let comment = this.props.comment;
        console.log(comment);
        return (
            <div className="comment-block">
                <div className="commentText">
                    <input type="text" placeholder ="Comment" 
                    onKeyDown={this.handlecomment} ref="comment"
                    />
                   
          <ul>
                {comment.map((proj,index) => <li key={index}><strong>{proj}</strong>
                 
                  </li>)}
           </ul>

                </div>
            </div>

        )
    }
}

export default Comment;