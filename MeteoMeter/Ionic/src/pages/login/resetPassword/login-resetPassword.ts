
/*
 * You should add your licence here, here is an example :
 *
 * SonarQube, open source software quality management tool.
 * Copyright (C) 2008-2013 SonarSource
 * mailto:contact AT sonarsource DOT com
 *
 * SonarQube is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * SonarQube is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ResetPasswordaaaaaaaaaaaaaa } from '../../../viewModels/resetPasswordaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { UserAAAAA } from '../../../services/userAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: LoginResetPassword.
 * Login concern resetPassword layout to show on the click of the password reinitialization mail.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'login-resetPassword',
  segment: 'login/resetPassword'
})
@Component({
  selector: 'login-resetPassword',
  templateUrl: 'login-resetPassword.html'
})
export class LoginResetPassword {
  constructor(
    public _userAAAAA: UserAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onResetPassword
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param resetPassword `ResetPasswordaaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onResetPassword(
    resetPassword: ResetPasswordaaaaaaaaaaaaaa
  ) {
    return this._userAAAAA.resetPassword(
      resetPassword
    ).subscribe();
  }

  /**
   * method: onToLogin
   * That method is a navigation method.
   */
  public onToLogin() {
    this._nav.push('login-main');
  }

  /**
   * method: onLanguage.
   * That method enables to enter language
   * page with a button.
   */
  public onLanguage() {
    this._nav.push(LanguagePage);
  }

}
