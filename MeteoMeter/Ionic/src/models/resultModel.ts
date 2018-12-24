
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
import { ChoiceModel } from './choiceModel';
import { ReportingModel } from './reportingModel';
/**
 * class: Result.
 * You should add a description of your entity here.
 * This model is a reference used in viewModels or
 * in another referenced model.
 * This model is generated from DataModel domain.
 */
export class ResultModel extends IdentifierModel {
  /**
   * property.
   */
  public value: number;
  /**
   * property.
   */
  public choiceId: number;
  /**
   * property.
   */
  public reportingId: number;
  /**
   * reference.
   */
  public choice: ChoiceModel;
  /**
   * reference.
   */
  public reporting: ReportingModel;
  constructor(
    id1: number,
    value1: number,
    choiceId1: number,
    reportingId1: number,
    choice1: ChoiceModel,
    reporting1: ReportingModel
  ) {
    super(
      id1
    );
    this.value = value1;
    this.choiceId = choiceId1;
    this.reportingId = reportingId1;
    this.choice = choice1;
    this.reporting = reporting1;
  }
}
