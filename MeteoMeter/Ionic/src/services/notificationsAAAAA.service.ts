
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

import { TagRegisteraaaaaaaaaaaaaa } from '../viewModels/tagRegisteraaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: NotificationsAAAAA.
 * Notifications API.
 * This service is generated from API domain.
 */
@Injectable()
export class NotificationsAAAAA {
  public _registerTagsApi = '/api/notifications/registerTags';
  public _unsubscribeApi = '/api/notifications/unsubscribe';
  public _notifyForResultApi = '/api/notifications/registerForResults';
  constructor(public _dataService: DataService){}
    /**
     * method: registerTags.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param tagRegisterParam `TagRegisteraaaaaaaaaaaaaa`.
     */
    public registerTags(
        tagRegisterParam: TagRegisteraaaaaaaaaaaaaa
    ) {
        return this._dataService.post(
          `${this._registerTagsApi}`,
          {
              tagRegister: tagRegisterParam
          },
         {});
    }
    /**
     * method: unsubscribe.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param installationIdParam `string`.
     */
    public unsubscribe(
        installationIdParam: string
    ) {
        return this._dataService.put(
          `${this._unsubscribeApi}`,
          {
              installationId: installationIdParam
          },
         {});
    }
    /**
     * method: notifyForResult.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userIdParam `string`.
     */
    public notifyForResult(
        userIdParam: string
    ) {
        return this._dataService.get(
          `${this._notifyForResultApi}`,
          {
              userId: JSON.stringify(userIdParam)
          });
    }
}
