import React from 'react';
import { Link } from 'react-router-dom';
import cls from "../../../assets/styles/forms/Forms.module.scss";
import { AuthPath } from '../../../services/path';

export default function AuthNavigate({location}) {
  
  return (
    <div className={cls.auth_page_bottomCard} >
      <p>
        {
          location === "login"
          ? "У вас ещё нет аккаунта? "
          : "Есть аккаунт?"
        }  

        <Link to={
          location === "login"
          ? AuthPath.register
          : AuthPath.login
        }>
          {
            location === "login" 
            ?  "Зарегистрироваться"
            : "Вход"
          }
          
        </Link>
      </p>

  </div>
)
}
