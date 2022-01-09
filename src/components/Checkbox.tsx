import { css } from '@emotion/react';
import { Input } from '@rebass/forms';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
}

const Checkbox = ({ onChange, defaultChecked, checked, ...props }: Props) => (
  <>
    <Input
      type="checkbox"
      css={css`
        ${visuallyHidden}
      `}
      checked={checked}
      onChange={(value) => {
        onChange?.(value);
      }}
      {...props}
    />
    <CheckboxIcon checked={checked} />
  </>
);

const CheckboxIcon = ({ checked }: { checked?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="12"
      cy="12"
      r="8"
      fill={checked ? '#A661EB' : '#3A3D3F'}
      stroke={checked ? '#A661EB' : '#3A3D3F'}
      strokeWidth="2"
    />
    <path d="M7 11.5L10.5 15L16.5 9" stroke="white" strokeWidth="2" />
  </svg>
);

export const visuallyHidden = css`
  position: absolute;
  padding: 0;
  margin: -1px;
  width: 1px;
  clip: rect(0 0 0 0);
`;

export const transparentVisually = css`
  position: absolute;
  padding: 0;
  margin: -1px;
  width: 1px;
  height: 1px;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

Checkbox.displayName = 'Checkbox';

export default Checkbox;
