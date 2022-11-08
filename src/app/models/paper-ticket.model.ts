export interface PaperTicket {
	reduced: boolean
	time: '#valid-20min' | '#valid-60min' | '#valid-90min' | '#valid-24h' | '#valid-48h' | '#valid-72h' | '#valid-7d' | '#valid-group'
	zone: string
	price: number
}

export const possibleTickets: PaperTicket[] = [
	{
		reduced: false,
		time: '#valid-20min',
		zone: 'I + II + III',
		price: 4.0,
	},
	{
		reduced: false,
		time: '#valid-60min',
		zone: 'I + II + III',
		price: 6.0,
	},
	{
		reduced: false,
		time: '#valid-90min',
		zone: 'I + II + III',
		price: 8.0,
	},
	{
		reduced: false,
		time: '#valid-24h',
		zone: 'I',
		price: 17.0,
	},
	{
		reduced: false,
		time: '#valid-24h',
		zone: 'I + II + III',
		price: 22.0,
	},
	{
		reduced: false,
		time: '#valid-48h',
		zone: 'I + II + III',
		price: 35.0,
	},
	{
		reduced: false,
		time: '#valid-72h',
		zone: 'I + II + III',
		price: 50.0,
	},
	{
		reduced: false,
		time: '#valid-7d',
		zone: 'I',
		price: 56.0,
	},
	{
		reduced: false,
		time: '#valid-7d',
		zone: 'I + II + III',
		price: 68.0,
	},
	{
		reduced: false,
		time: '#valid-group',
		zone: 'I',
		price: 50.0,
	},
	{
		reduced: false,
		time: '#valid-group',
		zone: 'I + II + III',
		price: 60.0,
	},
	// reduced:
	{
		reduced: true,
		time: '#valid-20min',
		zone: 'I + II + III',
		price: 2.0,
	},
	{
		reduced: true,
		time: '#valid-60min',
		zone: 'I + II + III',
		price: 3.0,
	},
	{
		reduced: true,
		time: '#valid-90min',
		zone: 'I + II + III',
		price: 4.0,
	},
	{
		reduced: true,
		time: '#valid-24h',
		zone: 'I',
		price: 8.5,
	},
	{
		reduced: true,
		time: '#valid-24h',
		zone: 'I + II + III',
		price: 11.0,
	},
	{
		reduced: true,
		time: '#valid-48h',
		zone: 'I + II + III',
		price: 17.5,
	},
	{
		reduced: true,
		time: '#valid-72h',
		zone: 'I + II + III',
		price: 25.0,
	},
	{
		reduced: true,
		time: '#valid-7d',
		zone: 'I',
		price: 28.0,
	},
	{
		reduced: true,
		time: '#valid-7d',
		zone: 'I + II + III',
		price: 34.0,
	},
	{
		reduced: true,
		time: '#valid-group',
		zone: 'I',
		price: 25.0,
	},
	{
		reduced: true,
		time: '#valid-group',
		zone: 'I + II + III',
		price: 30.0,
	},
]

export const possibleTimes = Array.from(new Set(possibleTickets.map((t) => t.time)).values())
