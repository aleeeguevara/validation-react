import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState(""); //1ra é a referência para o valor do estado atual e a segunda é a função que altera esse estado.função vai atribuir novo estado a variavel
  const [sobrenome, setSobrenome] = useState(""); //Com essa separação o React consegue fazer a sincronização entre as alterações de estado e o ciclo de vida do componente.
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
          onBlur={event=>{
            const ehValido= validarCPF(cpf) 
            setErros({cpf:ehValido});
          }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="Promoções"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="secondary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="Novidades"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="secondary"
          />
        }
      />
      <Button variant="contained" type="submit" color="secondary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
