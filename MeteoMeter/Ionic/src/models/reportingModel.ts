
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
import { CardModel } from './cardModel';
import { UserProfileModel } from './userProfileModel';
import { PictureModel } from './pictureModel';
import { ChoiceModel } from './choiceModel';
import { ResultModel } from './resultModel';
/**
 * class: Reporting.
 * You should add a description of your entity here.
 * This model is a reference used in viewModels or
 * in another referenced model.
 * This model is generated from DataModel domain.
 */
export class ReportingModel extends CardModel {
  /**
   * property.
   */
  public views: number;
  /**
   * property.
   */
  public answers: number;
  /**
   * property.
   */
  public cardId: number;
  /**
   * reference.
   * isCollection.
   */
  public results: ResultModel[];
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
    choices1: ChoiceModel[],
    views1: number,
    answers1: number,
    cardId1: number,
    results1: ResultModel[]
  ) {
    super(
      id1,
      publicationDate1,
      content1,
      type1,
      endDate1,
      createdById1,
      pictureId1,
      createdBy1,
      picture1,
      choices1
    );
    this.views = views1;
    this.answers = answers1;
    this.cardId = cardId1;
    this.results = results1;
  }
}
