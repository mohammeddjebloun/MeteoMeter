
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
import { TargetGroupaaaaaaaaaaaaaa } from '../../../viewModels/targetGroupaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { GroupAAAAA } from '../../../services/groupAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: IdeaCreateSettings.
 * publication date, end date and target group configuration layout in the Idea creation process.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'idea-createSettings',
  segment: 'idea/createSettings'
})
@Component({
  selector: 'idea-createSettings',
  templateUrl: 'idea-createSettings.html'
})
export class IdeaCreateSettings {
  constructor(
    public _groupAAAAA: GroupAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onDiscard
   * That method is a blank method.
   */
  public onDiscard() {
    // TO DO
  }

  /**
   * method: onGetTargetGroups
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param userProfileId `string`.
   * @returns A `Subscription<any>`.
   */
  public onGetTargetGroups(
    userProfileId: string
  ) {
    return this._groupAAAAA.listTargetableGroups(
      userProfileId
    ).subscribe();
  }

  /**
   * method: onToPreview
   * That method is a navigation method.
   */
  public onToPreview() {
    this._nav.push('idea-preview');
  }

  /**
   * method: onCheckSettings
   * That method is a blank method.
   */
  public onCheckSettings() {
    // TO DO
  }

  /**
   * method: onCheckSelectedGroups
   * That method is a blank method.
   */
  public onCheckSelectedGroups() {
    // TO DO
  }

  /**
   * method: onPreviousStep
   * That method is a blank method.
   */
  public onPreviousStep() {
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
