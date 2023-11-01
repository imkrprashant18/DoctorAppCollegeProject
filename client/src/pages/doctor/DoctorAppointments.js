import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
// import axios from "axios";
// import moment from "moment";
// import { message, Table } from "antd";

const DoctorAppointments = () => {
  // const [appointments, setAppointments] = useState([]);

  // const getAppointments = async () => {
  //   try {
  //     const res = await axios.get("/api/v1/doctor//doctor-appointments", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     if (res.data.success) {
  //       setAppointments(res.data.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const columns = [
  //   {
  //     title: "ID",
  //     dataIndex: "_id",
  //   },
  //   {
  //     title: "Date & Time",
  //     dataIndex: "date",
  //     render: (text, record) => (
  //       <span>
  //         {moment(record.date).format("DD-MM-YYYY")} &nbsp;
  //         {moment(record.time).format("HH:mm")}
  //       </span>
  //     ),
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //   },
  // ];

  // useEffect(() => {
  //   getAppointments();
  // }, [appointments]);
  return (
    <Layout>
      <h1>Appointments List</h1>
      {/* <Table columns={columns} dataSource={appointments} /> */}
      <p>Under Processss</p>
    </Layout>
  );
};

export default DoctorAppointments;
