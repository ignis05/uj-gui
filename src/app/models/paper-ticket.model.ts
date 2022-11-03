export interface PaperTicket {
	reduced: boolean
	validFor: string
	zone: string
	price: number
}

export const possibleTickets: PaperTicket[] = [
	{
		reduced: false,
		validFor: '20 min',
		zone: 'I',
		price: 2.0,
	},
	{
		reduced: false,
		validFor: '40 min',
		zone: 'I',
		price: 3.0,
	},
	{
		reduced: false,
		validFor: '1 h',
		zone: 'I',
		price: 4.0,
	},
	{
		reduced: false,
		validFor: '2 h',
		zone: 'I',
		price: 5.0,
	},
	{
		reduced: false,
		validFor: '1 d',
		zone: 'I',
		price: 6.0,
	},
	{
		reduced: false,
		validFor: '7 d',
		zone: 'I',
		price: 13.0,
	},
]

export const possibleTimes = Array.from(new Set(possibleTickets.map((t) => t.validFor)).values())
