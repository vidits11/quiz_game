import Options from "./Options";

function Question({ question, dispatch, answer, showFunFact }) {
  return (
    <div className="question_container">
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={(action) => {
          dispatch(action);
        }}
        answer={answer}
      />
      {showFunFact && (
        <div className="fun_fact">
          <strong>Fun Fact 💡:</strong> {question.funFact}
        </div>
      )}
    </div>
  );
}

export default Question;


