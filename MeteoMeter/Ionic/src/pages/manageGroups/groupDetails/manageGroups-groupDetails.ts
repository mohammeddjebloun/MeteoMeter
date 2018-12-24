
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
import { Pagingaaaaaaaaaaaaaa } from '../../../viewModels/pagingaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { GroupAAAAA } from '../../../services/groupAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: ManageGroupsGroupDetails.
 * Group concern group details layout (to show on click on an element of the group list).
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'manageGroups-groupDetails',
  segment: 'manageGroups/groupDetails'
})
@Component({
  selector: 'manageGroups-groupDetails',
  templateUrl: 'manageGroups-groupDetails.html'
})
export class ManageGroupsGroupDetails {
  constructor(
    public _groupAAAAA: GroupAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onPresentOptionsMenu
   * That method is a blank method.
   */
  public onPresentOptionsMenu() {
    // TO DO
  }

  /**
   * method: onGetMembers
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param paging `Pagingaaaaaaaaaaaaaa`.
   * @param groupId `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetMembers(
    paging: Pagingaaaaaaaaaaaaaa,
    groupId: number
  ) {
    return this._groupAAAAA.getMembers(
      paging,
      groupId
    ).subscribe();
  }

  /**
   * method: onRemoveMember
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param userProfileId `number`.
   * @param groupId `number`.
   * @returns A `Subscription<any>`.
   */
  public onRemoveMember(
    userProfileId: number,
    groupId: number
  ) {
    return this._groupAAAAA.removeMember(
      userProfileId,
      groupId
    ).subscribe();
  }

  /**
   * method: onConfirmRemove
   * That method is a blank method.
   */
  public onConfirmRemove() {
    // TO DO
  }

  /**
   * method: onShowAddMemberModal
   * That method is a blank method.
   */
  public onShowAddMemberModal() {
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
