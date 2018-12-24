
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
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HighlightsTopPostsCardModal } from './highlights-topPostsCardModal';
import { TranslateModule } from '@ngx-translate/core';
import { AnswerAAAAA } from '../../../services/answerAAAAA.service';
import { HighlightsAAAAA } from '../../../services/highlightsAAAAA.service';

/**
 * class: HighlightsTopPostsCardModalPageModule.
 * Highlights concern topPostsCard modal (to open on the click on one of the top posts list element).
 * This is the module of the current layout.
 * This module is generated from Concerns domain.
 */
@NgModule({
  declarations: [
    HighlightsTopPostsCardModal
  ],
  imports: [
    TranslateModule.forChild(),
    IonicPageModule.forChild(HighlightsTopPostsCardModal)
  ],
  providers: [
    AnswerAAAAA,
    HighlightsAAAAA
  ]
})
export class HighlightsTopPostsCardModalPageModule {}
