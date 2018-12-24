
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
/**
 * class: CreateIdeaaaaaaaaaaaaaaa
 * You should add a description of your entity here.
 * This viewModel is a reference used in Concerns or
 * in APIs' parameters or return types.
 * This model is generated from ViewModel domain.
 */
export class CreateIdeaaaaaaaaaaaaaaa {
  /**
   * property.
   */
  public content: string;
  /**
   * property.
   */
  public publicationDate: Date;
  /**
   * property.
   */
  public endDate: Date;
  /**
   * property.
   * isCollection.
   */
  public targetGroupsIds: number[];
  /**
   * property.
   */
  public authorId: number;
  /**
   * property.
   */
  public pictureId: number;
  constructor(
    content1: string,
    publicationDate1: Date,
    endDate1: Date,
    targetGroupsIds1: number[],
    authorId1: number,
    pictureId1: number
  ) {
    this.content = content1;
    this.publicationDate = publicationDate1;
    this.endDate = endDate1;
    this.targetGroupsIds = targetGroupsIds1;
    this.authorId = authorId1;
    this.pictureId = pictureId1;
  }
}
