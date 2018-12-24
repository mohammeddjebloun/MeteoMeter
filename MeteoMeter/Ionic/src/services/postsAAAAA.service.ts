
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

import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { Postaaaaaaaaaaaaaa } from '../viewModels/postaaaaaaaaaaaaaa';
import { PostDetailsaaaaaaaaaaaaaa } from '../viewModels/postDetailsaaaaaaaaaaaaaa';
import { TopPostaaaaaaaaaaaaaa } from '../viewModels/topPostaaaaaaaaaaaaaa';

import { DataService } from './data.service';

/**
 * class: PostsAAAAA.
 * Posts API.
 * This service is generated from API domain.
 */
@Injectable()
export class PostsAAAAA {
  public _getLatestPostsApi = '/api/posts/getLatestPosts';
  public _getPostDetailsApi = '/api/posts/getPostDetails';
  public _getTopPostsApi = '/api/posts/getTopPosts';
  public _getApi = '/api/posts/get';
  constructor(public _dataService: DataService){}
    /**
     * method: getLatestPosts.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param pagingParam `Pagingaaaaaaaaaaaaaa`.
     * @param userProfileIdParam `number`.
     * @returns `Postaaaaaaaaaaaaaa>`.
     */
    public getLatestPosts(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        userProfileIdParam: number
    ): Observable<Postaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getLatestPostsApi}`,
          {
              paging: JSON.stringify(pagingParam),
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
    /**
     * method: getPostDetails.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param postIdParam `number`.
     * @returns `PostDetailsaaaaaaaaaaaaaa>`.
     */
    public getPostDetails(
        postIdParam: number
    ): Observable<PostDetailsaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getPostDetailsApi}`,
          {
              postId: JSON.stringify(postIdParam)
          });
    }
    /**
     * method: getTopPosts.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param userProfileIdParam `number`.
     * @returns `TopPostaaaaaaaaaaaaaa>`.
     */
    public getTopPosts(
        userProfileIdParam: number
    ): Observable<TopPostaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getTopPostsApi}`,
          {
              userProfileId: JSON.stringify(userProfileIdParam)
          });
    }
    /**
     * method: get.
     * You should add a description of your method here.
     * That method should be used to connect with generated
     * backend API. You should add business logic inside.
     * @param postIdParam `string`.
     * @returns `Postaaaaaaaaaaaaaa>`.
     */
    public get(
        postIdParam: string
    ): Observable<Postaaaaaaaaaaaaaa> {
        return this._dataService.get(
          `${this._getApi}`,
          {
              postId: JSON.stringify(postIdParam)
          });
    }
}
