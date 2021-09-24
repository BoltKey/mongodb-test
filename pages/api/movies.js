import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const {pid} = req.query;
  const movies = await db
    .collection("movies").find({year: 2011})
	.limit(20).toArray()
	//.count()
	//.deleteOne({year: 2000});
    /*.sort({ metacritic: -1 })
    .limit(20)
    .toArray();*/

  res.json(movies);
};