
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
 * class: TagRegisteraaaaaaaaaaaaaa
 * You should add a description of your entity here.
 * This viewModel is a reference used in Concerns or
 * in APIs' parameters or return types.
 * This model is generated from ViewModel domain.
 */
export class TagRegisteraaaaaaaaaaaaaa {
  /**
   * property.
   */
  public installationId: string;
  /**
   * property.
   */
  public registrationId: string;
  /**
   * property.
   * isCollection.
   */
  public tags: string[];
  /**
   * property.
   */
  public platform: string;
  constructor(
    installationId1: string,
    registrationId1: string,
    tags1: string[],
    platform1: string
  ) {
    this.installationId = installationId1;
    this.registrationId = registrationId1;
    this.tags = tags1;
    this.platform = platform1;
  }
}
