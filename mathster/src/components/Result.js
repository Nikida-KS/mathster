import React from 'react';

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  renderQuestions(){
    return  this.props.quizResult.map((data,index) =>{
        return <div className="list-grp">
          {data.question}=
          <br></br>You chose {data.answers[this.props.answers[index]].content}
          <br></br>{data.answers[this.props.answers[index]].type}
          </div>
    })
  }

  render (){
    return (
    <div  className="quiz-story">
      <div>
        <strong>Lets see your results</strong>!
        <div>{this.renderQuestions()}</div>
      </div>
    </div>
    )
  }
}

export default Result;
