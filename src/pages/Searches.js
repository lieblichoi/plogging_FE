import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import styled from 'styled-components';
import { Grid, Text, Image, Tags, Buttons } from '../elements/index';
import mapIcon from '../assets/Icon/mapIcon.svg';
import distanceIcon from '../assets/Icon/distanceIcon.svg';
import pinIcon from '../assets/Icon/pinIcon.svg';
import lostJoopgging from '../assets/Icon/lostJoopgging.svg';
import Swal from 'sweetalert2';

import { postActions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/Searches/PostCard';
import { Link } from 'react-router-dom';

import { getsCookie } from '../shared/Cookie';

const Searches = (props) => {
  const searchLocation = useLocation();
  const dispatch = useDispatch();
  const is_login = getsCookie('token');
  const all_data = useSelector((state) => state.post.all.data);
  const all_list = all_data?.slice(0).reverse();
  const view_list = all_data
    ?.filter((x) => {
      return x.viewCount >= 0;
    })
    .sort(function (a, b) {
      return b.viewCount - a.viewCount;
    });
  const fin_list = all_data
    ?.filter((x) => {
      return x.dday >= 1;
    })
    .sort(function (a, b) {
      return a.dday - b.dday;
    });

  const [recentSort, setRecentSort] = React.useState(true);
  const [viewSort, setViewSort] = React.useState(false);
  const [finSort, setFinSort] = React.useState(false);
  const [types, setTypes] = React.useState('장소전체');
  const [distances, setDistances] = React.useState('거리전체');
  const [locations, setLocations] = React.useState('지역전체');
  // const reviewId = Number(props.match.params.reviewId);
  // console.log(reviewId);
  const clickRecentSort = () => {
    setRecentSort(true);
    setViewSort(false);
    setFinSort(false);
  };
  const clickViewSort = () => {
    setViewSort(true);
    setRecentSort(false);
    setFinSort(false);
  };
  const clickFinSort = () => {
    setFinSort(true);
    setRecentSort(false);
    setViewSort(false);
  };

  const getSearchParams = (parsedSearchParams = {}, options = {}) => {
    const params = Object.keys(options).reduce((params, optionType) => {
      if (optionType === 'set') {
        if (options.skipAll) {
          return options.set;
        }
        return { ...params, ...options.set };
      }
  
      if (optionType === 'remove') {
        return Object.keys(params).reduce((obj, key) => {
          if (options.remove.includes(key) === false) {
            obj[key] = params[key];
          }
          return obj;
        }, {});
      }
  
      return params;
    }, parsedSearchParams);
  
    return queryString.stringify(params, {
      skipEmptyString: options?.skipEmpty,
      skipNull: options?.skipEmpty,
    });
  }

  const useSearchParams = () => {
    
    const { search } = searchLocation
    
    const [searchParams, setSearchParams] = useState(queryString.parse(search));
  
    const withSearchParams = useCallback(
      (uri, options) => {
        const { url, query, fragmentIdentifier } = queryString.parseUrl(uri, {
          parseFragmentIdentifier: true,
        });
  
        const newQuery = getSearchParams({ ...searchParams, ...query }, options);
  
        return `${url}${newQuery ? `?${newQuery}` : ''}${
          fragmentIdentifier ? `#${fragmentIdentifier}` : ''
        }`;
      },
      [searchParams],
    );

    useEffect(() => {
      setSearchParams(queryString.parse(search));
    }, [search]);
  
    return {
      searchParams,
      setSearchParams,
      getSearchParams,
      withSearchParams,
    };
  }

  const useSearches = useSearchParams();

  const { withSearchParams } = useSearches

  const parentRef = React.useRef(null);
  const childRef = React.useRef(null);
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
        parentRef.current.style.background = 'transparent';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = 'transparent';
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse],
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? '▲' : '▼';

  var queryId = props.location.search;

  const searchPost = () => {
    dispatch(postActions.getFilteredDB(queryId));
  };

  const handleTypes = (value) => {
    setTypes(value);
  };

  const handleDistances = (value) => {
    setDistances(value);
  };

  const handleLocations = (value) => {
    setLocations(value);
  };

  const LinkToPosting = () => {
    if (is_login) {
      window.location.replace(`/posting`);
    } else {
      Swal.fire({
        text: '모임 만들기는 로그인이 필요합니다!',
        width: '360px',
        confirmButtonColor: '#23c8af',
      });
      window.location.replace(`/login`);
    }
  };

  React.useEffect(() => {
    dispatch(postActions.getAllDB());
  }, []);

  return (
    <React.Fragment>
      <Grid center>
        <Grid padding="10px 0px 40px 0px">
          <Grid margin="auto" center width="1000px">
            <Text size="28px" bold margin="15px 0px" color="#333333">
              참여하기
            </Text>
            <Text size="18px" color="#666666" margin="10px 0px">
              다양한 크루를 탐색하거나 원하는 관심사를 설정하여 맞춤형 크루를
              찾을 수 있어요.
            </Text>
            <Text size="18px" color="#666666">
              참여는 신청 버튼 하나로 쉽고 빠르게!
            </Text>
          </Grid>
        </Grid>
        <Grid width="1170px" center margin="auto" padding="50px 0px">
          <Container>
            <Header onClick={handleButtonClick}>
              <Link
                to={withSearchParams(`/searches`, {
                  set: {
                    location: '지역전체',
                    type: '장소전체',
                    distance: '거리전체',
                  },
                })}
                style={{ textDecoration: 'none' }}
              >
                🔍
              </Link>
              <Link
                to={withSearchParams(`/searches`, {
                  set: {
                    location: '지역전체',
                    type: '장소전체',
                    distance: '거리전체',
                  },
                })}
                style={{ textDecoration: 'none' }}
              >
                <Button>{buttonText}</Button>
              </Link>
            </Header>
            <ContentsWrapper ref={parentRef}>
              <Contents ref={childRef}>
                <Grid>
                  <Grid flexLeft>
                    <Image
                      shape="rec"
                      width="20px"
                      height="20px"
                      src={mapIcon}
                      margin="4px 10px 0px 0px"
                    />
                    <Text
                      size="18px"
                      bold
                      color="#333333"
                      margin="0px 20px 0px 0px"
                    >
                      장소별
                    </Text>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '장소전체' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={types}
                          value="장소전체"
                          _onClick={() => {
                            handleTypes('장소전체');
                          }}
                        >
                          장소 전체
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '도심(시내)' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={types}
                          value="도심(시내)"
                          _onClick={() => {
                            handleTypes('도심(시내)');
                          }}
                        >
                          도심(시내)
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '공원' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={types}
                          value="공원"
                          _onClick={() => {
                            handleTypes('공원');
                          }}
                        >
                          공원
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '한강' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={types}
                          value="한강"
                          _onClick={() => {
                            handleTypes('한강');
                          }}
                        >
                          한강
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { type: '산 또는 숲' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={types}
                          value="산 또는 숲"
                          _onClick={() => {
                            handleTypes('산 또는 숲');
                          }}
                        >
                          산 또는 숲
                        </Tags>
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid flexLeft margin="15px 0px 0px -5px">
                    <Image
                      shape="rec"
                      width="25px"
                      height="20px"
                      src={distanceIcon}
                      margin="4px 10px 0px 3px"
                      padding="3px 0px 0px 0px"
                    />
                    <Text
                      size="18px"
                      bold
                      color="#333333"
                      margin="0px 20px 0px -3px"
                    >
                      거리별
                    </Text>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '거리전체' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={distances}
                          value="거리전체"
                          _onClick={() => {
                            handleDistances('거리전체');
                          }}
                        >
                          거리 전체
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '1km 이내' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={distances}
                          value="1km 이내"
                          _onClick={() => {
                            handleDistances('1km 이내');
                          }}
                        >
                          1km 이내
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '1km~3km' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={distances}
                          value="1km~3km"
                          _onClick={() => {
                            handleDistances('1km~3km');
                          }}
                        >
                          1km~3km
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '3km~5km' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={distances}
                          value="3km~5km"
                          _onClick={() => {
                            handleDistances('3km~5km');
                          }}
                        >
                          3km~5km
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { distance: '5km 이상' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={distances}
                          value="5km 이상"
                          _onClick={() => {
                            handleDistances('5km 이상');
                          }}
                        >
                          5km 이상
                        </Tags>
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid flexLeft margin="15px 0px 0px 0px">
                    <Image
                      shape="rec"
                      width="20px"
                      height="20px"
                      src={pinIcon}
                      margin="4px 10px 0px 0px"
                      padding="2px 0px"
                    />
                    <Text
                      size="18px"
                      bold
                      color="#333333"
                      margin="0px 20px 0px 0px"
                    >
                      지역별
                    </Text>
                    <Text size="14px" color="#666666" margin="2px 0px 0px 0px">
                      원하는 지역 한 곳을 선택해주세요. (현재 서울 지역만 서비스
                      지원)
                    </Text>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '지역전체' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="지역전체"
                          _onClick={() => {
                            handleLocations('지역전체');
                          }}
                        >
                          지역 전체
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강남구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="강남구"
                          _onClick={() => {
                            handleLocations('강남구');
                          }}
                        >
                          강남구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강동구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="강동구"
                          _onClick={() => {
                            handleLocations('강동구');
                          }}
                        >
                          강동구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강북구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="강북구"
                          _onClick={() => {
                            handleLocations('강북구');
                          }}
                        >
                          강북구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '강서구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="강서구"
                          _onClick={() => {
                            handleLocations('강서구');
                          }}
                        >
                          강서구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '관악구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="관악구"
                          _onClick={() => {
                            handleLocations('관악구');
                          }}
                        >
                          관악구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '광진구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="광진구"
                          _onClick={() => {
                            handleLocations('광진구');
                          }}
                        >
                          광진구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '구로구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="구로구"
                          _onClick={() => {
                            handleLocations('구로구');
                          }}
                        >
                          구로구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '금천구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="금천구"
                          _onClick={() => {
                            handleLocations('금천구');
                          }}
                        >
                          금천구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '노원구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="노원구"
                          _onClick={() => {
                            handleLocations('노원구');
                          }}
                        >
                          노원구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '도봉구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="도봉구"
                          _onClick={() => {
                            handleLocations('도봉구');
                          }}
                        >
                          도봉구
                        </Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '동대문구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="동대문구"
                          _onClick={() => {
                            handleLocations('동대문구');
                          }}
                        >
                          동대문구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '동작구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="동작구"
                          _onClick={() => {
                            handleLocations('동작구');
                          }}
                        >
                          동작구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '마포구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="마포구"
                          _onClick={() => {
                            handleLocations('마포구');
                          }}
                        >
                          마포구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '서대문구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="서대문구"
                          _onClick={() => {
                            handleLocations('서대문구');
                          }}
                        >
                          서대문구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '서초구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="서초구"
                          _onClick={() => {
                            handleLocations('서초구');
                          }}
                        >
                          서초구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '성동구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="성동구"
                          _onClick={() => {
                            handleLocations('성동구');
                          }}
                        >
                          성동구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '성북구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="성북구"
                          _onClick={() => {
                            handleLocations('성북구');
                          }}
                        >
                          성북구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '송파구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="송파구"
                          _onClick={() => {
                            handleLocations('송파구');
                          }}
                        >
                          송파구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '양천구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="양천구"
                          _onClick={() => {
                            handleLocations('양천구');
                          }}
                        >
                          양천구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '영등포구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="영등포구"
                          _onClick={() => {
                            handleLocations('영등포구');
                          }}
                        >
                          영등포구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '용산구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="용산구"
                          _onClick={() => {
                            handleLocations('용산구');
                          }}
                        >
                          용산구
                        </Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid flexLeft margin="15px 0px 0px 99px">
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '은평구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="은평구"
                          _onClick={() => {
                            handleLocations('은평구');
                          }}
                        >
                          은평구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '종로구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="종로구"
                          _onClick={() => {
                            handleLocations('종로구');
                          }}
                        >
                          종로구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '중구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="중구"
                          _onClick={() => {
                            handleLocations('중구');
                          }}
                        >
                          중구
                        </Tags>
                      </Link>
                    </Grid>
                    <Grid margin="2px 7px 0px 0px">
                      <Link
                        to={withSearchParams(`/searches`, {
                          set: { location: '중랑구' },
                        })}
                        style={{ textDecoration: 'none' }}
                      >
                        <Tags
                          medium_t
                          active={locations}
                          value="중랑구"
                          _onClick={() => {
                            handleLocations('중랑구');
                          }}
                        >
                          중랑구
                        </Tags>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid centerFlex margin="20px 0px 0px 0px">
                      <Grid margin="0px 10px 0px 0px">
                        <Buttons small_b _onClick={searchPost}>
                          검색
                        </Buttons>
                      </Grid>
                      <Grid>
                        <Link
                          to={withSearchParams(`/searches`, {
                            set: {
                              location: '지역전체',
                              type: '장소전체',
                              distance: '거리전체',
                            },
                          })}
                          style={{ textDecoration: 'none' }}
                        >
                          <Buttons small>필터 초기화</Buttons>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Contents>
            </ContentsWrapper>
          </Container>
          <Grid isFlex margin="50px 0px 20px 0px">
            <Grid>
              <Text margin="0px 0px 0px 10px" color="#333333" size="18px" bold>
                총 {all_list?.length}건
              </Text>
            </Grid>
            <Grid centerFlex margin="3px 0px 0px 0px">
              <Buttons search _onClick={clickRecentSort}>
                최근날짜순
              </Buttons>
              <Text color="#acacac" margin="-3px 0px 0px 0px" size="13px" bold>
                |
              </Text>
              <Buttons search _onClick={clickViewSort}>
                조회수순
              </Buttons>
              <Text color="#acacac" margin="-3px 0px 0px 0px" size="13px" bold>
                |
              </Text>
              <Buttons search _onClick={clickFinSort}>
                마감임박순
              </Buttons>
            </Grid>
          </Grid>
          {all_data?.length !== 0 ? (
            <Grid grid>
              {recentSort && !viewSort && !finSort ? (
                <>
                  {all_list?.map((a, idx) => {
                    return <PostCard {...a} />;
                  })}
                </>
              ) : (
                ''
              )}
              {!recentSort && viewSort && !finSort ? (
                <>
                  {view_list?.map((a, idx) => {
                    return <PostCard {...a} />;
                  })}
                </>
              ) : (
                ''
              )}
              {!recentSort && !viewSort && finSort ? (
                <>
                  {fin_list?.map((a, idx) => {
                    return <PostCard {...a} />;
                  })}
                </>
              ) : (
                ''
              )}
            </Grid>
          ) : (
            <Grid
              centerColumnFlex
              margin="80px 0px -60px 0px"
              padding="20px 0px 0px 0px"
            >
              <Image
                shape="rec"
                src={lostJoopgging}
                width="270px"
                height="205px"
                margin="0px 0px 20px 0px"
              />
              <Text bold color="#666666" size="20px">
                조건에 맞는 모임이 아직 없습니다.
              </Text>
              <Text bold color="#666666" size="20px" margin="0px 0px 20px 0px">
                나만의 줍깅 모임을 직접 만들어 보세요!
              </Text>
              <Buttons nullLink _onClick={LinkToPosting}>
                나만의 줍깅 모임 만들러 가기
              </Buttons>
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid #d8d8d8;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 32px;
  margin: 0 32px 0 8px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #acacac;
`;

const Button = styled.div`
  top: 5px;
  right: 7px;
  position: absolute;
  padding: 10px;
  color: #acacac;
  font-size: 15px;
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  padding: 0 8px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const Contents = styled.div`
  padding: 40px;
`;

export default React.memo(Searches);
