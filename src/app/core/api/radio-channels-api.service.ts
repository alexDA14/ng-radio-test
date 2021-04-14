import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ChannelItem } from '../../types/channel-item.interface';
import { PaginationResponse } from '../../types/pagination-response.interface';

@Injectable({
  providedIn: 'root'
})
export class RadioChannelsApiService {
  private url = 'api/radio-stations';

  private static getPaginationResponse(list: ChannelItem[], size: number, page: number): PaginationResponse<ChannelItem> {
    const startIndex = page === 1 ? 0 : (page - 1) * size;
    const endIndex = startIndex + size;
    const isLastPage = page * size >= list.length;

    return {
      list: list.slice(startIndex, endIndex),
      isLastPage
    };
  }

  constructor(private http: HttpClient) {
  }

  public getChannels(size: number = 10, page: number = 1): Observable<PaginationResponse<ChannelItem>> {
    return this.http.get<ChannelItem[]>(`${this.url}`)
      .pipe(
        catchError(err => {
          console.error('Error: ', err);

          return of([]);
        }),
        map((list: ChannelItem[]) => RadioChannelsApiService.getPaginationResponse(list, size, page))
      );
  }

  public getChannelById(id: string): Observable<ChannelItem | null> {
    if (!id || !id.trim()) {
      return EMPTY;
    }
    return this.http.get<ChannelItem>(`${this.url}/${id}`)
      .pipe(
        catchError(err => {
          console.error('Error: ', err);

          return of(null);
        }),
      );
  }
}
