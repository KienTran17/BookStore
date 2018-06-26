import queryDB from './db';

export const getAllWard = () => (
    queryDB(`select * from "ward"  `,[])
);
