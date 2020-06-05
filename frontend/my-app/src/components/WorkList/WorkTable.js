// import React from 'react';
// import { makeStyles , withStyles} from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(topic, startDate, endDate, level, comments) {
//   return { topic, startDate, endDate, level, comments };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function SimpleTable(props) {
//   const classes = useStyles();
  
 

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Topic</StyledTableCell>
//             <StyledTableCell align="right">Start Date</StyledTableCell>
//             <StyledTableCell align="right">End Date</StyledTableCell>
//             <StyledTableCell align="right">Level</StyledTableCell>
//             <StyledTableCell align="right">Comments</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.todos ? props.todos.map((row, index) => (
//             <TableRow key={index}>
//               <StyledTableCell component="td" scope="row">
//                 {row.topic}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.startDate}</StyledTableCell>
//               <StyledTableCell align="right">{row.endDate}</StyledTableCell>
//               <StyledTableCell align="right">{row.level}</StyledTableCell>
//               <StyledTableCell align="right">{row.comments}</StyledTableCell>
//             </TableRow>
//           )) : []}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }