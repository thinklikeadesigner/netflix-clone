import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.TV>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            <Jumbotron.Video src={item.video} type="video/mp4" autoPlay loop muted>
              <source style={{ position: 'absolute' }} src={item.video} type="video/mp4" />
            </Jumbotron.Video>
          </Jumbotron.TV>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
