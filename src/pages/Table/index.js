import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function BasicTable({data}) {
  
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Cidade</TableCell>
              <TableCell align="right">Rua</TableCell>
              <TableCell align="right">Num</TableCell>
              <TableCell align="right">Bairro</TableCell>
              <TableCell align="right">Cep</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.nome}>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.cidade}</TableCell>
              <TableCell align="right">{row.rua}</TableCell>
              <TableCell align="right">{row.num}</TableCell>
              <TableCell align="right">{row.bairro}</TableCell>
              <TableCell align="right">{row.cep}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }