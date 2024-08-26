/* eslint-disable react/require-default-props */

'use client';

import React from 'react';

export const MagicButton = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => (
  // inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-30
  <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-sky-400 z-30" type="button" onClick={onClick}>
    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6EE7B7_0%,#54D3D5_50%,#39BEF6_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
      {children}
    </span>
  </button>
);
