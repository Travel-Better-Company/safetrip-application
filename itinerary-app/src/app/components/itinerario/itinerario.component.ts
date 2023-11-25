import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItinerariesService} from "../../services/itineraries.service";
@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrl: './itinerario.component.css'
})
export class ItinerarioComponent {

  itineraryForm: FormGroup;
  fechaContrato = new FormControl();
  constructor(private fb: FormBuilder, private itineraryService: ItinerariesService) {
    this.itineraryForm = this.fb.group({
      activityName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }



  planActivities(){

  }

  onSubmit(): void {
    if (this.itineraryForm.valid) {

    }
  }
}
