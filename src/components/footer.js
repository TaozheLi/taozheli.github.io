import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  position: relative;
  min-height: 70px;
  justify-content: flex-end;
  padding: 25px 100px;
  @media (max-width: 900px) { min-height: 70px; padding: 25px; }
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const StyledVisitorCorner = styled.aside`
  position: static;
  align-self: flex-end;
  width: 660px;
  max-width: 100%;
  margin-top: 24px;
  a { display: block; }
  a::after { display: none; }
  .map-host { width: 100%; min-height: 140px; overflow: hidden; border-radius: var(--border-radius); }
  .map-host #mapmyvisitors-widget, .map-host .mapmyvisitors-map { max-width: 100%; }
  .map-status { font-size: var(--fz-sm); color: var(--light-slate); }
  .map-credit { margin-top: 5px; color: var(--light-slate); font-family: var(--font-mono); font-size: 11px; text-align: right; }
  @media (max-width: 900px) { position: static; align-self: flex-end; margin-top: 24px; max-width: 100%; }
`;

const LiveVisitorMap = () => {
  const host = useRef(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const container = host.current;
    const script = document.createElement('script');
    script.id = 'mapmyvisitors';
    script.async = true;
    script.src = 'https://mapmyvisitors.com/map.js?cl=8a9eb8&w=a&t=tt&d=FJYO2o06JlGVzPCTscXafVTAxJNfugeJ-M-ZLH9BXV4&co=112240&ct=ccd6f6&cmo=ff616c&cmn=ff616c';
    script.onerror = () => setFailed(true);
    container.appendChild(script);
    return () => { container.innerHTML = ''; };
  }, []);
  return (
    <>
      <div className="map-host" ref={host} aria-label="Visitor world map" />
      {failed && <p className="map-status">Visitor map is temporarily unavailable. Open the statistics link below.</p>}
    </>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabIndex="-1">
        <a href="https://brittanychiang.com">
          <div>Original design by Brittany Chiang</div>


        </a>
      </StyledCredit>
      <StyledVisitorCorner id="visitors" aria-label="Visitor world map">
        <LiveVisitorMap />
        <a className="map-credit" href="https://mapmyvisitors.com/web/1c938" target="_blank" rel="noopener noreferrer">MapMyVisitors ↗</a>
      </StyledVisitorCorner>
    </StyledFooter>
  );
};

export default Footer;
