'use client';

import { css, sva } from '@/styled-system/css';
import { Box, HStack } from '@/styled-system/jsx';
import { useMemo, useState } from 'react';

const Page = () => {
  const [theme, setTheme] = useState<string>();
  const [width, setWidth] = useState<number>(600);
  const imageUrl = useMemo(() => `https://commitmon.me/adventure?username=Cluster-Taek&theme=${theme}`, [theme]);

  const pageStyle = PageSva();
  return (
    <Box className={pageStyle.wrapper}>
      <Box className={pageStyle.title}>Title or Logo Area</Box>
      <Box className={pageStyle.mainWrapper}>
        <Box className={pageStyle.previewWrapper}>
          <Box className={pageStyle.preview}>
            <img alt="commitmon" src={imageUrl} width={`${width}px`} />
          </Box>
        </Box>
        <Box className={pageStyle.settingWrapper}>
          <Box className={pageStyle.setting}>
            Setting Form Area
            <h1>Theme</h1>
            <HStack>
              <button onClick={() => setTheme('grassland')}>Theme GrassLand</button>
              <button onClick={() => setTheme('desert')}>Theme Desert</button>
              <button onClick={() => setTheme('transparent')}>Theme Transparent</button>
            </HStack>
            <h1>Width</h1>
            <HStack>
              <button onClick={() => setWidth(100)}>100</button>
              <button onClick={() => setWidth(400)}>400</button>
              <button onClick={() => setWidth(600)}>600</button>
            </HStack>
            <Box
              className={css({
                display: 'flex',
                width: '100%',
                bgColor: 'gray.200',
              })}
            >
              <div
                className={css({
                  whiteSpace: 'pre-wrap',
                  fontSize: '0.8rem',
                })}
              >
                {`
                <a href="https://github.com/doongjun/commitmon">
                  <img
                  alt="commitmon"
                  src="https://commitmon.me/adventure?username=doongjun&theme=${theme}"
                  width="${width}px"
                  />
                </a>`}
              </div>
            </Box>
            <button>Copy Button</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page;

const PageSva = sva({
  slots: ['wrapper', 'mainWrapper', 'title', 'previewWrapper', 'settingWrapper', 'preview', 'setting'],
  base: {
    wrapper: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      bgColor: 'gray.100',
    },
    mainWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      width: '400px',
      height: '100px',
      bgColor: 'gray.200',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    previewWrapper: {
      width: '50%',
      height: '100%',
      padding: '1rem',
    },
    settingWrapper: {
      width: '50%',
      height: '100%',
      padding: '1rem',
    },
    preview: {
      width: '100%',
      height: '100%',
      bgColor: 'gray.300',
    },
    setting: {
      width: '100%',
      height: '100%',
      bgColor: 'gray.400',
    },
  },
});
