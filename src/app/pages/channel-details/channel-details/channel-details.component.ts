import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, finalize, map, switchMap } from 'rxjs/operators';

import { RadioChannelsApiService } from '../../../core/api/radio-channels-api.service';
import { LoadingService } from '../../../shared/services/loading.service';
import { ChannelItem } from '../../../types/channel-item.interface';

@Component({
  selector: 'ng-radio-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.scss']
})
export class ChannelDetailsComponent implements OnInit, OnDestroy {
  private initSubs: Subscription;
  public channelData: ChannelItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private channelsService: RadioChannelsApiService
  ) { }

  ngOnInit(): void {
    this.loadingService.show();
    this.initSubs = this.route.paramMap
      .pipe(
        map((params: ParamMap) => params.get('id')),
        filter((id: string | null) => !!id),
        switchMap((id: string) => this.channelsService.getChannelById(id).pipe(finalize(() => this.loadingService.hide())))
      )
      .subscribe((channel: ChannelItem) => this.channelData = channel);
  }

  ngOnDestroy(): void {
    this.initSubs?.unsubscribe();
  }
}
