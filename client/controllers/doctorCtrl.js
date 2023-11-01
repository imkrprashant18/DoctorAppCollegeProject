const doctorModel = require("../models/doctorModels");
const appointmentModel = require("../models/appointmentModels");
const userModel = require("../models/userModels");

// get doctor info callbacks
const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      messege: "doctor data fetched successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "Error in fetching Doctor Detials",
      error,
    });
  }
};
const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      messege: "Doctor Profile Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "Doctor Profile Update Issue",
      error,
    });
  }
};

// get single doctor
const getDoctorByIdcontroller = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ _id: req.body.doctorId });
    res.status(200).send({
      success: true,
      messege: "Single Doctor Info Fetch",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      messege: "Error in Single Doctor Info",
    });
  }
};
// //doctorAppointment
// const doctorAppointmentsController = async (req, res) => {
//   try {
//     // console.log("test");
//     const doctor = await doctorModel.findOne({ userId: req.body.userId });
//     const appointments = await appointmentModel.findOne({
//       doctorId: doctor._id,
//     });

//     res.status(200).send({
//       success: true,
//       messege: "Doctor Appointments Fetched Successfully",
//       data: appointments,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       messege: "Error in Doctor Appointments",
//       success: false,
//       error,
//     });
//   }
// };

// // update status controller
// const updateStatusController = async (req, res) => {
//   try {
//     const { appointmentsId, status } = req.body;
//     const appointments = await appointmentModel.findByIdAndUpdate(
//       appointmentsId,
//       { status }
//     );
//     const user = await userModel.findOne({ _id: appointments.userId });
//     const notifcation = user.notifcation;
//     notifcation.push({
//       type: "status-updated",
//       message: `your appointment has been updated ${status}`,
//       onCLickPath: "/doctor-appointments",
//     });
//     await user.save();
//     res.status(200).send({
//       success: true,
//       message: "Appointment Status Updated",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error In Update Status",
//     });
//   }
// };
module.exports = {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdcontroller,
};
