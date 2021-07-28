import styled from 'styled-components/macro';
import jumboData from './fixtures/jumbo.json';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';
import { Accordion } from './components';
import FaqsContainer from './containers/faqs';

console.log(jumboData);
export default function App() {
  // const Source = styled.src``;

  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
    //
  );
}
