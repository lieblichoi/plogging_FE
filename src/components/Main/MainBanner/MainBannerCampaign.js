import React from 'react';

import { Container, Grid, Buttons, Text, Image } from '../../../elements/index';
import { history } from '../../../redux/configureStore';
import MainBanner_event from '../../../assets/MainBanner/MainBanner_event.svg';
import { getsCookie } from '../../../shared/Cookie';

const MainBannerCampaign = (props) => {
  return (
    <React.Fragment>
      <Container width="1440px">
        <Grid centerFlex isPosition="relative">
          <Image
            shape="rec"
            height="600px"
            width="1440px"
            // src={event_Banner}
            src={MainBanner_event}

            // cursor="pointer"
            // _onClick={() => {
            //   history.push('/campaign/1');
            // }}
          />
        </Grid>
        <Grid maxWidth="100%" minWidth="1440px">
          <Grid top="100px" isPosition="absolute">
            <Grid zIndex="-1" margin="75px 140px">
              <Grid margin="284px 0px 41px 0px">
                <Buttons
                  medium_b
                  // mainBannerBtn
                  // margin="41px 0px"
                  _onClick={() => {
                    history.push('/campaign/1');
                  }}
                >
                  같이 캠페인하러 가기
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default MainBannerCampaign;
