'use client';

import { sva } from '@/styled-system/css';

const Home = () => {
  const homeStyle = HomeSva();

  return (
    <div className={homeStyle.wrapper}>
      <div className={homeStyle.profile}>Hello!</div>
    </div>
  );
};

export default Home;

const HomeSva = sva({
  slots: ['wrapper', 'profile', 'link'],
  base: {
    wrapper: {
      display: 'flex',
      width: 'full',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'full',
      padding: 4,
    },
    profile: {
      marginLeft: 'auto',
      fontSize: 'xl',
    },
    link: {
      color: 'primary.01',
      '&:hover': {
        color: 'primary.02',
      },
    },
  },
});
