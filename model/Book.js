import queryDB from './db';

export const getAllBook = () => (
    queryDB(`select * from "Book"`,[])
);
