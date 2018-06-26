import { getAllBook } from '../../model/Book';

export const all = async (req, res) => {
    const allBook = await getAllBook().then(res => res);
    res.send({ code: 0, message: allBook});
}
