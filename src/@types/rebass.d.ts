import { InterpolationWithTheme } from '@emotion/react';

declare module 'rebass' {
  interface FlexProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface BoxProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface TextProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface ButtonProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface ImageProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
}

declare module '@rebass/forms' {
  interface LabelProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface TextareaProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface InputProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
  interface SelectProps {
    as?: React.ElementType;
    css?: InterpolationWithTheme<unknown>;
  }
}
