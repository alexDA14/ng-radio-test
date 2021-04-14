import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LoadingService } from '../../../shared/services/loading.service';

@Component({
  selector: 'ng-radio-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public loading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.loading = this.loadingService.loading$;
  }
}
