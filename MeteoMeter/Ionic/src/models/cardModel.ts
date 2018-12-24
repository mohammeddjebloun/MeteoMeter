
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
import { IdentifierModel } from './identifierModel';
import { UserProfileModel } from './userProfileModel';
import { PictureModel } from './pictureModel';
import { ChoiceModel } from './choiceModel';
/**
 * class: Card.
 * You should add a description of your entity here.
 * This model is a reference used in viewModels or
 * in another referenced model.
 * This model is generated from DataModel domain.
 */
export class CardModel extends IdentifierModel {
  /**
   * property.
   */
  public publicationDate: Date;
  /**
   * property.
   */
  public content: string;
  /**
   * property.
   */
  public type: string;
  /**
   * property.
   */
  public endDate: Date;
  /**
   * property.
   */
  public createdById: number;
  /**
   * property.
   */
  public pictureId: number;
  /**
   * reference.
   */
  public createdBy: UserProfileModel;
  /**
   * reference.
   */
  public picture: PictureModel;
  /**
   * reference.
   * isCollection.
   */
  public choices: ChoiceModel[];
  constructor(
    id1: number,
    publicationDate1: Date,
    content1: string,
    type1: string,
    endDate1: Date,
    createdById1: number,
    pictureId1: number,
    createdBy1: UserProfileModel,
    picture1: PictureModel,
    choices1: ChoiceModel[]
  ) {
    super(
      id1
    );
    this.publicationDate = publicationDate1;
    this.content = content1;
    this.type = type1;
    this.endDate = endDate1;
    this.createdById = createdById1;
    this.pictureId = pictureId1;
    this.createdBy = createdBy1;
    this.picture = picture1;
    this.choices = choices1;
  }
}
