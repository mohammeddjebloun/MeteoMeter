
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
 * class: Reportaaaaaaaaaaaaaa
 * You should add a description of your entity here.
 * This viewModel is a reference used in Concerns or
 * in APIs' parameters or return types.
 * This model is generated from ViewModel domain.
 */
export class Reportaaaaaaaaaaaaaa {
  /**
   * property.
   */
  public id: number;
  /**
   * property.
   */
  public content: string;
  /**
   * property.
   */
  public author: string;
  /**
   * property.
   */
  public views: number;
  /**
   * property.
   */
  public answers: number;
  /**
   * reference.
   * isCollection.
   */
  public results: ResultModel[];
  constructor(
    id1: number,
    content1: string,
    author1: string,
    views1: number,
    answers1: number,
    results1: ResultModel[]
  ) {
    this.id = id1;
    this.content = content1;
    this.author = author1;
    this.views = views1;
    this.answers = answers1;
    this.results = results1;
  }
}
