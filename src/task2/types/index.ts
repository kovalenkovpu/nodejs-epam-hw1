interface RawLine {
	Book: string;
	Author: string;
	Amount: string;
	Price: string;
}

interface ResultLine {
	book: string;
	author: string;
	price: string;
}

export type { RawLine, ResultLine };
