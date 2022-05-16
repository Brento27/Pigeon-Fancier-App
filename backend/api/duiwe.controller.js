import DuiweDAO from "../dao/duiweDAO.js";

export default class DuiweController {
  static async apiGetDuiwe(req, res, next) {
    const duiwePerPage = req.query.duiwePerPage
      ? parseInt(req.query.duiwePerPage)
      : 20;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    let filters = {};
    if (req.query.sex) {
      filters.sex = req.query.sex;
    } else if (req.query.letters) {
      filters.letters = req.query.letters;
    } else if (req.query.union) {
      filters.union = req.query.union;
    } else if (req.query.ring_no) {
      filters.ring_no = req.query.ring_no;
    } else if (req.query.year) {
      filters.year = req.query.year;
    } else if (req.query.colour) {
      filters.colour = req.query.colour;
    }

    const { duiweList, totalNumDuiwe } = await DuiweDAO.getDuiwe({
      filters,
      page,
      duiwePerPage,
    });

    let response = {
      duiwe: duiweList,
      page: page,
      filters: filters,
      entries_per_page: duiwePerPage,
      total_results: totalNumDuiwe,
    };
    res.json(response);
  }
  static async apiGetDuiweById(req, res, next) {
    try {
      let id = req.params.id || {};
      let duiwe = await DuiweDAO.getDuiweById(id);
      if (!duiwe) {
        res.status(404).json({ error: "not found" });
        return;
      }
      res.json(duiwe);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
  static async apiGetLetters(req, res, next) {
    try {
      let propertyTypes = await DuiweDAO.getLetters();
      res.json(propertyTypes);
    } catch (e) {
      console.log(`api,${e}`);
      res.status(500).json({ error: e });
    }
  }
}
