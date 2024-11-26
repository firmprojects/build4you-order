import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex items-center transition-colors hover:text-blue-600 ${props.className || ''}`}
    >
      {children}
    </a>
  );
}