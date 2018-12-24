
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
import { LanguagePage } from '../../language/language';

/**
 * class: IdeaEditIdeaModal.
 * Idea concern editIdea modal.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'idea-editIdeaModal',
  segment: 'idea/editIdeaModal'
})
@Component({
  selector: 'idea-editIdeaModal',
  templateUrl: 'idea-editIdeaModal.html'
})
export class IdeaEditIdeaModal {
  constructor(
    public _nav: NavController
  ) {
  }

  /**
   * method: onCheckSelectedGroups
   * That method is a blank method.
   */
  public onCheckSelectedGroups() {
    // TO DO
  }

  /**
   * method: onGetTargetableGroups
   * That method is a blank method.
   */
  public onGetTargetableGroups() {
    // TO DO
  }

  /**
   * method: onSaveChanges
   * That method is a blank method.
   */
  public onSaveChanges() {
    // TO DO
  }

  /**
   * method: onCheckDates
   * That method is a blank method.
   */
  public onCheckDates() {
    // TO DO
  }

  /**
   * method: onUploadImage
   * That method is a blank method.
   */
  public onUploadImage() {
    // TO DO
  }

  /**
   * method: onConfirmPublish
   * That method is a blank method.
   */
  public onConfirmPublish() {
    // TO DO
  }

  /**
   * method: onSelectImageSource
   * That method is a blank method.
   */
  public onSelectImageSource() {
    // TO DO
  }

  /**
   * method: onCaptureImage
   * That method is a blank method.
   */
  public onCaptureImage() {
    // TO DO
  }

  /**
   * method: onAdaptImageBoxStyle
   * That method is a blank method.
   */
  public onAdaptImageBoxStyle() {
    // TO DO
  }

  /**
   * method: onGetStyle
   * That method is a blank method.
   */
  public onGetStyle() {
    // TO DO
  }

  /**
   * method: onCloseModal
   * That method is a blank method.
   */
  public onCloseModal() {
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
