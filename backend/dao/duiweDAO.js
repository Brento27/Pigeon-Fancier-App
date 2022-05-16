import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let duiwe

export default class DuiweDAO {
  static async injectDB(conn) {
    if (duiwe) {
      return;
    }
    try {
      duiwe = await conn.db(process.env.DUIWE_NS).collection("Data");
    } catch (e) {
      console.error(`unable to connect in DuiweDAO: ${e}`);
    }
  }
  static async getDuiwe({
    // default filter
    filters = null,
    page = 0,
    duiwePerPage = 20, // will only get 20 duiwe at once
  } = {}) {
    let query;
    if (filters) {
      if ("letters" in filters) {
        query = { letters: { $eq: filters["letters"] } };
      } else if ("sex" in filters) {
        query = { sex: { $eq: filters["sex"] } };
      } else if ("union" in filters) {
        query = { union: { $eq: filters["union"] } };
      } else if ("ring_no" in filters) {
        query = { ring_no: { $eq: filters["ring_no"] } };
      } else if ("year" in filters) {
        query = { year: { $eq: filters["year"] } };
      } else if ("colour" in filters) {
        query = { colour: { $eq: filters["colour"] } };
      }
    }
    let cursor;
    try {
      cursor = await duiwe
        .find(query)
        .limit(duiwePerPage)
        .skip(duiwePerPage * page);
      const duiweList = await cursor.toArray();
      const totalNumDuiwe = await duiwe.countDocuments(query);
      return { duiweList, totalNumDuiwe };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { duiweList: [], totalNumDuiwe: 0 };
    }
  }
  static async getLetters() {
    let letters = [];
    try {
      letters = await duiwe.distinct("letters");
      return letters;
    } catch (e) {
      console.error(`unable to get letters, $(e)`);
      return letters;
    }
  }
  static async getDuiweById(id) {
    try {
      return await duiwe
        .aggregate([
          {
            $match: {
              _id: new ObjectId(id),
            },
          },
          // {
          //   $lookup: {
          //     from: "reviews",
          //     localField: "_id",
          //     foreignField: "movie_id",
          //     as: "reviews",
          //   },
          // },
        ])
        .next();
    } catch (e) {
      console.error(`something went wrong in getDuiweById: ${e}`);
      throw e;
    }
  }
}
