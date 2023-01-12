import NextLink from 'next/link'
import React from 'react'

export type LinkProps = {
  children?: React.ReactNode
  href: string
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      {children}
    </NextLink>
  )
}

export default Link
