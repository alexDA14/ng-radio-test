import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnDestroy {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private contentLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private timeoutId: any;

  public loading$ = this.loading.asObservable().pipe(delay(0));
  public contentLoading$ = this.contentLoading.asObservable().pipe(delay(0));

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

  public isLoading(): boolean {
    return this.loading.value;
  }

  public show(isContentLoad?: boolean): void {
    if (isContentLoad) {
      this.contentLoading.next(true);
    } else {
      this.loading.next(true);
    }
  }

  public hide(): void {
    this.timeoutId = setTimeout(() => {
      this.contentLoading.next(false);
      this.loading.next(false);
    }, 500);
  }

  public hideImmediately(): void {
    this.contentLoading.next(false);
    this.loading.next(false);
  }
}
