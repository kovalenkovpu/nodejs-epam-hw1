interface RawLine {
	Book: string;
	Author: string;
	Amount: string;
	Price: string;
}

interface ResultLine {
	book: string;
	author: string;
	price: number;
}

export type { RawLine, ResultLine };
