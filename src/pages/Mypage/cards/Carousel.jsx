import React from 'react';
import { useMutation } from 'react-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from './Card';
import { study } from '../../../apis';
import { useDispatch } from 'react-redux';
import { gameSlice } from '../../../store/slices';
import { useNavigate } from 'react-router-dom';
import { setQuestions } from '../../../utils/setQuestions';
import turtleTravel from '../../../assets/icons/turtleTravel.png';
import turtleCook from '../../../assets/icons/turtleCook.png';
import turtleShopping from '../../../assets/icons/turtleShopping.png';
import turtleReservation from '../../../assets/icons/turtleReservation.png';

const Carousel = ({ curLevel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => {
      await study.postStudy().then(async res => {
        dispatch(gameSlice.actions.setStudyId(res.data.data));
        await setQuestions(res.data.data.studyId, 1);
      });
    },
    onSuccess: () => navigate('/play-game'),
  });
  const settings = {
    className: 'center',
    centerMode: true,
    dots: true,
    infinite: false,
    vertical: false,
    slidesToShow: 1,
    arrow: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: '40px',
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {/* [Todo] highScore랑 isLock 합쳐서 객체로 관리하기 */}
        <Card title="1. 여행" onBtnClick={() => mutation.mutate()} highScore={10} isLock={1 > curLevel} iconPng={turtleTravel} />
        <Card title="2. 음식" onBtnClick={() => mutation.mutate()} highScore={20} isLock={2 > curLevel} iconPng={turtleCook} />
        <Card title="3. 예약" onBtnClick={() => mutation.mutate()} highScore={30} isLock={3 > curLevel} iconPng={turtleReservation} />
        <Card title="4. 구매" onBtnClick={() => mutation.mutate()} highScore={40} isLock={4 > curLevel} iconPng={turtleShopping} />
      </Slider>
    </div>
  );
};

export default Carousel;
