
import { Observable } from 'rxjs';
import { CreateIdeaaaaaaaaaaaaaaa } from '../../src/viewModels/createIdeaaaaaaaaaaaaaaa';
import { EditableIdeaaaaaaaaaaaaaaa } from '../../src/viewModels/editableIdeaaaaaaaaaaaaaaa';
import { EditIdeaaaaaaaaaaaaaaa } from '../../src/viewModels/editIdeaaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../../src/viewModels/pictureaaaaaaaaaaaaaa';
export class IdeaAAAAAMock {
    public create(
        ideaParam: CreateIdeaaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public getEditableIdea(
        ideaIdParam: number
    ): Observable<EditableIdeaaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public update(
        ideaParam: EditIdeaaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public delete(
        ideaIdParam: number
    ): Observable<any> {
      return Observable.of();
    }

    public getDefaultPicture(
    ): Observable<Pictureaaaaaaaaaaaaaa> {
      return Observable.of();
    }

}
