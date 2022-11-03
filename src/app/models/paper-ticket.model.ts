export interface PaperTicket {
	reduced: boolean
	validFor: string
	zone: string
	price: number
}

export const possibleTickets = ['20 min', '40 min', '1 h', '2 h', '24 h', '7 d']
