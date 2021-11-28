import React from 'react';
import styled from 'styled-components';
import { Grid, Container, Text, Image, Buttons, Tags } from '../../elements';
import { userCreators } from '../../redux/modules/user';

import { useDispatch, useSelector } from 'react-redux';

// 신발끈 묶깅, 한 걸음 더
import Profile_Lv1 from '../../assets/Badge/Profile_Lv1.svg';
import Profile_Lv2 from '../../assets/Badge/Profile_Lv2.svg';
import UnProfile_Lv1 from '../../assets/Badge/UnProfile_Lv1.svg';
import UnProfile_Lv2 from '../../assets/Badge/UnProfile_Lv2.svg';

// 줍린이, 줍킹
import Review_Lv1 from '../../assets/Badge/Review_Lv1.svg';
import Review_Lv2 from '../../assets/Badge/Review_Lv2.svg';
import UnReview_Lv1 from '../../assets/Badge/UnReview_Lv1.svg';
import UnReview_Lv2 from '../../assets/Badge/UnReview_Lv2.svg';
// 둘러보깅, 아이줍깅
import Bookmark_Lv1 from '../../assets/Badge/Bookmark_Lv1.svg';
import Bookmark_Lv2 from '../../assets/Badge/Bookmark_Lv2.svg';
import UnBookmark_Lv1 from '../../assets/Badge/UnBookmark_Lv1.svg';
import UnBookmark_Lv2 from '../../assets/Badge/UnBookmark_Lv2.svg';
// 줍깅의 시작, 프로줍깅러
import Join_Lv1 from '../../assets/Badge/Join_Lv1.svg';
import Join_Lv2 from '../../assets/Badge/Join_Lv2.svg';
import UnJoin_Lv1 from '../../assets/Badge/UnJoin_Lv1.svg';
import UnJoin_Lv2 from '../../assets/Badge/UnJoin_Lv2.svg';
// 지각생
import Miss from '../../assets/Badge/Miss.svg';
import UnMiss from '../../assets/Badge/UnMiss.svg';

// 반장, 회장
import Master_Lv1 from '../../assets/Badge/Master_Lv1.svg';
import Master_Lv2 from '../../assets/Badge/Master_Lv2.svg';
import UnMaster_Lv1 from '../../assets/Badge/UnMaster_Lv1.svg';
import UnMaster_Lv2 from '../../assets/Badge/UnMaster_Lv2.svg';

const MyProfileBadge = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector((state) => state.user.myBadge?.data);

  let mapLv = [...new Set(badge?.map((b) => b.badgeLevel))];

  React.useEffect(() => {
    dispatch(userCreators.getMyBadgeDB());
  }, []);

  return (
    <React.Fragment>
      {mapLv.filter((b) => {
        return b === 1;
      })[0] === 1 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Profile_Lv1} />
          <A>신발끈 묶깅</A>

          <Text bold color="#333333" size="14px">
            신발끈 묶깅
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnProfile_Lv1} />
          <A>신발끈 묶깅</A>

          <Text bold color="#333333" size="14px">
            신발끈 묶깅
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 11;
      })[0] === 11 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Profile_Lv2} />
          <A>한 걸음 더</A>

          <Text bold color="#333333" size="14px">
            한 걸음 더
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnProfile_Lv2} />
          <A>한 걸음 더</A>

          <Text bold color="#333333" size="14px">
            한 걸음 더
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 2;
      })[0] === 2 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Review_Lv1} />
          <A>줍린이</A>

          <Text bold color="#333333" size="14px">
            줍린이
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnReview_Lv1} />
          <A>줍린이</A>

          <Text bold color="#333333" size="14px">
            줍린이
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 22;
      })[0] === 22 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Review_Lv2} />
          <B>줍킹</B>

          <Text bold color="#333333" size="14px">
            줍킹
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnReview_Lv2} />
          <B>줍킹</B>

          <Text bold color="#333333" size="14px">
            줍킹
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 3;
      })[0] === 3 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Bookmark_Lv1} />
          <B>둘러보깅</B>

          <Text bold color="#333333" size="14px">
            둘러보깅
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnBookmark_Lv1} />
          <B>
            둘러보깅
            <br />
          </B>

          <Text bold color="#333333" size="14px">
            둘러보깅
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 33;
      })[0] === 33 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Bookmark_Lv2} />
          <B>아이줍깅</B>

          <Text bold color="#333333" size="14px">
            아이줍깅
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnBookmark_Lv2} />
          <B>아이줍깅</B>

          <Text bold color="#333333" size="14px">
            아이줍깅
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 4;
      })[0] === 4 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Join_Lv1} />
          <C>줍깅의 시작</C>

          <Text bold color="#333333" size="14px">
            줍깅의 시작
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnJoin_Lv1} />
          <C>줍깅의 시작</C>

          <Text bold color="#333333" size="14px">
            줍깅의 시작
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 44;
      })[0] === 44 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Join_Lv2} />
          <C>프로줍깅러</C>

          <Text bold color="#333333" size="14px">
            프로줍깅러
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnJoin_Lv2} />
          <C>프로줍깅러</C>

          <Text bold color="#333333" size="14px">
            프로줍깅러
          </Text>
        </Grid>
      )}

      {mapLv.filter((b) => {
        return b === 5;
      })[0] === 5 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Miss} />
          <C>지각생</C>

          <Text bold color="#333333" size="14px">
            지각생
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnMiss} />
          <C>지각생</C>

          <Text bold color="#333333" size="14px">
            지각생
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 6;
      })[0] === 6 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Master_Lv1} />
          <D>반장</D>
          <Text bold color="#333333" size="14px">
            반장
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnMaster_Lv1} />
          <D>반장</D>

          <Text bold color="#333333" size="14px">
            반장
          </Text>
        </Grid>
      )}
      {mapLv.filter((b) => {
        return b === 66;
      })[0] === 66 ? (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={Master_Lv2} />
          <D>회장</D>
          <Text bold color="#333333" size="14px">
            회장
          </Text>
        </Grid>
      ) : (
        <Grid centerColumnFlex width="170px" height="170px">
          <Image shape="circleHover" size="120" src={UnMaster_Lv2} />
          <D>회장</D>
          <Text bold color="#333333" size="14px">
            회장
          </Text>
        </Grid>
      )}
    </React.Fragment>
  );
};

const A = styled.span`
  position: absolute;
  top: 1810px;
  visibility: hidden;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: fit-content;
  z-index: 100;
  /* ::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  ::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  } */
`;

const B = styled.span`
  position: absolute;
  top: 1980px;
  visibility: hidden;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: fit-content;
  z-index: 100;
  /* ::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  ::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  } */
`;

const C = styled.span`
  position: absolute;
  top: 2150px;
  visibility: hidden;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: fit-content;
  z-index: 100;
  /* ::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  ::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  } */
`;

const D = styled.span`
  position: absolute;
  background-color: #eef3fd;
  top: 2320px;

  visibility: hidden;
  padding: 5px;
  opacity: 0;
  transition: all 0.5s;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: fit-content;
  z-index: 100;
  /* ::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }
  ::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 75px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  } */
`;
export default MyProfileBadge;
