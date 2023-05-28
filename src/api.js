import axios from 'axios';

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c695ec4545msh566e7a3c9d87525p1e75afjsn049d23b9b54a',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "abe403961ce9fa4af0adf85e1f971c65";

