import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { ObjectFactoryService } from 'app/infrastructure/core-services/object-creation';
import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';

import { ApiEndpoint, ContentType } from '../../enums';

export abstract class HttpBaseService {
  public abstract get apiEndpoint(): ApiEndpoint;

  protected constructor(
    private httpClient: HttpClient,
    private objectFactoryService: ObjectFactoryService,
    private baseUrl: string) { }

  public getAsync<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createOptions();

    return this.processResponse(this.httpClient.get<T>(completeUrl, requestOptions), ctor);
  }

  public async getArrayAsync<T>(
    relativeUrl: string,
    ctor: IParameterlessConstructor<T>): Promise<T[]> {

    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createOptions();
    const array = await this.processResponse(this.httpClient.get<T[]>(completeUrl, requestOptions));

    const arrayResult = array.map(item => {
      const newObj = this.objectFactoryService.create(item, ctor);
      return newObj;
    });

    return arrayResult;
  }

  public postAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createOptions(contentType);
    return this.processResponse(this.httpClient.post<T>(completeUrl, body, requestOptions), ctor);
  }

  public deleteAsync(relativeUrl: string): Promise<void> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createOptions();
    const result = this.processResponse<void>(this.httpClient.delete<void>(completeUrl, requestOptions));

    return result;
  }

  public putAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createOptions(contentType);
    return this.processResponse(this.httpClient.put<T>(completeUrl, body, requestOptions), ctor);
  }

  public patchAsync<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createOptions(contentType);
    return this.processResponse<T>(this.httpClient.patch<T>(completeUrl, body, requestOptions), ctor);
  }

  private processResponse<T>(response: Observable<T>, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    let mappedResult = response;

    if (ctor) {
      mappedResult = mappedResult.map(f => {
        const newObj = this.objectFactoryService.create(f, ctor);
        return newObj;
      });
    }

    const result = mappedResult.toPromise();
    return result;
  }

  private mapContentType(contentType: ContentType): string {
    switch (contentType) {
      case ContentType.ApplicationJson:
        return 'application/json';
      default:
        throw new RangeError(contentType.toString() + ' is not recognized');
    }
  }

  // CAREFUL: Object is important
  // See here: https://stackoverflow.com/questions/45698594/property-data-does-not-exist-on-type-httpeventcustomer
  private createOptions(contentType?: ContentType | null): object {
    const headers = new HttpHeaders();

    if (contentType) {
      headers.append('Content-Type', this.mapContentType(contentType));
    }

    const httpOptions = {
      headers: headers
    };

    return httpOptions;
  }

  private createCompleteUrl(relativeUrl: string): string {
    let result = this.baseUrl;
    if (!result.endsWith('/')) {
      result += '/';
    }

    result += relativeUrl;

    return result;
  }
}
