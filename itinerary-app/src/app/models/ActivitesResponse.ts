import { ItinerariesResponse } from "./ItinerariesResponse";

export interface ActivitiesResponse {
    id:number,
    name: string,
    iniDate: string,
    startTime: string,
    endTime: string,
    itinerary:ItinerariesResponse
}