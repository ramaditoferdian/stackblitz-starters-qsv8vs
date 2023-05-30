import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import classNames from 'classnames';

const Button = ({ children, className, disabled, onClick, type, variant }) => {
  const buttonClass = classNames(
    styles.btn,
    {
      [styles[`btn--${variant}`]]: true,
      [styles[`btn--${variant}-disabled`]]: disabled,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  onClick: () => {},
  type: 'button',
  variant: 'primary',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
