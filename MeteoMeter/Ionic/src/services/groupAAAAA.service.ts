
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

import { CreateGroupaaaaaaaaaaaaaa } from '../viewModels/createGroupaaaaaaaaaaaaaa';
import { EditGroupaaaaaaaaaaaaaa } from '../viewModels/editGroupaaaaaaaaaaaaaa';
import { Groupaaaaaaaaaaaaaa } from '../viewModels/groupaaaaaaaaaaaaaa';
import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { TargetGroupaaaaaaaaaaaaaa } from '../viewModels/targetGroupaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../viewModels/useraaaaaaaaaaaaaa';
import { UpdateMembersaaaaaaaaaaaaaa } from '../viewModels/updateMembersaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: GroupAAAAA.
 * Group API.
 * This service is generated from API domain.
 */
@Injectable()
export class GroupAAAAA {
  public _createApi = '/api/group/create';
  public _deleteApi = '/api/group/delete';
  public _updateApi = '/api/group/update';
  public _getApi = '/api/group/get';
  public _listApi = '/api/group/list';
  public _listTargetableGroupsApi = '/api/group/listTargetableGroups';
  public _getMembersApi = '/api/group/getMembers';
  public _updateMembersApi = '/api/group/updateMembers';
  public _removeMemberApi = '/api/group/removeMember';
  constructor(public _dataService: DataService){}
    /**
     * method: create.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param groupParam `CreateGroupaaaaaaaaaaaaaa`.
     */
    public create(
        groupParam: CreateGroupaaaaaaaaaaaaaa
    ) {
        return this._dataService.post(
          `${this._createApi}`,
          {
              group: groupParam
          },
         {});
    }
    /**
     * method: delete.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param groupIdParam `number`.
     */
    public delete(
        groupIdParam: number
    ) {
        return this._dataService.delete(
            `${this._deleteApi}`,
            {
               groupId: JSON.stringify(groupIdParam)
            });
    }
    /**
     * method: update.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param groupParam `EditGroupaaaaaaaaaaaaaa`.
     */
    public update(
        groupParam: EditGroupaaaaaaaaaaaaaa
    ) {
        return this._dataService.put(
          `${this._updateApi}`,
          {
              group: groupParam
          },
         {});
    }
    /**
     * method: get.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param groupIdParam `string`.
     * @returns `Groupaaaaaaaaaaaaaa>`.
     */
    public get(
        groupIdParam: string
    ): Observable<Groupaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getApi}`,
          {
              groupId: JSON.stringify(groupIdParam)
          });
    }
    /**
     * method: list.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pagingParam `Pagingaaaaaaaaaaaaaa`.
     * @param userProfileIdParam `number`.
     * @returns `Groupaaaaaaaaaaaaaa>`.
     */
    public list(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        userProfileIdParam: number
    ): Observable<Groupaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._listApi}`,
          {
              paging: JSON.stringify(pagingParam),
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
    /**
     * method: listTargetableGroups.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userProfileIdParam `string`.
     * @returns `TargetGroupaaaaaaaaaaaaaa>`.
     */
    public listTargetableGroups(
        userProfileIdParam: string
    ): Observable<TargetGroupaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._listTargetableGroupsApi}`,
          {
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
    /**
     * method: getMembers.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pagingParam `Pagingaaaaaaaaaaaaaa`.
     * @param groupIdParam `number`.
     * @returns `Useraaaaaaaaaaaaaa>`.
     */
    public getMembers(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        groupIdParam: number
    ): Observable<Useraaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getMembersApi}`,
          {
              paging: JSON.stringify(pagingParam),
              groupId: JSON.stringify(groupIdParam)
          });
    }
    /**
     * method: updateMembers.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param membersListParam `UpdateMembersaaaaaaaaaaaaaa`.
     */
    public updateMembers(
        membersListParam: UpdateMembersaaaaaaaaaaaaaa
    ) {
        return this._dataService.put(
          `${this._updateMembersApi}`,
          {
              membersList: membersListParam
          },
         {});
    }
    /**
     * method: removeMember.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userProfileIdParam `number`.
     * @param groupIdParam `number`.
     */
    public removeMember(
        userProfileIdParam: number,
        groupIdParam: number
    ) {
        return this._dataService.put(
          `${this._removeMemberApi}`,
          {
              userProfileId: userProfileIdParam,
              groupId: groupIdParam
          },
         {});
    }
}
