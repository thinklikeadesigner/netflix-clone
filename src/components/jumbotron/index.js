/* eslint-disable react/prop-types */
import React from 'react';
import {
  Inner,
  Container,
  Item,
  Pane,
  Title,
  SubTitle,
  Image,
  Video,
  TV,
} from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Video = function JumbotronVideo({ children, ...restProps }) {
  return <Video {...restProps}>{children}</Video>;
};
Jumbotron.TV = function JumbotronTV({ children, ...restProps }) {
  return <TV {...restProps}>{children}</TV>;
  // images and video for video tv effect
  // "image": "/images/misc/tv.png",
  // "video": "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
};
