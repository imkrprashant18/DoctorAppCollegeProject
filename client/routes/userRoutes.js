const express = require("express");
const {
  registerController,
  loginController,
  authController,
  applyDoctorController,
  getAllNotification,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCTRL");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();
// Routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// AUTH || POST
router.post("/getUserData", authMiddleware, authController);
// Apply  Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);
// Notification || POST
router.post("/get-all-notification", authMiddleware, getAllNotification);
// Notification || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

// GET ALL DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorController);

// Book Appointment
router.post("/book-appointment", authMiddleware, bookAppointmnetController);

// Booking Avaliablity || Post
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

// Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
