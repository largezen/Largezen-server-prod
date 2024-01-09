const router = require("express").Router();
const userMiddleware = require("../middlewares/verify_user");
const {
  allLeads,
  addLead,
  getLeadById,
  updateLeadById,
} = require("../controllers/lead_controller");

router.route("/").get(userMiddleware, allLeads).post(userMiddleware, addLead);
router
  .route("/:id")
  .get(userMiddleware, getLeadById)
  .patch(userMiddleware, updateLeadById);

module.exports = router;
