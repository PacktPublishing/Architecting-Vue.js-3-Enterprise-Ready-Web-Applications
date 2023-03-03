<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="h-20">
      <!-- ================================TOP NAVBAR================================== -->
      <div
        class="bg-black h-3/4 px-4 py-2 text-white flex justify-between items-center"
      >
        <div>
          <p class="font-semibold">
            See anything you don't like? Let's edit your home feed!
          </p>
        </div>
        <div class="flex justify-between items-center">
          <Button
            appearance="tertiary"
            label="Not now"
          />
          <Button
            appearance="tertiary"
            label="Edit my home feed"
          />
        </div>
      </div>
      <!-- ==============================END=OF=TOP NAVBAR================================== -->

      <!-- ============================NAVBAR=ICONS================================================================ -->

      <div class="bg-green h-full px-4 py-2 flex items-center">
        <!-- ================PRINTEREST==LOGO==ICON============================= -->

        <!-- ================================HOME==ICON=================================== -->

        <Button label="Home" />

        <!-- =============================END=OF==HOME==ICON=================================== -->
        <div class="ml-2">
          <Button
            type="menu"
            label="Create"
          >
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path
                  d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                />
              </svg>
            </template>
          </Button>
          <div class="bg-white w-44 rounded-lg shadow-lg hidden">
            <div class="py-2">
              <div
                class="hover:bg-slate-100 transition duration-300 mx-2 px-2 py-1.5 rounded-lg"
              >
                <p class="text-black font-semibold text-md">
                  Create Idea Pin
                </p>
              </div>
              <div
                class="hover:bg-slate-100 transition duration-300 mx-2 px-2 py-1.5 rounded-lg"
              >
                <p class="text-black font-semibold text-md">
                  Create Pin
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- -----------------------------------------SEARCH BOX-------------- -->
        <SearchField />
        <!-- -----------------------------------------SEARCH BOX-------------- -->

        <!-- =================NOTIFICATION==ICON======================== -->

        <div
          class="h-11 w-11 hover:bg-slate-100 transition duration-300 rounded-full flex justify-center items-center ml-2 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill: rgb(163, 159, 159); transform: ; msfilter: "
          >
            <path
              d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"
            />
          </svg>
          <div class="bg-red-500 absolute top-0.5 right-0 rounded-md">
            <p class="text-white text-xs font-semibold">
              99+
            </p>
          </div>
        </div>
        <!-- ===========END==OF====NOTIFICATION==ICON======================== -->

        <!-- =======================MESSAGE=ICON=========================== -->

        <div
          class="h-11 w-11 hover:bg-slate-100 transition duration-300 rounded-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill: rgb(163, 159, 159); transform: ; msfilter: "
          >
            <path
              d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.516 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        </div>
        <!-- =====================END=OF=MESSAGE=ICON=========================== -->

        <!-- ===============================================================USER===ICON================== -->

        <div
          class="h-11 w-11 hover:bg-slate-100 transition duration-300 rounded-full flex justify-center items-center"
        >
          <div
            class="w-2/4 h-2/4 rounded-full flex justify-center items-center"
            style="background-color: rgb(180, 175, 175)"
          >
            <p class="text-xs">
              s
            </p>
          </div>
        </div>
        <!-- ===========================================================END==OF==USER===ICON================== -->

        <!-- ===================================MORE OPTIONS=ICON=================================== -->

        <div class="">
          <Button appearance="icon">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgb(163, 159, 159); transform: ; msfilter: "
              >
                <path
                  d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                />
              </svg>
            </template>
          </Button>
          <div class="bg-black w-16 rounded-lg shadow-lg hidden">
            <div class="py-2">
              <div class="px-2 py-1.5 rounded-lg">
                <p class="text-white text-xs">
                  account and more options
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- ============================END==OF=====MORE OPTIONS=ICON=================================== -->
      </div>

      <!-- =========================END==OF=NAVBAR=ICONS================================================================ -->
    </nav>
  </header>
</template>

<script setup>
import Button from '../atoms/Button.vue';
import SearchField from '../molecules/SearchField.vue';
</script>
<style scoped>
</style>
