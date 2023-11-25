import { CitiesResponse } from "./CitiesResponse"
import { UsersResponse } from "./UsersResponse"

export interface ItinerariesResponse {
    id: number,
    name: string,
    ini_date: string,
    end_date: string,
    users: UsersResponse,
    city: CitiesResponse,
  }