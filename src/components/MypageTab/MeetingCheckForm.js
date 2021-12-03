import React from 'react';
import styled from 'styled-components';
import { Container, Text, Grid, Image, Buttons } from '../../elements/index';

import { history } from '../../redux/configureStore';

import { useDispatch, useSelector } from 'react-redux';
import { crewActions } from '../../redux/modules/crew';
// import { MobileHeaderIcon } from '../../assets/Icon/MobileHeaderIcon.png';
import Swal from 'sweetalert2';

import { Checkbox } from '@mui/material';

const MeetingCheckForm = (props) => {
  const dispatch = useDispatch();
  // const crew_list = useSelector((state) => state.crew.crew);
  const crew_check = useSelector((state) => state.crew.check);
  const postId = Number(props.match.params.postId);

  // const [meetCheck, setMeetCheck] = React.useState(false);
  const [checkedInputs, setCheckedInputs] = React.useState([]);

  // const crewList = crew_list?.filter((x) => {
  //   return x.postId === postId;
  // })[0];

  const changeHandler = (checked, userId) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, userId]);
      console.log(setCheckedInputs);
    } else {
      // setCheckedInputs(checkedInputs.filter((el) => el !== userId));
      const newCheckedInput = checkedInputs.map((e) => {
        if (e === userId) {
          return undefined;
        } else {
          return e;
        }
      });
      console.log(newCheckedInput);
      setCheckedInputs(
        newCheckedInput.filter((e) => e).length === 0 ? [] : newCheckedInput,
      );
    }
  };

  const CheckSubmit = () => {
    Swal.fire({
      title: '저장',
      html: '저장하면 출석 관리가 마감되어 <br>더 이상 수정할 수 없습니다. <br> 이대로 저장할까요?',

      width: '360px',
      height: '112px',
      confirmButtonColor: '#23C8AF',

      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: '#23c8af',
      cancelButtonColor: '#d33',
      confirmButtonText: '저장',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('저장완료!');
        dispatch(crewActions.editCrewCheckDB(postId, checkedInputs));

        history.push('/checksave');
      }
    });
  };

  React.useEffect(() => {
    dispatch(crewActions.crewDB());
    dispatch(crewActions.crewCheckDB(postId));
  }, []);

  return (
    <React.Fragment>
      <Container width="1440px">
        <MobileHeader>
          <Grid flexLeft height="56px" margin="0px 20px">
            <Image
              shape="circle"
              size="40"
              src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/mobheaderlogo.jpg"
            />
            <Text bold color="white" margin="0px 8px">
              줍깅 출석 관리
            </Text>
          </Grid>
        </MobileHeader>
        <Grid width="100%" center>
          {/* <Grid>
            <Text bold size="16px" align="left" margin="0px 8px">
              {' '}
              모임 참여 인원 {crew_check?.length} 명
            </Text>
          </Grid> */}
          <Grid checkGrid padding="10px 10px 5px 10px">
            {crew_check?.map((crew, idx) => {
              return (
                <Grid borderBottom="1px solid #D8D8D8">
                  <Grid isFlex>
                    <Grid flexLeft padding="8px">
                      {crew.userImg ? (
                        <Image shape="circleMedia" src={crew.userImg} />
                      ) : (
                        <Image
                          shape="circleMedia"
                          src="https://jupgging-image.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB+%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.jpg"
                        />
                      )}
                      <Text margin="0px 10px" shape="checkText" size="14px">
                        {' '}
                        {crew.nickname} 님
                      </Text>
                    </Grid>
                    <Checkbox
                      // color="default"

                      onChange={(e) => {
                        changeHandler(e.target.checked, crew.userId);
                      }}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid margin="30px 0px" endFlex>
            <Grid margin="0px 10px">
              <Buttons mob_cancle _onClick={() => {}}>
                취소
              </Buttons>
            </Grid>
            <Grid margin="0px 10px">
              <Buttons mob_enter _onClick={CheckSubmit}>
                저장
              </Buttons>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const MobileHeader = styled.div`
  width: 100%;
  height: 56px;
  background-color: #23c8af;
`;
export default MeetingCheckForm;
