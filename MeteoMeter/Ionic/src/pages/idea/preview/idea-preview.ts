
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
import { Answeraaaaaaaaaaaaaa } from '../../../viewModels/answeraaaaaaaaaaaaaa';
import { CreateGroupaaaaaaaaaaaaaa } from '../../../viewModels/createGroupaaaaaaaaaaaaaa';
import { CreateIdeaaaaaaaaaaaaaaa } from '../../../viewModels/createIdeaaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { PictureAAAAA } from '../../../services/pictureAAAAA.service';
import { IdeaAAAAA } from '../../../services/ideaAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: IdeaPreview.
 * Idea preview before save layout.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'idea-preview',
  segment: 'idea/preview'
})
@Component({
  selector: 'idea-preview',
  templateUrl: 'idea-preview.html'
})
export class IdeaPreview {
  constructor(
    public _pictureAAAAA: PictureAAAAA,
    public _ideaAAAAA: IdeaAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onUploadImage
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param picture `Pictureaaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onUploadImage(
    picture: Pictureaaaaaaaaaaaaaa
  ) {
    return this._pictureAAAAA.create(
      picture
    ).subscribe();
  }

  /**
   * method: onSave
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idea `CreateIdeaaaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onSave(
    idea: CreateIdeaaaaaaaaaaaaaaa
  ) {
    return this._ideaAAAAA.create(
      idea
    ).subscribe();
  }

  /**
   * method: onToPreviousStep
   * That method is a navigation method.
   */
  public onToPreviousStep() {
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
