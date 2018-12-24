
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
import { TopPostaaaaaaaaaaaaaa } from '../../../viewModels/topPostaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { PostsAAAAA } from '../../../services/postsAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: PostsTopPosts.
 * Posts concern topPosts layout.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'posts-topPosts',
  segment: 'posts/topPosts'
})
@Component({
  selector: 'posts-topPosts',
  templateUrl: 'posts-topPosts.html'
})
export class PostsTopPosts {
  constructor(
    public _postsAAAAA: PostsAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onUpdateList
   * That method is a blank method.
   */
  public onUpdateList() {
    // TO DO
  }

  /**
   * method: onGetTopPosts
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param userProfileId `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetTopPosts(
    userProfileId: number
  ) {
    return this._postsAAAAA.getTopPosts(
      userProfileId
    ).subscribe();
  }

  /**
   * method: onShowPostDetailsModal
   * That method is a blank method.
   */
  public onShowPostDetailsModal() {
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
