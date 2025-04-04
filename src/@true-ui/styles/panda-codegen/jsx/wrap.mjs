import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getWrapStyle } from '../patterns/wrap.mjs';
import { styled } from './factory.mjs';

export const Wrap = /* @__PURE__ */ forwardRef(function Wrap(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["gap","rowGap","columnGap","align","justify"])

const styleProps = getWrapStyle(patternProps)
const mergedProps = { ref, ...restProps, css: styleProps }

return createElement(styled.div, mergedProps)
  })