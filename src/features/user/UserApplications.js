import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applicationsFetched } from "./UserSlice";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";

const StyledTableRow = styled(TableRow)`
  background: #fff;
  &:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
`;

function UserApplications() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.profileData);
  const applications = useSelector((state) => state.user.applications);
  const isFetching = useSelector((state) => state.user.isFetching);

  useEffect(() => {
    if (applications === null) {
      dispatch(applicationsFetched(user));
    }
  }, [applications]);

  if (isFetching && applications === null)
    return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (applications.length === 0 && !isFetching)
    return <p style={{ textAlign: "center" }}>There's no applications, yet</p>;

  return (
    <>
      <h1>Your applications</h1>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">City</TableCell>
              <TableCell align="center">Application date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((application) => (
              <StyledTableRow key={application.id}>
                <TableCell component="th" scope="row">
                  {application.title}
                </TableCell>
                <TableCell align="center">{application.jobType}</TableCell>
                <TableCell align="center">{application.company}</TableCell>
                <TableCell align="center">{application.location}</TableCell>
                <TableCell align="center">
                  {new Date(application.date)
                    .toString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default UserApplications;
