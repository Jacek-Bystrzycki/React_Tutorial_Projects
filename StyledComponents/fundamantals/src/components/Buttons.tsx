import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

export const DefaultButton = styled.button`
  background: #645cff;
  color: azure;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  width: 200px;
  margin: 1rem auto;
  display: block;
`;

export const HipsterButton = styled(DefaultButton)`
  color: #645cff;
  width: 400px;
  background: transparent;
  border: 1px solid #645cff;
`;

type SecondHipsterBtnType = {
  large?: boolean;
};
const SecondHipsterButton = styled(HipsterButton)<SecondHipsterBtnType>`
  width: 150px;
  display: inline-block;
  margin: 1rem 4rem;
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
        `}
`;

export const CenteredDivWrapper = styled.div`
  text-align: center;
  .hello {
    display: inline-block;
  }
`;

export const HipsterButtons = (): ReactElement => {
  return (
    <CenteredDivWrapper>
      <SecondHipsterButton>click me</SecondHipsterButton>
      <SecondHipsterButton as="a" href="http://www.wp.pl">
        click me
      </SecondHipsterButton>
      <SecondHipsterButton large>click me</SecondHipsterButton>
      <SecondHipsterButton>click me</SecondHipsterButton>
      <div
        // css prop dosent work ;(!!!!
        css={`
          display: inline-block;
        `}
        // className does work
        className="hello"
      >
        <h2>hello world</h2>
      </div>
    </CenteredDivWrapper>
  );
};
