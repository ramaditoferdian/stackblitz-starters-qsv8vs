import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./index.module.css"
import classNames from "classnames";

const Input = ({
  id,
  className,
  label,
  type,
  disabled,
  required,
  placeholder,
  errors,
  register,
}) => {

  const [isShowPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(state => !state);
  };

  const inputClass = classNames(
    styles.input,
    {
      [styles[`input--error`]]: errors,
    },
    className
  );

  const renderPasswordIcon = () => {
    if (type === 'password') {
      return(
        <div className={styles['input--icon'] }>
          <em
            className={isShowPassword ? "icn icn-eye-open" : "icn icn-eye-close"}
            style={{cursor: "pointer"}}
            onClick={handleClickShowPassword}
          />
        </div>
      )
    }
  };

  if (type === "checkbox") {
    return(
      <div className={styles['input--container-checkbox']}>
        <input className={styles['input-checkbox']} type="checkbox" id={id} {...register} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }

  console.log(errors);

  return (
    <div className={styles['input--container']}>
      <label className={styles['input--label']}>{label}</label>
      <div className={styles['input--wrapper']}>
        <input
          id={id}
          {...register}
          className={inputClass}
          type={
            type === 'password' 
            ? (isShowPassword ? 'text' : 'password') 
            : type
          }
          disabled={disabled}
          placeholder={placeholder}
          />
        {renderPasswordIcon()}
      </div>
      <p className={styles['error-msg']}>{errors.message}</p>
    </div>
  );
}

Input.defaultProps = {
  id: '',
  className: '',
  label: '',
  type: 'text',
  disabled: false,
  required: false,
  placeholder:"",
  errors: ""
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  errors: PropTypes.string
};

export default Input;