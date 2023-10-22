import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    userProfile: null,
    error: null,
  }),
  actions: {
    async fetchUserProfile(username) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.userProfile = await response.json();
      } catch (err) {
        this.error = err.message;
      }
    },
  },
});
