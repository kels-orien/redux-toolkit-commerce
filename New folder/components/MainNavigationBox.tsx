import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  align-items: center;
  padding: 20px 30px 30px 17px;
  color: black;
  border-radius: 4px;
  width: max-content
  box-shadow: rgba(0,0,0, 0.15) 0px 8px 24px

  > div > a {
    color: white;
    display: block;
    font-weight: 500;
    padding: 9px 0;
    text-decoration: none;
  }

  > div > a:hover {
    color: #dddddd;
  }

  > div > hr {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

const SecWrapper = styled.div`
  box-sizing: border-box;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  padding-left: 1rem;
  padding-left: 1rem;
  margin: 0rem;
  color: white;
`
const SecSecondaryWrapper = styled.div`
  overflow-y: visible;
  white-space: normal;
  margin: -1rem;
`

const UIWrapper = styled.ul`
  list-style: none;
  margin-top: 0.5rem;
  padding: 0px;
  text-align: left;
`

const LiWrapper = styled.li`
  list-style: none;
  margin-top: 0.5rem;
  padding: 0px;
  text-align: left;
`
const AWrapper = styled.span`
  display: block;
  cursor: pointer;
  padding: 0.5rem 1rem;
  pointer-events: auto;
  text-decoration: none;
 `


const AdivWrapper = styled.div`
 Box-sizing: border-box;
 Transition: all 300ms;
 Padding: 0.25rem 0rem;
 Margin: 0rem;
 `

const AdivSecondWrapper = styled.div`
 box-sizing: border-box;
 transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
 padding: 0.25rem 0rem;
 margin: 0rem;
 `
const AdivThirdWrapper = styled.div`
  Align-self:center;
  Align-items: center;
  Display: inline-flex;
  Filter: none;
  Cursor: unset;
  Vertical-align: bottom;
  Height: unset;
  Width: unset;
`


const Span = styled.span`
  Margin: 0px;
  Position: relative;
  Transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s
  Font-weight: 500;
  Line height: 1.5 !important ;
  Cursor: pointer ;
`

const MainNavigationBox = ({ links }: any) => {
  return (
    <Wrapper key="1">
      
        {links.map((linkOrSeparator:any, index:number) => {
          if (linkOrSeparator === null) {
            return <hr key={index} />;
          }
          return (


            <SecWrapper key={linkOrSeparator.id}>
              <SecSecondaryWrapper key={linkOrSeparator.id}>
                <UIWrapper key={linkOrSeparator.id}>
                  <LiWrapper key={linkOrSeparator.id}>
                    <Link to={linkOrSeparator.to}><AWrapper key={linkOrSeparator.id}>
                      <AdivWrapper>
                        <AdivSecondWrapper>
                          <AdivThirdWrapper>
                            <Span>
                              {linkOrSeparator.label}
                            </Span>
                          </AdivThirdWrapper>
                        </AdivSecondWrapper>
                      </AdivWrapper>
                    </AWrapper></Link>
                  </LiWrapper>
                </UIWrapper>
              </SecSecondaryWrapper>
            </SecWrapper>
          );
        })}
      
      <SecWrapper>
        <SecSecondaryWrapper>
          <UIWrapper>
            <LiWrapper>
              <AWrapper>
                <AdivWrapper>
                  <AdivSecondWrapper>
                    <AdivThirdWrapper>
                      <Span>
                        Top Deals
                      </Span>
                    </AdivThirdWrapper>
                  </AdivSecondWrapper>
                </AdivWrapper>
              </AWrapper>
            </LiWrapper>
          </UIWrapper>
        </SecSecondaryWrapper>
      </SecWrapper>




    </Wrapper>
  );
};

export default MainNavigationBox;
