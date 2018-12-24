
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
import { ResultModel } from '../models/resultModel';
/**
 * class: Cardaaaaaaaaaaaaaa
 * You should add a description of your entity here.
 * This viewModel is a reference used in Concerns or
 * in APIs' parameters or return types.
 * This model is generated from ViewModel domain.
 */
export class Cardaaaaaaaaaaaaaa {
  /**
   * property.
   */
  public id: number;
  /**
   * property.
   */
  public linkedCardId: number;
  /**
   * property.
   */
  public content: string;
  /**
   * property.
   */
  public targetGroups: string;
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
   */
  public author: string;
  /**
   * property.
   */
  public type: string;
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
  public picture: string;
  /**
   * reference.
   * isCollection.
   */
  public results: ResultModel[];
  constructor(
    id1: number,
    linkedCardId1: number,
    content1: string,
    targetGroups1: string,
    publicationDate1: Date,
    endDate1: Date,
    author1: string,
    type1: string,
    views1: number,
    answers1: number,
    picture1: string,
    results1: ResultModel[]
  ) {
    this.id = id1;
    this.linkedCardId = linkedCardId1;
    this.content = content1;
    this.targetGroups = targetGroups1;
    this.publicationDate = publicationDate1;
    this.endDate = endDate1;
    this.author = author1;
    this.type = type1;
    this.views = views1;
    this.answers = answers1;
    this.picture = picture1;
    this.results = results1;
  }
}
