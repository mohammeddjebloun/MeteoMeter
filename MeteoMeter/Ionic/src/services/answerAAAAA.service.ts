
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

import { Answeraaaaaaaaaaaaaa } from '../viewModels/answeraaaaaaaaaaaaaa';
import { Discardaaaaaaaaaaaaaa } from '../viewModels/discardaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: AnswerAAAAA.
 * Answer API.
 * This service is generated from API domain.
 */
@Injectable()
export class AnswerAAAAA {
  public _createApi = '/api/answer/create';
  public _discardApi = '/api/answer/discard';
  public _answeredCardApi = '/api/answer/answeredCard';
  constructor(public _dataService: DataService){}
    /**
     * method: create.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param answerParam `Answeraaaaaaaaaaaaaa`.
     */
    public create(
        answerParam: Answeraaaaaaaaaaaaaa
    ) {
        return this._dataService.post(
          `${this._createApi}`,
          {
              answer: answerParam
          },
         {});
    }
    /**
     * method: discard.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param discardParam `Discardaaaaaaaaaaaaaa`.
     */
    public discard(
        discardParam: Discardaaaaaaaaaaaaaa
    ) {
        return this._dataService.post(
          `${this._discardApi}`,
          {
              discard: discardParam
          },
         {});
    }
    /**
     * method: answeredCard.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param cardIdParam `number`.
     * @param userProfileIdParam `number`.
     */
    public answeredCard(
        cardIdParam: number,
        userProfileIdParam: number
    ) {
        return this._dataService.get(
          `${this._answeredCardApi}`,
          {
              cardId: JSON.stringify(cardIdParam),
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
}
