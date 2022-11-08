export interface KkmTicket {
	activeSince: string
	activeUntil: string
	busLine: string
	isActive: boolean
}

export const MockKkmTickets: KkmTicket[] = [
	{ activeSince: '10/11/2022', activeUntil: '10/12/2022', busLine: '112', isActive: true },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: 'all', isActive: false },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: '116', isActive: false },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: 'all', isActive: false },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: '150, 116', isActive: false },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: 'all', isActive: false },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: 'all', isActive: false },
	{ activeSince: '10/09/2022', activeUntil: '10/10/2022', busLine: 'all', isActive: false },
]
