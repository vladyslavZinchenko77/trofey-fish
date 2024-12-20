import React, { FC } from 'react';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SectionTitle: FC<SectionTitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={`text-2xl text-center font-bold mb-[50px] ${className || ''}`}
      {...props}
    >
      {children}
    </h1>
  );
};
export default SectionTitle;
