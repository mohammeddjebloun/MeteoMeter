
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
import { TranslateService } from '@ngx-translate/core';

/**
 * class: LanguagePage.
 * That page is used to change the global
 * language inside the application.
 * This is the component of the internationalization
 * inside the application.
 * That component is generated from SmartApp domain.
 */
@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {
  constructor(public _navCtrl: NavController, public _translateService: TranslateService) {}

  /**
   * method: changeLanguage.
   * That method enables to change the global
   * language inside the application.
   * @param language Should be a language 
   *        described in the HTML.
   */
  changeLanguage(language: string){
    this._translateService.use(language);
    this._navCtrl.pop();
  }

  /**
   * method: onLanguage.
   * That method enables to quit the language
   * page with the same button as in other html.
   */
  onLanguage() {
    this._navCtrl.pop();
  }
}
