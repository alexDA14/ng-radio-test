import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { RadioChannelsApiService } from '../../../core/api/radio-channels-api.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { ChannelItem } from '../../../types/channel-item.interface';
import { PaginationResponse } from '../../../types/pagination-response.interface';

@Component({
  selector: 'ng-radio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public channels: ChannelItem[] = [];
  public isLoading = false;

  private paginationPageSize = 16;
  private activePage = 1;
  private isLastPage = false;
  private channelsSubs: Subscription;

  constructor(
    private loadingService: LoadingService,
    private channelsService: RadioChannelsApiService
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    this.getChannels();
  }

  private getChannels(): void {
    this.channelsSubs = this.channelsService.getChannels(this.paginationPageSize, this.activePage)
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe(({ list, isLastPage }: PaginationResponse<ChannelItem>) => {
        this.channels = [...this.channels, ...list];
        this.isLastPage = isLastPage;
        this.activePage += 1;
        this.isLoading = false;
      });
  }

  public onScrollDown(): void {
    if (this.isLoading || this.isLastPage) {
      return;
    }

    this.isLoading = true;
    this.getChannels();
  }

  ngOnDestroy(): void {
    this.channelsSubs?.unsubscribe();
  }
}
