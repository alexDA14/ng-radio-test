import { Component, Input } from '@angular/core';

import { ChannelItem } from '../../../types/channel-item.interface';

@Component({
  selector: 'ng-radio-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() data: ChannelItem;
}
