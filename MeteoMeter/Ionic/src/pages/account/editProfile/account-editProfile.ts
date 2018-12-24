
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
import { EditGroupaaaaaaaaaaaaaa } from '../../../viewModels/editGroupaaaaaaaaaaaaaa';
import { EditIdeaaaaaaaaaaaaaaa } from '../../../viewModels/editIdeaaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { UserAAAAA } from '../../../services/userAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: AccountEditProfile.
 * Profile informations edition layout.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'account-editProfile',
  segment: 'account/editProfile'
})
@Component({
  selector: 'account-editProfile',
  templateUrl: 'account-editProfile.html'
})
export class AccountEditProfile {
  constructor(
    public _userAAAAA: UserAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onUpdateUser
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param user `Useraaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onUpdateUser(
    user: Useraaaaaaaaaaaaaa
  ) {
    return this._userAAAAA.update(
      user
    ).subscribe();
  }

  /**
   * method: onSelectImageSource
   * That method is a blank method.
   */
  public onSelectImageSource() {
    // TO DO
  }

  /**
   * method: onCaptureImage
   * That method is a blank method.
   */
  public onCaptureImage() {
    // TO DO
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
