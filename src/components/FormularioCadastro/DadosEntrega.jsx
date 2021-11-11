import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        type="number"
        id="cep"
        label="cep"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereço"
        label="endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
