import { fetchApi } from './base';

export interface ILoginFormValue extends Record<string, unknown> {
  login: string;
  password: string;
}

export interface INewPasswordFormValue extends Record<string, unknown> {
  login: string;
  newPassword: string;
  code: string;
}

export interface IAccountSettingFormValue {
  login: string;
  phone?: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const login: () => Promise<ILoginResponse> = async () => {
  return fetchApi.post(`/api/account/login`);
};

export const oauthGithub: (code: string) => Promise<void> = async (code: string) => {
  return fetchApi.post(
    `/api/account/oauth/github/callback/${process.env.NODE_ENV === 'development' ? 'LOCAL' : 'PRODUCTION'}`,
    { code }
  );
};

export const tokenRefresh: (refreshToken: string) => Promise<ILoginResponse> = async (refreshToken) => {
  return fetchApi.post(`/api/account/refresh`, { refreshToken });
};
