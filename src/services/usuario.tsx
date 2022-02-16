import api from '../config/api';

export const cadastrarUsuario = async (data: any) => {
  return await api.post('/usuario/registrar/', data);
};

export const autenticarUsuario = async (data: any) => {
  const response = await api.post('/usuario/autenticar/', data);

  if (response.status === 200) {
    const { token, usuario } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  return response;
};

export const verificaAutenticacao = () => {
  const token = localStorage.getItem('token');
  //const response = await api.post(`/usuario/valida_token/`);
  return Boolean(token);
};

export const ativarUsuario = async (email: string, token: string) => {
  return await api.post('/usuario/confirmar_usuario/', { email, token });
};


export const deletarUsuario = async (email: string, senha: string) => {
  return await api.delete('/usuario/', { data: { email, senha } });
};

export const retornaUsuario = async (email: string) => {
  return await api.get(`/usuario/email/${email}`);
};

export const retornaUsuarioLogado = async () => {
  return await api.get(`/usuario/usuario_logado`);
};

export const alterarUsuario = async (usuario: any) => {
  return await api.put(`/usuario/`, { usuario });
};

export const uploadFotoUsuario = async (file: File) => {
  const data = new FormData();

  if (file) {
    data.append('file', file);
  }

  return await api.post(`/usuario/foto`, data);
};

export const recuperarSenha = async (email: string) => {
  return await api.post('/usuario/esqueceu_senha/', { email });
};

export const resetarSenha = async (email: string, token: string, senha: string) => {
  return await api.post('/usuario/resetar_senha/', { email, token, senha });
};

export const listaUsuarios = async () => {
  return await api.get(`/usuario/`);
};

