
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
import { UpdateMembersaaaaaaaaaaaaaa } from '../../../viewModels/updateMembersaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { GroupAAAAA } from '../../../services/groupAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: ManageGroupsEditMembersModal.
 * ManageGroups concern editMembers modal.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'manageGroups-editMembersModal',
  segment: 'manageGroups/editMembersModal'
})
@Component({
  selector: 'manageGroups-editMembersModal',
  templateUrl: 'manageGroups-editMembersModal.html'
})
export class ManageGroupsEditMembersModal {
  constructor(
    public _groupAAAAA: GroupAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onSearchUser
   * That method is a blank method.
   */
  public onSearchUser() {
    // TO DO
  }

  /**
   * method: onSaveChanges
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param membersList `UpdateMembersaaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onSaveChanges(
    membersList: UpdateMembersaaaaaaaaaaaaaa
  ) {
    return this._groupAAAAA.updateMembers(
      membersList
    ).subscribe();
  }

  /**
   * method: onClearSearch
   * That method is a blank method.
   */
  public onClearSearch() {
    // TO DO
  }

  /**
   * method: onCancel
   * That method is a blank method.
   */
  public onCancel() {
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
