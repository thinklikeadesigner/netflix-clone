import React from 'react';
import { OptForm, Feature } from '../components';
import { FaqsContainer, FooterContainer, JumbotronContainer, HeaderContainer } from '../containers';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programs, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your membership
            </OptForm.Text>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
