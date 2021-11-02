import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

//  QUERIES:
import { PETS_BY_NAME_LIKE } from "../graphql/queries";
import { PetsByNameLikeResult } from "../types/Pet";
import { TablePetView } from "./Pet/TablePetView";

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
import { css } from "@emotion/core";

let timeout: NodeJS.Timeout;

export function SearchPetView() {
  const [findPets, { data: pets }] = useLazyQuery<PetsByNameLikeResult>(
    PETS_BY_NAME_LIKE,
    {
      fetchPolicy: "network-only",
    }
  );

  const [text, setText] = useState("");

  useEffect(() => {
    findPets({ variables: { name: text } });
  }, [findPets, text]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setText(value);
    }, 200);
  };

  return (
    <>
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
        <HFlow alignItems="center" justifyContent="center">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Data de nascimento</TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {pets?.petsByNameLike.map((p) => {
                return <TablePetView key={p.id} pet={p} />;
              })}
            </TableBody>
          </Table>
        </HFlow>
      </VFlow>
    </>
  );
}
