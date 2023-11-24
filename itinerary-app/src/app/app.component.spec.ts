import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { FlightsService } from './services/flights.service';
import { FlightsResponse } from './models/flight-response.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let authService: AuthService;
  let flightsService: FlightsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AuthService,
        FlightsService
      ]
    }).compileComponents();

    authService = TestBed.inject(AuthService);
    flightsService = TestBed.inject(FlightsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'itinerary-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('itinerary-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, itinerary-app');
  });

  // Pruebas para AuthService
  it('should logout securely', () => {
    const mockResponse = { message: 'Logout exitoso (modo seguro)' };

    authService.logout(true).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/logout');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should handle unsuccessful logout', () => {
    const mockErrorResponse: any = { status: 400, statusText: 'Bad Request' };

    authService.logout(false).subscribe(
      () => {},
      error => {
        expect(error.status).toEqual(400);
        expect(error.statusText).toEqual('Bad Request');
      }
    );

    const req = httpMock.expectOne('/logout');
    expect(req.request.method).toBe('POST');
    req.flush(null, mockErrorResponse);
  });

  // Pruebas para FlightsService
  it('should retrieve flights by ID', () => {
    const mockFlight: FlightsResponse = {
      id: 1,
      departureCity: 'City A',
      arrivalCity: 'City B',
      startDate: new Date('2023-12-01'),
      endDate: new Date('2023-12-05')
    };

    flightsService.getFlightById(1).subscribe((flight: FlightsResponse) => {
      expect(flight).toEqual(mockFlight);
    });

    const req = httpMock.expectOne('http://your-api-url/api/v1/flights/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockFlight);
  });

});

