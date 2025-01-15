import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './linkButton.module.scss';

interface LinkButtonProps extends ClassNameProp {
  text: string;
  linkTo: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  text,
  linkTo,
  className = null,
}) => {
  return (
    <Link to={linkTo} className={clsx(s.linkButton, className)}>
      {text}
    </Link>
  );
};

export default LinkButton;
