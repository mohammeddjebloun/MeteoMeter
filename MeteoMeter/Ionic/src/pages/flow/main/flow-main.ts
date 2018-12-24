
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
import { Discardaaaaaaaaaaaaaa } from '../../../viewModels/discardaaaaaaaaaaaaaa';
import { UserViewCardaaaaaaaaaaaaaa } from '../../../viewModels/userViewCardaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { FlowAAAAA } from '../../../services/flowAAAAA.service';
import { AnswerAAAAA } from '../../../services/answerAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: FlowMain.
 * Flow concern main layout.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'flow-main',
  segment: 'flow/main'
})
@Component({
  selector: 'flow-main',
  templateUrl: 'flow-main.html'
})
export class FlowMain {
  constructor(
    public _flowAAAAA: FlowAAAAA,
    public _answerAAAAA: AnswerAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onNextCard
   * That method is a blank method.
   */
  public onNextCard() {
    // TO DO
  }

  /**
   * method: onToPostsMain
   * That method is a navigation method.
   */
  public onToPostsMain() {
    this._nav.push('posts-main');
  }

  /**
   * method: onGetCards
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param paging `Pagingaaaaaaaaaaaaaa`.
   * @param userProfileId `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetCards(
    paging: Pagingaaaaaaaaaaaaaa,
    userProfileId: number
  ) {
    return this._flowAAAAA.list(
      paging,
      userProfileId
    ).subscribe();
  }

  /**
   * method: onDiscard
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param discard `Discardaaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onDiscard(
    discard: Discardaaaaaaaaaaaaaa
  ) {
    return this._answerAAAAA.discard(
      discard
    ).subscribe();
  }

  /**
   * method: onPreviousCard
   * That method is a blank method.
   */
  public onPreviousCard() {
    // TO DO
  }

  /**
   * method: onAddView
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param userViewCard `UserViewCardaaaaaaaaaaaaaa`.
   * @returns A `Subscription<any>`.
   */
  public onAddView(
    userViewCard: UserViewCardaaaaaaaaaaaaaa
  ) {
    return this._flowAAAAA.addView(
      userViewCard
    ).subscribe();
  }

  /**
   * method: onSwipeCard
   * That method is a blank method.
   */
  public onSwipeCard() {
    // TO DO
  }

  /**
   * method: onAdaptCardsStack
   * That method is a blank method.
   */
  public onAdaptCardsStack() {
    // TO DO
  }

  /**
   * method: onDestroyOldCards
   * That method is a blank method.
   */
  public onDestroyOldCards() {
    // TO DO
  }

  /**
   * method: onCardAnswered
   * That method is a blank method.
   */
  public onCardAnswered() {
    // TO DO
  }

  /**
   * method: onRefresh
   * That method is a blank method.
   */
  public onRefresh() {
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
