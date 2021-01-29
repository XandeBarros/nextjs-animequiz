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
        Loading...
      </Widget.Header>

      <Widget.Content>
        <img
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          alt="Gif Loading"
          src="https://i.gifer.com/EXfg.gif"
        />
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Parabéns!!!
        </h3>
      </Widget.Header>
      <Widget.Content>
        <Widget.P>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }

            return somatoriaAtual;
          }, 0)} */}
          {results.filter((x) => x === true).length}
          {' '}
          questões!
        </Widget.P>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`#0${index + 1} `}
              Resultado:
              {result === true
                ? ' Acertou'
                : ' Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState();
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

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
        <Widget.AlternativeForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <Widget.InputRadio
                  id={alternativeId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Widget.Button type="submit" disabled={!hasAlternativeSelected}>
            CONFIRMAR
          </Widget.Button>
          {isQuestionSubmited && isCorrect && <Widget.P>Você acertou!</Widget.P>}
          {isQuestionSubmited && !isCorrect && <Widget.P>Você errou!</Widget.P>}
        </Widget.AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  quiz: 'quiz',
  loading: 'loading',
  result: 'result',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.loading);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setQuestionIndex] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

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
            addResult={addResult}
          />
        )}
        {screenState === screenStates.loading && <LoadingWidget />}
        {screenState === screenStates.result && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/XandeBarros/nextjs-animequiz" />
    </QuizBackground>
  );
}
