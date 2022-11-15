export interface KkmAvalTicket {
	reduced: boolean
	range: 'I' | 'II' | 'III' | 'I + II' | 'II + III' | 'I + II + III' | 'singleLine'
	price: number
}

export const KkmAvalTickets: KkmAvalTicket[] = [
	{ reduced: false, range: 'singleLine', price: 80 },
	{ reduced: false, range: 'I', price: 148 },
	{ reduced: false, range: 'II', price: 79 },
	{ reduced: false, range: 'III', price: 37 },
	{ reduced: false, range: 'I + II', price: 158 },
	{ reduced: false, range: 'II + III', price: 96 },
	{ reduced: false, range: 'I + II + III', price: 179 },
	// reduced:
	{ reduced: true, range: 'singleLine', price: 40 },
	{ reduced: true, range: 'I', price: 74 },
	{ reduced: true, range: 'II', price: 39.5 },
	{ reduced: true, range: 'III', price: 18.5 },
	{ reduced: true, range: 'I + II', price: 79 },
	{ reduced: true, range: 'II + III', price: 48 },
	{ reduced: true, range: 'I + II + III', price: 89.5 },
]
