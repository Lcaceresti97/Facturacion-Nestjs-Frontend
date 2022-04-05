import { Observable } from 'rxjs';
import { PageRequest } from '../model/pagination/page-request.model';
import { Page } from '../model/pagination/page.model';


export interface CrudOperations<T, ID> {
    save(t: T): Observable<T>;
    update(id: ID, t: T): Observable<T>;
    findOne(id: ID): Observable<T>;
    findAll(pageRequest?: PageRequest): Observable<Page<T>>;
    delete(id: ID): Observable<any>;
}
