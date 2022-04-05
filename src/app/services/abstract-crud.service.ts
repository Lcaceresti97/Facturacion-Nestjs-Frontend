import { HttpClient } from "@angular/common/http";
import { RequestMethod, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { PageRequest } from "../model/pagination/page-request.model";
import { Page } from "../model/pagination/page.model";
import { CrudOperations } from "./crud-operations.interface";

export abstract class AbstractCrudService<T, ID> implements CrudOperations<T, ID> {
    constructor(
        protected _http: HttpClient,
        protected uri: string
    ) { }

    save(t: T): Observable<T> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        let options = new RequestOptions({
            method: RequestMethod.Post,

        });
        return this._http.post<T>(this.uri, t);
    }

    update(id: ID, t: T): Observable<T> {
        return this._http.put<T>(this.uri + "/" + id, t, {});
    }

    findOne(id: ID): Observable<T> {
        return this._http.get<T>(this.uri + "/" + id);
    }

    findAll(pageRequest?: PageRequest): Observable<Page<T>> {
        const params: { [key: string]: any } = !pageRequest ? {} : {
            pageNumber: pageRequest.page,
            pageSize: pageRequest.size,
            sortCol: pageRequest.sort.column,
            sortDir: pageRequest.sort.direction
        };
        return this._http.get<Page<T>>(this.uri, { params: params });
    }

    delete(id: ID): Observable<T> {
        return this._http.delete<T>(this.uri + '/' + id);
    }
}
