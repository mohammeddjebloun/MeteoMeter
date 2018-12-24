
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
import { PostDetailsaaaaaaaaaaaaaa } from '../../../viewModels/postDetailsaaaaaaaaaaaaaa';
import { Observable } from 'rxjs';
import { PostsAAAAA } from '../../../services/postsAAAAA.service';
import { IdeaAAAAA } from '../../../services/ideaAAAAA.service';
import { LanguagePage } from '../../language/language';

/**
 * class: PostsPostDetailsModal.
 * Posts concern postDetails modal to show on click on a post (in the list or in the carousel).
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'posts-postDetailsModal',
  segment: 'posts/postDetailsModal'
})
@Component({
  selector: 'posts-postDetailsModal',
  templateUrl: 'posts-postDetailsModal.html'
})
export class PostsPostDetailsModal {
  constructor(
    public _postsAAAAA: PostsAAAAA,
    public _ideaAAAAA: IdeaAAAAA,
    public _nav: NavController
  ) {
  }

  /**
   * method: onShowEditPostModal
   * That method is a blank method.
   */
  public onShowEditPostModal() {
    // TO DO
  }

  /**
   * method: onGetPostDetails
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param postId `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetPostDetails(
    postId: number
  ) {
    return this._postsAAAAA.getPostDetails(
      postId
    ).subscribe();
  }

  /**
   * method: onDelete
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param ideaId `number`.
   * @returns A `Subscription<any>`.
   */
  public onDelete(
    ideaId: number
  ) {
    return this._ideaAAAAA.delete(
      ideaId
    ).subscribe();
  }

  /**
   * method: onPresentOptionsMenu
   * That method is a blank method.
   */
  public onPresentOptionsMenu() {
    // TO DO
  }

  /**
   * method: onConfirmDelete
   * That method is a blank method.
   */
  public onConfirmDelete() {
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
