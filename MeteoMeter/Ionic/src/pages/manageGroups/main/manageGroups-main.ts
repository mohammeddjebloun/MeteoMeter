
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
import { Cardaaaaaaaaaaaaaa } from '../../../viewModels/cardaaaaaaaaaaaaaa';
import { Groupaaaaaaaaaaaaaa } from '../../../viewModels/groupaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { GroupAAAAA } from '../../../services/groupAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: ManageGroupsMain.
 * ManageGroups concern main layout.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'manageGroups-main',
  segment: 'manageGroups/main'
})
@Component({
  selector: 'manageGroups-main',
  templateUrl: 'manageGroups-main.html'
})
export class ManageGroupsMain {
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
   * method: onGetGroups
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param paging `Pagingaaaaaaaaaaaaaa`.
   * @param userProfileId `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetGroups(
    paging: Pagingaaaaaaaaaaaaaa,
    userProfileId: number
  ) {
    return this._groupAAAAA.list(
      paging,
      userProfileId
    ).subscribe();
  }

  /**
   * method: onShowCreateGroupModal
   * That method is a blank method.
   */
  public onShowCreateGroupModal() {
    // TO DO
  }

  /**
   * method: onConfirmDelete
   * That method is a blank method.
   */
  public onConfirmDelete() {
    // TO DO
  }

  /**
   * method: onDelete
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param groupId `number`.
   * @returns A `Subscription<any>`.
   */
  public onDelete(
    groupId: number
  ) {
    return this._groupAAAAA.delete(
      groupId
    ).subscribe();
  }

  /**
   * method: onShowEditGroupModal
   * That method is a blank method.
   */
  public onShowEditGroupModal() {
    // TO DO
  }

  /**
   * method: onConfirmLeave
   * That method is a blank method.
   */
  public onConfirmLeave() {
    // TO DO
  }

  /**
   * method: onLeave
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param userProfileId `number`.
   * @param groupId `number`.
   * @returns A `Subscription<any>`.
   */
  public onLeave(
    userProfileId: number,
    groupId: number
  ) {
    return this._groupAAAAA.removeMember(
      userProfileId,
      groupId
    ).subscribe();
  }

  /**
   * method: onToGroupDetails
   * That method is a navigation method.
   */
  public onToGroupDetails() {
    this._nav.push('manageGroups-groupDetails');
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
