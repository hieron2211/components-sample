import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import useStyles, { ButtonVariants } from './Button.styles';
export interface ButtonProps extends UnstyledButtonProps<'button'> {
  variant: ButtonVariants;
}

export const Button = ({ variant, ...props }: ButtonProps) => {
  const { classes, cx } = useStyles();
  return (
    <UnstyledButton {...props} className={cx(classes.root, classes[variant])} />
  );
};
