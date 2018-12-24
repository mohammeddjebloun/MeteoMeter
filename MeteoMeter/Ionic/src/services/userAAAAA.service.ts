
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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FullUseraaaaaaaaaaaaaa } from '../viewModels/fullUseraaaaaaaaaaaaaa';
import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../viewModels/useraaaaaaaaaaaaaa';
import { SignInaaaaaaaaaaaaaa } from '../viewModels/signInaaaaaaaaaaaaaa';
import { ResetPasswordaaaaaaaaaaaaaa } from '../viewModels/resetPasswordaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: UserAAAAA.
 * User API.
 * This service is generated from API domain.
 */
@Injectable()
export class UserAAAAA {
  public _getFullInfosApi = '/api/user/getFullInfos';
  public _listApi = '/api/user/list';
  public _updateApi = '/api/user/update';
  public _signInApi = '/api/user/signIn';
  public _checkEmailApi = '/api/user/checkEmail';
  public _resetPasswordApi = '/api/user/resetPassword';
  public _getApi = '/api/user/get';
  public _searchUserApi = '/api/user/searchUser';
  constructor(public _dataService: DataService){}
    /**
     * method: getFullInfos.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userProfileIdParam `string`.
     * @returns `FullUseraaaaaaaaaaaaaa>`.
     */
    public getFullInfos(
        userProfileIdParam: string
    ): Observable<FullUseraaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getFullInfosApi}`,
          {
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
    /**
     * method: list.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pagingParam `Pagingaaaaaaaaaaaaaa`.
     * @returns `Useraaaaaaaaaaaaaa>`.
     */
    public list(
        pagingParam: Pagingaaaaaaaaaaaaaa
    ): Observable<Useraaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._listApi}`,
          {
              paging: JSON.stringify(pagingParam)
          });
    }
    /**
     * method: update.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userParam `Useraaaaaaaaaaaaaa`.
     */
    public update(
        userParam: Useraaaaaaaaaaaaaa
    ) {
        return this._dataService.put(
          `${this._updateApi}`,
          {
              user: userParam
          },
         {});
    }
    /**
     * method: signIn.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param signInParam `SignInaaaaaaaaaaaaaa`.
     */
    public signIn(
        signInParam: SignInaaaaaaaaaaaaaa
    ) {
        return this._dataService.get(
          `${this._signInApi}`,
          {
              signIn: JSON.stringify(signInParam)
          });
    }
    /**
     * method: checkEmail.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param emailParam `string`.
     */
    public checkEmail(
        emailParam: string
    ) {
        return this._dataService.get(
          `${this._checkEmailApi}`,
          {
              email: JSON.stringify(emailParam)
          });
    }
    /**
     * method: resetPassword.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param resetPasswordParam `ResetPasswordaaaaaaaaaaaaaa`.
     */
    public resetPassword(
        resetPasswordParam: ResetPasswordaaaaaaaaaaaaaa
    ) {
        return this._dataService.put(
          `${this._resetPasswordApi}`,
          {
              resetPassword: resetPasswordParam
          },
         {});
    }
    /**
     * method: get.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param applicationUserIdParam `string`.
     * @returns `Useraaaaaaaaaaaaaa>`.
     */
    public get(
        applicationUserIdParam: string
    ): Observable<Useraaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getApi}`,
          {
              applicationUserId: JSON.stringify(applicationUserIdParam)
          });
    }
    /**
     * method: searchUser.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param searchTermParam `string`.
     * @returns `Useraaaaaaaaaaaaaa>`.
     */
    public searchUser(
        searchTermParam: string
    ): Observable<Useraaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._searchUserApi}`,
          {
              searchTerm: JSON.stringify(searchTermParam)
          });
    }
}
