
import { getContext, setContext } from 'svelte';
import { pb } from '.';
import type { AuthModel } from 'pocketbase';

class AuthStore {
  user: AuthModel | null = $state(null);
  isSynced = $state(false);

  constructor() {
    // runs on mount
    $effect(() => {
      if (pb.authStore.isValid) {
        this.user = pb.authStore.model;
      }
      this.isSynced = true;
    });
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    console.log('signInWithEmailAndPassword', email, password);
    const res = await pb.collection('users').authWithPassword(email, password)
    console.log('signInWithEmailAndPassword', res);
    this.user = res.record;
  }

  async signUpWithEmailAndPassword({
    email,
    password,
    passwordConfirm,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
  }) {
    if (password !== passwordConfirm) {
      throw new Error('Passwords do not match');
    }

    const res = await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
      firstName,
      lastName,
    });
    this.user = res;
  }

  async signInWithDiscord() {
    this.user = (await pb.collection('users').authWithOAuth2({ provider: 'discord' })).record;
  }

  async signInWithGithub() {
    this.user = (await pb.collection('users').authWithOAuth2({ provider: 'github' })).record;
  }

  logout() {
    pb.authStore.clear();
    this.user = null;
  }
}

// this is important if u are gonna have any SSR
// https://www.youtube.com/watch?v=EyDV5XLfagg
// https://kit.svelte.dev/docs/state-management

const AUTH_STORE_KEY = 'auth store';

export const setAuthContext = () => {
  const nAuthStore = new AuthStore();
  return setContext(AUTH_STORE_KEY, nAuthStore);
};

export const getAuthContext = (): AuthStore => {
  return getContext(AUTH_STORE_KEY);
};
