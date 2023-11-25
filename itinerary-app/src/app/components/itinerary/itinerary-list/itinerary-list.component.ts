import { Component, OnInit } from '@angular/core';
import { ItinerariesService } from '../../../services/itineraries.service';
import { ItinerariesResponse } from '../../../models/ItinerariesResponse';

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrl: './itinerary-list.component.css'
})
export class ItineraryListComponent implements OnInit{
  cards: ItinerariesResponse[] = [];
  constructor(private ItinerarieService:ItinerariesService){
  }
  ngOnInit(): void {
    this.loadItineraries();
  }
  loadItineraries(){
    this.ItinerarieService.getAllItineraries().subscribe((data: ItinerariesResponse[]) =>{
      this.cards = data;
    })
  }
}
