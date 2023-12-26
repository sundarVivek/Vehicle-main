import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

  private modalComponentSubject = new BehaviorSubject<any>(null);
  modalComponent$: Observable<any> = this.modalComponentSubject.asObservable();

  openModal(component: any): void {
    this.modalComponentSubject.next(component);
    this.isOpenSubject.next(true);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }
}
