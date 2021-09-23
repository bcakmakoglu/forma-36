import { css } from 'emotion';

export function getStyles() {
  return {
    srOnly: css({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      border: 0,
    }),
  };
}
