import { Component, OnInit } from '@angular/core';
import { ItinerariesService } from '../../../services/itineraries.service';

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrl: './itinerary-list.component.css'
})
export class ItineraryListComponent implements OnInit{
  constructor(private ItinerarieService:ItinerariesService){
    
  }
  ngOnInit(): void {
  }
}
