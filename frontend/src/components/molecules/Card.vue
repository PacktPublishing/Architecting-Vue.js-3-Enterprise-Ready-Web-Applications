<template>
  <div v-if="status === 'loading'">Loading photo...</div>
  <div v-else-if="status === 'error'">An error occurred</div>

  <div v-else>
    <img
      src="/src/assets/kunal-img.jpg"
      alt=""
      data-testid="pin"
      class="w-full h-full object-cover rounded-2xl"
    />
    <div
      class="
        absolute
        top-0
        left-0
        h-full
        w-full
        px-3
        py-3
        hover:opacity-100
        opacity-0
        transition
        duration-300
        rounded-2xl
        flex flex-col
        justify-between
      "
      style="background-color: rgba(0, 0, 0, 0.6)"
    >
      <div class="flex justify-between">
        <div class="ml-2">
          <Button type="menu" class="text-white" label="Profile">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgb(255, 253, 253); transform: ; msfilter: "
              >
                <path
                  d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                ></path>
              </svg>
            </template>
          </Button>
          <!-- ================dropdown==================== -->

          <div
            class="
              bg-white
              w-[25rem]
              h-[34.375rem]
              z-20
              absolute
              top-32
              left-10
              overflow-hidden
              rounded-2xl
              hidden
            "
          >
            <div class="h-[150px] bg-white w-full px-4 rounded-2xl pt-5">
              <h4 class="font-semibold text-center">Save</h4>
              <div
                class="
                  w-full
                  bg-[#efefef]
                  py-4
                  rounded-full
                  flex
                  hover:bg-slate-200
                  transition
                  duration-300
                  mt-5
                "
              >
                <input
                  type="text"
                  placeholder="Search"
                  class="w-full bg-transparent outline-none pl-3"
                />
              </div>
            </div>
            <div class="h-full overflow-y-auto px-3">
              <p class="mt-4">Quick save and organize later</p>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                      ></path>
                      <path
                        d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Profile</p>
                </div>

                <Button appearance="secondary" label="Save"></Button>
              </div>

              <p class="mb-3">Save to board</p>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                  z-20
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Profile</p>
                </div>

                <Button appearance="secondary" label="Save"></Button>
              </div>
              <p class="mb-3">Suggestions</p>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
              <div
                class="
                  bg-transparent
                  hover:bg-slate-400
                  flex
                  justify-between
                  mb-3
                "
              >
                <div class="flex">
                  <div
                    class="
                      w-16
                      h-16
                      rounded-xl
                      bg-gray-800
                      flex
                      justify-center
                      items-center
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                    >
                      <path
                        d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="font-semibold ml-3 text-white">Planet</p>
                </div>

                <Button appearance="secondary" label="Create"></Button>
              </div>
            </div>
          </div>
          <!-- ==============end==dropdown==================== -->
          <div class="bg-white w-44 rounded-lg shadow-lg hidden">
            <div class="py-2">
              <div
                class="
                  hover:bg-slate-100
                  transition
                  duration-300
                  mx-2
                  px-2
                  py-1.5
                  rounded-lg
                "
              >
                <p class="text-black font-semibold text-md">Create Idea Pin</p>
              </div>
              <div
                class="
                  hover:bg-slate-100
                  transition
                  duration-300
                  mx-2
                  px-2
                  py-1.5
                  rounded-lg
                "
              >
                <p class="text-black font-semibold text-md">Create Pin</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          appearance="secondary"
          data-testid="create_pin"
          label="Save"
          @click="createNewPin"
        ></Button>
      </div>
      <div class="flex justify-between">
        <Button appearance="secondary" label="yputube...">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z"
              ></path>
            </svg>
          </template>
        </Button>

        <div class="flex justify-betwe">
          <div
            class="
              bg-red-500
              w-8
              h-8
              rounded-full
              flex
              justify-center
              items-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M6 18h12v2H6zm6-14.414-6.707 6.707 1.414 1.414L11 7.414V16h2V7.414l4.293 4.293 1.414-1.414z"
              ></path>
            </svg>
          </div>

          <div
            class="
              bg-red-500
              ml-2
              w-8
              h-8
              rounded-full
              flex
              justify-center
              items-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../atoms/Button.vue";
defineProps({
  photo: { type: Object, default: () => {} },
  status: { type: String, default: "Loading" },
});

function createNewPin() {
  console.log("It creates new pin");
}
</script>

<script >
export default {
  name: "CardComponent",
};
</script>


<style>
</style>