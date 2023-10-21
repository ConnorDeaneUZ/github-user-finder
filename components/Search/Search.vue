<template>
  <section class="bg-[#1e2a48] w-[600px] h-16 rounded-xl m-4">
    <div class="search-container flex items-center justify-between h-full px-4">
      <div class="search-wrapper flex items-center">
        <svg
          class="fill-[#0178FE] mr-4"
          width="24px"
          height="24px"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
            fill-rule="nonzero"
          />
        </svg>
        <input
          class="
            h-16
            w-96
            text-white
            bg-[#1e2a48]
            outline-none
            placeholder-white
          "
          type="text"
          placeholder="Search Github username..."
          v-model="search"
        />
      </div>
      <button
        @click="fetchUserData"
        class="
          bg-[#0178FE]
          h-10
          w-20
          text-white
          rounded-xl
          text-xs
          font-bold
          drop-shadow-lg
        "
      >
        Search
      </button>
    </div>

    <pre class="text-white">
        {{ userProfile }}
    </pre>
  </section>
</template>

<script setup>
import { useStore } from "~/store/useStore";
import { ref } from "vue";

const search = ref("");
const store = useStore();
const { userProfile, error, fetchUserProfile } = store;

function fetchUserData() {
  fetchUserProfile(search.value);
}
</script>