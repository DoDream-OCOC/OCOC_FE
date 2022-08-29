import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, Empty, Button } from '../../../components/element';
import style from './index.module.css';

export const MainCard = () => {
  const navigate = useNavigate();

  return (
    <article>
      <Text size="M" content="영어 작문의 꾸준한 첫걸음," />
      <Empty size="1rem" />
      {/* [Todo] 시멘틱웹을 고려해 h태그로 고치기 */}
      <Text size="L" content="영차영차" />
      <Empty size="5rem" />
      <Button onClick={() => navigate('/lvl-slc')} />
    </article>
  );
};
