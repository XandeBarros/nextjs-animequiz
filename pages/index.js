import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              Anime Quiz
            </h1>
          </Widget.Header>
          <Widget.Content>
            <Widget.P>
              {db.description}
            </Widget.P>
            <Widget.Form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Widget.Input
                onChange={(infoEvent) => {
                  setName(infoEvent.target.value);
                }}
                placeholder="Digite seu nome de otaku..."
              />
              <Widget.Button type="submit" disabled={name.length === 0}>
                {`JOGAR ${name}`}
              </Widget.Button>
            </Widget.Form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>
              Quizes dos miguxos
            </h1>

            <p>
              Só quiz do bão
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/XandeBarros/nextjs-animequiz" />
    </QuizBackground>
  );
}
