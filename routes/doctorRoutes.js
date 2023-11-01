const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdcontroller,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");

const router = express.Router();
// post || Single Doctor Info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
// post || update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

// post || Get Single Doctor Info
router.post("/getDoctorById", authMiddleware, getDoctorByIdcontroller);
// //GET Appointments
// router.get(
//   "/doctor-appointments",
//   authMiddleware,
//   doctorAppointmentsController
// );
// //POST Update Status
// router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
