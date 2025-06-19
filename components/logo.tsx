import Image from 'next/image'
import React from 'react'

export default function Logo({width = 32, height = 32}: {width: number, height: number}) {
  return (
    <Image src="/creatinspire-icon.svg" alt="Logo" width={width} height={height} />
  )
}
