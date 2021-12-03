import React from 'react';

import { Grid, Text, Image } from '../elements/index';

import campaign_detail from '../assets/Campaign/campaign_detail.svg';

const CampaignDetail = (props) => {
  return (
    <React.Fragment>
      <Grid centerColumnFlex>
        <Grid isFlex width="1167px" margin="100px 0px 30px 0px">
          <Text bold color="#333333" size="40px">
            플로깅 커뮤니티 런칭 이벤트
          </Text>
          <Grid>
            <Grid isFlex>
              {/* <Grid margin="7px 0px 0px 0px">
                  <VisibilityOutlinedIcon fontSize="small" />
                </Grid>
                <Text color="#acacac" size="14px" margin="0px 5px">
                  조회수 2
                </Text>
                <Grid margin="7px 2px 0px 0px">
                  <BookmarkBorderOutlinedIcon fontSize="small" />
                </Grid>
                <Text color="#acacac" size="14px">
                  북마크수 2
                </Text> */}
            </Grid>
            <Text color="#acacac" size="14px">
              2021년 11월 25일 목요일 18:00
            </Text>
          </Grid>
        </Grid>
        <Grid isPosition="relative">
          <Image
            shape="rec"
            height="5438px"
            width="1167px"
            src={campaign_detail}
          />
          <Grid
            isPosition="absolute"
            bg="transparent"
            width="430px"
            height="60px"
            top="78%"
            right="31%"
            _onClick={() => {
              window.open('https://forms.gle/sCKWvV4X4izWWQD3A', '_blank');
            }}
            cursor="pointer"
          ></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CampaignDetail;
