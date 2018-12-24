
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

import { Pictureaaaaaaaaaaaaaa } from '../viewModels/pictureaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: PictureAAAAA.
 * Picture API.
 * This service is generated from API domain.
 */
@Injectable()
export class PictureAAAAA {
  public _getApi = '/api/picture/get';
  public _createApi = '/api/picture/create';
  constructor(public _dataService: DataService){}
    /**
     * method: get.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pictureIdParam `number`.
     * @returns `Pictureaaaaaaaaaaaaaa>`.
     */
    public get(
        pictureIdParam: number
    ): Observable<Pictureaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getApi}`,
          {
              pictureId: JSON.stringify(pictureIdParam)
          });
    }
    /**
     * method: create.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pictureParam `Pictureaaaaaaaaaaaaaa`.
     */
    public create(
        pictureParam: Pictureaaaaaaaaaaaaaa
    ) {
        return this._dataService.post(
          `${this._createApi}`,
          {
              picture: pictureParam
          },
         {});
    }
}
