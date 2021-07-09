import React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Archive = generateIcon({
  name: 'Archive',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1H5v6h1v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1H6v1h1v1h2v-1H8v-1h1v-1H8v-1h1v-1H8v-1h1v-1H8v-1h1v-1H8V9h1V8H8V7h1V1H8v5H6V5h1V4H6V1z"
      />
    </>
  ),
});
