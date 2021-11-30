import React from 'react';
import { history } from '../redux/configureStore';
import { Grid, Text, Image } from '../elements/index';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import campaign_thumbnail from '../assets/Campaign/campaign_thumbnail.svg';

const Campaign = (props) => {
  return (
    <React.Fragment>
      <Grid width="1440px" margin="0px auto">
        <Grid ColumnFlex padding="10px 0px 40px 0px">
          <Grid center width="100%">
            <Text bold size="28px" margin="15px 0px" color="#333333">
              캠페인
            </Text>
            <Text size="18px" color="#666666" margin="10px 0px">
              줍깅에서 준비한 색다른 이벤트를 찾아보세요!
            </Text>
            <Text size="18px" color="#666666">
              줍깅러를 위한 특별한 혜택이 있을지도 몰라요!
            </Text>

            <Text
              bold
              align="left"
              margin="20px 140px"
              size="18px"
              color="#333333"
            >
              총 1건
            </Text>
          </Grid>

          <Grid centerFlex isPosition="relative">
            <Image
              shape="rec"
              height="500px"
              width="1167px"
              src={campaign_thumbnail}
              cursor="pointer"
              _onClick={() => {
                history.push('/campaign/1');
              }}
            />
          </Grid>
          <Grid centerFlex>
            <Grid isFlex width="1167px" margin="20px 0px 30px 0px">
              <Grid flexLeft>
                <Text bold color="#333333" size="20px">
                  플로깅 커뮤니티 런칭 이벤트
                </Text>
              </Grid>
              <Grid>
                <Text color="#acacac" size="14px" margin="0px 20px">
                  2021년 11월 25일 목요일 18:00
                </Text>
                <Grid isFlex>
                  {/* <Grid margin="7px 0px 0px 0px">
                    <VisibilityOutlinedIcon fontSize="small" />
                  </Grid> */}
                  {/* <Text color="#acacac" size="14px" margin="0px 5px">
                    조회수 2
                  </Text>
                  <Grid margin="7px 2px 0px 0px">
                    <BookmarkBorderOutlinedIcon fontSize="small" />
                  </Grid>
                  <Text color="#acacac" size="14px">
                    북마크수 2
                  </Text> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Campaign;
