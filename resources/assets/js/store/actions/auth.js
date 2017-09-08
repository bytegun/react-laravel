/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import {
  user,
} from '../action-types';

const {
  CHECK,
  LOGIN,
  LOGOUT,
  REFRESH_TOKEN,
  RESET_PASSWORD
} = user

export function check() {
  return {
    type: CHECK,
  }
}

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function refreshToken(payload) {
  return {
    type: REFRESH_TOKEN,
    payload
  }
}

export function resetPassword() {
  return {
    type: RESET_PASSWORD,
  }
}

export default {
  check,
  login,
  logout,
  refreshToken,
  resetPassword,
};
