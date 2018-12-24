
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

import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../viewModels/cardaaaaaaaaaaaaaa';
import { UserViewCardaaaaaaaaaaaaaa } from '../viewModels/userViewCardaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: FlowAAAAA.
 * Flow API.
 * This service is generated from API domain.
 */
@Injectable()
export class FlowAAAAA {
  public _listApi = '/api/flow/list';
  public _addViewApi = '/api/flow/addView';
  constructor(public _dataService: DataService){}
    /**
     * method: list.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pagingParam `Pagingaaaaaaaaaaaaaa`.
     * @param userProfileIdParam `number`.
     * @returns `Cardaaaaaaaaaaaaaa>`.
     */
    public list(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        userProfileIdParam: number
    ): Observable<Cardaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._listApi}`,
          {
              paging: JSON.stringify(pagingParam),
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
    /**
     * method: addView.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userViewCardParam `UserViewCardaaaaaaaaaaaaaa`.
     */
    public addView(
        userViewCardParam: UserViewCardaaaaaaaaaaaaaa
    ) {
        return this._dataService.put(
          `${this._addViewApi}`,
          {
              userViewCard: userViewCardParam
          },
         {});
    }
}
