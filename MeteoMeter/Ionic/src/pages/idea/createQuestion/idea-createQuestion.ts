
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
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { IdeaAAAAA } from '../../../services/ideaAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: IdeaCreateQuestion.
 * Idea and image selection layout in the Idea creation process.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'idea-createQuestion',
  segment: 'idea/createQuestion'
})
@Component({
  selector: 'idea-createQuestion',
  templateUrl: 'idea-createQuestion.html'
})
export class IdeaCreateQuestion {
  constructor(
    public _ideaAAAAA: IdeaAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onGetDefaultPicture
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @returns A `Subscription<any>`.
   */
  public onGetDefaultPicture(
  ) {
    return this._ideaAAAAA.getDefaultPicture(
    ).subscribe();
  }

  /**
   * method: onDiscard
   * That method is a blank method.
   */
  public onDiscard() {
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
   * method: onToNextStep
   * That method is a navigation method.
   */
  public onToNextStep() {
    this._nav.push('idea-createSettings');
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
