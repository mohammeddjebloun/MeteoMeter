
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
import { Cardaaaaaaaaaaaaaa } from '../../../viewModels/cardaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { AnswerAAAAA } from '../../../services/answerAAAAA.service';
import { HighlightsAAAAA } from '../../../services/highlightsAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: HighlightsTopPostsCardModal.
 * Highlights concern topPostsCard modal (to open on the click on one of the top posts list element).
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'highlights-topPostsCardModal',
  segment: 'highlights/topPostsCardModal'
})
@Component({
  selector: 'highlights-topPostsCardModal',
  templateUrl: 'highlights-topPostsCardModal.html'
})
export class HighlightsTopPostsCardModal {
  constructor(
    public _answerAAAAA: AnswerAAAAA,
    public _highlightsAAAAA: HighlightsAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onCardAnswered
   * That method is a blank method.
   */
  public onCardAnswered() {
    // TO DO
  }

  /**
   * method: onCheckForAnswer
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param cardId `number`.
   * @param userProfileId `number`.
   * @returns A `Subscription<any>`.
   */
  public onCheckForAnswer(
    cardId: number,
    userProfileId: number
  ) {
    return this._answerAAAAA.answeredCard(
      cardId,
      userProfileId
    ).subscribe();
  }

  /**
   * method: onReloadCard
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param cardId `number`.
   * @returns A `Subscription<any>`.
   */
  public onReloadCard(
    cardId: number
  ) {
    return this._highlightsAAAAA.reloadCard(
      cardId
    ).subscribe();
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
