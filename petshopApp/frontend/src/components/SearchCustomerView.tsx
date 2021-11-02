/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";

//  QUERIES:
import { CUSTOMERS_BY_NAME_LIKE } from "../graphql/queries";
import { CustomersByNameLikeResult } from "../types/Customer";
import { TableCustomerView } from "./Customer/TableCustomerView";

import {
  VFlow,
  TextField,
  HFlow,
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "bold-ui";
import AuthContext from "../AuthContext";

let timeout: NodeJS.Timeout;

export function SearchCustomerView() {
  const { user } = useContext(AuthContext);

  const [findCustomers, { data: customers }] =
    useLazyQuery<CustomersByNameLikeResult>(CUSTOMERS_BY_NAME_LIKE, {
      fetchPolicy: "network-only",
    });

  const [text, setText] = useState("");

  useEffect(() => {
    findCustomers({ variables: { name: text } });
  }, [findCustomers, text]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setText(value);
    }, 200);
  };

  return (
    <VFlow>
      <HFlow
        alignItems="center"
        justifyContent="center"
        style={css`
          margin-top: 1rem;
        `}
      >
        <TextField
          icon="zoomOutline"
          label="Digite um nome"
          placeholder="Nome"
          onChange={handleChange}
        />
      </HFlow>
      <HFlow alignItems="flex-start" justifyContent="center">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Data de nascimento</TableHeader>
              {user!.isAdmin && <TableHeader>A pagar</TableHeader>}
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.customersByNameLike.map((c) => {
              return <TableCustomerView key={c.id} customer={c} />;
            })}
          </TableBody>
        </Table>
      </HFlow>
    </VFlow>
  );
}
