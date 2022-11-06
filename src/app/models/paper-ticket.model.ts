export interface PaperTicket {
	reduced: boolean
	validFor: '#valid-20min' | '#valid-40min' | '#valid-1h' | '#valid-2h' | '#valid-1d' | '#valid-7d'
	zone: string
	price: number
}

export const possibleTickets: PaperTicket[] = [
	{
		reduced: false,
		validFor: '#valid-20min',
		zone: 'I',
		price: 2.0,
	},
	{
		reduced: false,
		validFor: '#valid-40min',
		zone: 'I',
		price: 3.0,
	},
	{
		reduced: false,
		validFor: '#valid-1h',
		zone: 'I',
		price: 4.0,
	},
	{
		reduced: false,
		validFor: '#valid-2h',
		zone: 'I',
		price: 5.0,
	},
	{
		reduced: false,
		validFor: '#valid-1d',
		zone: 'I',
		price: 6.0,
	},
	{
		reduced: false,
		validFor: '#valid-7d',
		zone: 'I',
		price: 13.0,
	},
]

export const possibleTimes = Array.from(new Set(possibleTickets.map((t) => t.validFor)).values())
