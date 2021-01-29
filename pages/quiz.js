/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Parabéns!!!
        </h3>
      </Widget.Header>
      <Widget.Content>
        <Widget.P>Você acertou X questões!</Widget.P>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',

        }}
        alt="Aguardando imagem"
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <Widget.P>
          {question.description}
        </Widget.P>
        <Widget.Form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <Widget.InputRadio
                  id={alternativeId}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Widget.Button type="submit">
            CONFIRMAR
          </Widget.Button>
        </Widget.Form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  quiz: 'quiz',
  loading: 'loading',
  wrongAnswer: 'wrongAnswer',
  correctAnswer: 'correctAnswer',
  result: 'result',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.loading);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setQuestionIndex] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.quiz);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.result);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.quiz && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.loading && <LoadingWidget />}
        {screenState === screenStates.result && <ResultWidget />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/XandeBarros/nextjs-animequiz" />
    </QuizBackground>
  );
}
