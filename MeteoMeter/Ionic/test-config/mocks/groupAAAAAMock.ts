
import { Observable } from 'rxjs';
import { CreateGroupaaaaaaaaaaaaaa } from '../../src/viewModels/createGroupaaaaaaaaaaaaaa';
import { EditGroupaaaaaaaaaaaaaa } from '../../src/viewModels/editGroupaaaaaaaaaaaaaa';
import { Groupaaaaaaaaaaaaaa } from '../../src/viewModels/groupaaaaaaaaaaaaaa';
import { Pagingaaaaaaaaaaaaaa } from '../../src/viewModels/pagingaaaaaaaaaaaaaa';
import { TargetGroupaaaaaaaaaaaaaa } from '../../src/viewModels/targetGroupaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../src/viewModels/useraaaaaaaaaaaaaa';
import { UpdateMembersaaaaaaaaaaaaaa } from '../../src/viewModels/updateMembersaaaaaaaaaaaaaa';
export class GroupAAAAAMock {
    public create(
        groupParam: CreateGroupaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public delete(
        groupIdParam: number
    ): Observable<any> {
      return Observable.of();
    }

    public update(
        groupParam: EditGroupaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public get(
        groupIdParam: string
    ): Observable<Groupaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public list(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        userProfileIdParam: number
    ): Observable<Groupaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public listTargetableGroups(
        userProfileIdParam: string
    ): Observable<TargetGroupaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public getMembers(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        groupIdParam: number
    ): Observable<Useraaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public updateMembers(
        membersListParam: UpdateMembersaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public removeMember(
        userProfileIdParam: number,
        groupIdParam: number
    ): Observable<any> {
      return Observable.of();
    }

}
