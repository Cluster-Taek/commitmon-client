'use client';

import { sva } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

const Page = () => {
  const pageStyle = PageSva();

  return <Box className={pageStyle.wrapper}></Box>;
};

export default Page;

const PageSva = sva({
  slots: ['wrapper', 'list', 'form', 'input', 'error'],
  base: {
    wrapper: {
      display: 'flex',
      width: 'full',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'full',
    },
    list: {
      width: 'full',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4',
    },
    form: {
      width: 'full',
      marginTop: '4',
    },
    input: {
      width: 'full',
      padding: '2',
      marginTop: '2',
    },
    error: {
      color: 'red',
      marginTop: '2',
    },
  },
});
