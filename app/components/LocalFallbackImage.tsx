'use client'

import React, { useState } from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  localSrc: string
  fallbackSrc: string
}

export default function LocalFallbackImage({ localSrc, fallbackSrc, alt, className, ...rest }: Props) {
  const [src, setSrc] = useState(localSrc)
  const onError = () => {
    if (src !== fallbackSrc) setSrc(fallbackSrc)
  }

  return <img src={src} alt={alt} className={className} onError={onError} {...rest} />
}
