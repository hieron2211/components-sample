import { createStyles } from '@mantine/core';

export type ButtonVariants = 'solid' | 'outlined';

export default createStyles((theme, _params, getRef) => {
  return {
    root: {
      borderRadius: '0.5rem',
      padding: '1rem',
    },
    solid: {
      backgroundColor: 'red',
    },
    outlined: {
      backgroundColor: 'purple',
    },
  };
});
