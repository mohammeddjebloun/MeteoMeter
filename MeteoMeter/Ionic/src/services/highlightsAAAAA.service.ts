
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

import { TopPostaaaaaaaaaaaaaa } from '../viewModels/topPostaaaaaaaaaaaaaa';
import { BestContributoraaaaaaaaaaaaaa } from '../viewModels/bestContributoraaaaaaaaaaaaaa';
import { Reportaaaaaaaaaaaaaa } from '../viewModels/reportaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../viewModels/cardaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: HighlightsAAAAA.
 * Highlight API.
 * This service is generated from API domain.
 */
@Injectable()
export class HighlightsAAAAA {
  public _getTopPostsApi = '/api/highlights/getTopPosts';
  public _getBestContributorApi = '/api/highlights/getBestContributor';
  public _getBestPostApi = '/api/highlights/getBestPost';
  public _reloadCardApi = '/api/highlights/reloadCard';
  constructor(public _dataService: DataService){}
    /**
     * method: getTopPosts.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @returns `TopPostaaaaaaaaaaaaaa>`.
     */
    public getTopPosts(
    ): Observable<TopPostaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getTopPostsApi}`,
          {});
    }
    /**
     * method: getBestContributor.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @returns `BestContributoraaaaaaaaaaaaaa>`.
     */
    public getBestContributor(
    ): Observable<BestContributoraaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getBestContributorApi}`,
          {});
    }
    /**
     * method: getBestPost.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @returns `Reportaaaaaaaaaaaaaa>`.
     */
    public getBestPost(
    ): Observable<Reportaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getBestPostApi}`,
          {});
    }
    /**
     * method: reloadCard.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param cardIdParam `number`.
     * @returns `Cardaaaaaaaaaaaaaa>`.
     */
    public reloadCard(
        cardIdParam: number
    ): Observable<Cardaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._reloadCardApi}`,
          {
              cardId: JSON.stringify(cardIdParam)
          });
    }
}
