import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ChannelItem } from '../../../../types/channel-item.interface';
import { radioChannels } from '../channels.mock';

@Injectable({
  providedIn: 'root'
})
export class RadioChannelsMockService implements InMemoryDbService {
  createDb(): { 'radio-stations': ChannelItem[] } {
    return { 'radio-stations': radioChannels };
  }
}
