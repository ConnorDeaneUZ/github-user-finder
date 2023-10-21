<template>
  <section
    class="
      bg-[#141d30]
      h-screen
      overflow-y-auto
      flex flex-col
      items-center
      justify-center
    "
  >
    <h3 class="text-white uppercase text-xl font-bold">Github User Finder</h3>
    <search />

    <pre v-if="userProfile">
        {{ userProfile }}
    </pre>
  </section>
</template>

<script setup>
import { useStore } from "~/store/useStore";

const store = useStore();
const { userProfile, error, fetchUserProfile } = store;
</script>