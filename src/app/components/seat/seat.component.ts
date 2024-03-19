import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})

export class SeatComponent implements OnInit {

  selectedSeat!: string;

  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectSeat(seat: string): void {
    this.selectedSeat = seat;
  }

  submitSeat(): void {
    if (this.selectedSeat) {
      const data = { seat: this.selectedSeat };
      this.localStorageService.saveData(data);
      this.selectedSeat = ''; // Clear selected seat after submission
    }
  }
}
