export interface AuthRepository {
  login(params: { username: string; password: string }): void;
}

export type AuthRepositoryMethodsParams =
  TypesUtil.InterfaceMethodsFirstParams<AuthRepository>;

// TODO: ADD REMOTE DATASOURCE
class AuthRepositoryImpl implements AuthRepository {
  constructor() {}

  login(params: AuthRepositoryMethodsParams['login']) {}
}

export default AuthRepositoryImpl;
