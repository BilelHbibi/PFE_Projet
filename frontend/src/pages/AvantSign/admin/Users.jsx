import React, { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../../redux/loadersSlice";
import moment from "moment";
import { GetAllUsers, UpdateUserStatus } from "../../../apicalls/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetAllUsers(null);
      dispatch(setLoader(false));
      if (response.success) {
        setUsers(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const onStatusUpdate = async (id, status) => {
    try {
      dispatch(setLoader(true));
      const response = await UpdateUserStatus(id, status);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (text, record) => {
        return record.role.toUpperCase();
      },
    },
    {
      title: "Created At",
      dataIndex: "Created At",
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        return record.status.toUpperCase();
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const { status, _id } = record;
        return (
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {status === "active" && (
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  onStatusUpdate(_id, "blocked");
                }}
              >
                Block
              </span>
            )}

            {status === "blocked" && (
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  onStatusUpdate(_id, "active");
                }}
              >
                unblock
              </span>
            )}

          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={users} />
    </>
  );
};

export default Users;
