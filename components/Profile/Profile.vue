<template>
  <section
    v-if="store.userProfile"
    class="w-[600px] h-96 bg-[#1e2a48] rounded-xl"
  >
    <div class="content-container grid grid-cols-10">
      <div class="image-wrapper col-span-3 flex flex-col items-center mt-8">
        <img
          v-if="store.userProfile"
          class="rounded-full w-32 border-white border-[1px]"
          :src="store.userProfile.avatar_url"
          alt=""
        />
      </div>
      <div
        class="
          profile-wrapper
          col-span-7
          flex flex-col
          h-96
          justify-between
          p-9
        "
      >
        <div class="profile-deatils flex w-full justify-between items-center">
          <div class="profile-details-user">
            <p v-if="store.userProfile" class="text-white text-2xl">
              {{
                store.userProfile.name
                  ? store.userProfile.name
                  : "No profile name"
              }}
            </p>
            <p v-if="store.userProfile" class="text-blue-600 text-sm">
              @{{ store.userProfile.login }}
            </p>
          </div>
          <p v-if="store.userProfile" class="text-white text-sm font-thin">
            Joined
            {{
              formatDate(store.userProfile.created_at)
                ? formatDate(store.userProfile.created_at)
                : "n/a"
            }}
          </p>
        </div>
        <p v-if="store.userProfile" class="text-slate-400 text-sm font-thin">
          {{ store.userProfile.bio ? store.userProfile.bio : "n/a" }}
        </p>

        <div
          class="
            repo-details-container
            flex
            justify-between
            bg-[#141d30]
            text-white
            p-3
            rounded-xl
          "
        >
          <div class="repos">
            <p class="text-sm font-thin">Repos</p>
            <p v-if="store.userProfile">
              {{
                store.userProfile.public_repos
                  ? store.userProfile.public_repos
                  : "0"
              }}
            </p>
          </div>
          <div v-if="store.userProfile" class="followers">
            <p class="text-sm font-thin">Followers</p>
            <p>
              {{
                store.userProfile.followers ? store.userProfile.followers : "0"
              }}
            </p>
          </div>
          <div v-if="store.userProfile" class="following">
            <p class="text-sm font-thin">Following</p>
            <p>
              {{
                store.userProfile.following ? store.userProfile.following : "0"
              }}
            </p>
          </div>
        </div>

        <div class="socials-container grid grid-cols-2 gap-y-4 text-white">
          <div class="social flex items-center">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mr-2"
            >
              <path
                d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z"
              />
            </svg>
            <p v-if="store.userProfile" class="text-sm font-thin">
              {{
                store.userProfile.location ? store.userProfile.location : "n/a"
              }}
            </p>
          </div>
          <div v-if="store.userProfile" class="social flex items-center">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mr-2"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
            <p class="text-sm font-thin">
              {{
                store.userProfile.twitter_username
                  ? store.userProfile.twitter_username
                  : "n/a"
              }}
            </p>
          </div>
          <div class="social flex items-center">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="mr-2"
            >
              <path
                d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
              />
            </svg>
            <p v-if="store.userProfile" class="text-sm font-thin">
              {{ truncateString(store.userProfile.html_url, 15) }}
            </p>
          </div>
          <div class="social flex items-center">
            <svg
              fill="white"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class="mr-2"
            >
              <path
                d="M13 2h2v2h1v19h1v-15l6 3v12h1v1h-24v-1h1v-11h7v11h1v-19h1v-2h2v-2h1v2zm8 21v-2h-2v2h2zm-15 0v-2h-3v2h3zm8 0v-2h-3v2h3zm-2-4v-13h-1v13h1zm9 0v-1h-2v1h2zm-18 0v-2h-1v2h1zm4 0v-2h-1v2h1zm-2 0v-2h-1v2h1zm9 0v-13h-1v13h1zm7-2v-1h-2v1h2zm-18-1v-2h-1v2h1zm2 0v-2h-1v2h1zm2 0v-2h-1v2h1zm14-1v-1h-2v1h2zm0-2.139v-1h-2v1h2z"
              />
            </svg>
            <p v-if="store.userProfile" class="text-sm font-thin">
              {{
                store.userProfile.company ? store.userProfile.company : "n/a"
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "~/store/useStore";
const store = useStore();

function formatDate(dateString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function truncateString(str, length = 20) {
  if (str.length <= length) return str;
  return str.substring(0, length) + "...";
}
</script>