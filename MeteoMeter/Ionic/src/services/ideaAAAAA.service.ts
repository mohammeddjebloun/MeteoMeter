
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

import { CreateIdeaaaaaaaaaaaaaaa } from '../viewModels/createIdeaaaaaaaaaaaaaaa';
import { EditableIdeaaaaaaaaaaaaaaa } from '../viewModels/editableIdeaaaaaaaaaaaaaaa';
import { EditIdeaaaaaaaaaaaaaaa } from '../viewModels/editIdeaaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../viewModels/pictureaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: IdeaAAAAA.
 * Idea API.
 * This service is generated from API domain.
 */
@Injectable()
export class IdeaAAAAA {
  public _createApi = '/api/idea/create';
  public _getEditableIdeaApi = '/api/idea/getEditableIdea';
  public _updateApi = '/api/idea/update';
  public _deleteApi = '/api/idea/delete';
  public _getDefaultPictureApi = '/api/idea/getDefaultPicture';
  constructor(public _dataService: DataService){}
    /**
     * method: create.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param ideaParam `CreateIdeaaaaaaaaaaaaaaa`.
     */
    public create(
        ideaParam: CreateIdeaaaaaaaaaaaaaaa
    ) {
        return this._dataService.post(
          `${this._createApi}`,
          {
              idea: ideaParam
          },
         {});
    }
    /**
     * method: getEditableIdea.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param ideaIdParam `number`.
     * @returns `EditableIdeaaaaaaaaaaaaaaa>`.
     */
    public getEditableIdea(
        ideaIdParam: number
    ): Observable<EditableIdeaaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getEditableIdeaApi}`,
          {
              ideaId: JSON.stringify(ideaIdParam)
          });
    }
    /**
     * method: update.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param ideaParam `EditIdeaaaaaaaaaaaaaaa`.
     */
    public update(
        ideaParam: EditIdeaaaaaaaaaaaaaaa
    ) {
        return this._dataService.put(
          `${this._updateApi}`,
          {
              idea: ideaParam
          },
         {});
    }
    /**
     * method: delete.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param ideaIdParam `number`.
     */
    public delete(
        ideaIdParam: number
    ) {
        return this._dataService.delete(
            `${this._deleteApi}`,
            {
               ideaId: JSON.stringify(ideaIdParam)
            });
    }
    /**
     * method: getDefaultPicture.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @returns `Pictureaaaaaaaaaaaaaa>`.
     */
    public getDefaultPicture(
    ): Observable<Pictureaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getDefaultPictureApi}`,
          {});
    }
}
