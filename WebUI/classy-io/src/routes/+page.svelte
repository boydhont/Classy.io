<script lang="ts">
  import {
    Fileupload,
    Helper,
    Label,
    Checkbox,
    Button,
    Spinner,
    Progressbar,
  } from "flowbite-svelte";

  let checks: any;

  import CheckForm from "$lib/components/CheckForm.svelte";
  let value: string;
  let showChecks = false;

  let checksRunning = false;
  let currentChecks = [];
  let checker = false;

  let progress = 0;

  let currentCheckIndex = 0;

  function addChecks(element: string) {
    currentChecks = [...currentChecks, { label: element, checked: false }];
    setTimeout(() => {
      currentChecks[currentCheckIndex].checked = true;
      currentCheckIndex++;
    }, 1000);

    progress += Math.round(Math.random() * (20 - 10) + 20);
    if (progress > 80) progress = 89; // Ensure progress does not exceed 80%
  }

  async function handleChecks(event) {
    checks = event.detail;
    checksRunning = true;
    checker = true;
    await Promise.all(
      checks.map((element, index) => {
        return new Promise((resolve) =>
          setTimeout(() => {
            addChecks(element);
            resolve(null);
          }, index * 2000)
        );
      })
    );
    setTimeout(() => {
      checksRunning = false;
    }, 1000);
  }
</script>

<div class="h-screen px-48 py-20 flex items-center">
  <div class="px-[16vw] bg-neutral-100 py-20 rounded-xl h-full w-full relative">
    <div class="w-full flex justify-center">
      <img class="h-52" src="/classy.io_logo.svg" alt="" />
    </div>
    {#if !showChecks}
      <Label class="space-y-2 mb-2 pt-20 text-lg">
        <span>Upload you IFC</span>
        <Fileupload bind:value></Fileupload>
      </Label>
      <div class="w-full">
        <Button
          color="alternative"
          class="w-full"
          on:click={() => {
            showChecks = true;
          }}>Choose Your Checks</Button
        >
      </div>
    {:else if checksRunning || (true && checker)}
      <div class="my-10 h-[40%]">
        {#each currentChecks as check, index (check.label)}
          <div class="grid grid-cols-2 gap-5 mt-5">
            <Label for={check.label}>{check.label}</Label>
            <Checkbox id={check.label} bind:checked={check.checked}></Checkbox>
          </div>
        {/each}
      </div>
      <div class="">
        <Progressbar
          {progress}
          animate
          precision={1}
          tweenDuration={1000}
          labelOutside="Accuracy"
          size="h-6"
          labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
          class="mb-8"
        />
        {#if !checksRunning}
          <Button class="col-span-2 w-full ">Go to result</Button>
        {/if}
      </div>
    {:else}
      <CheckForm on:checks={handleChecks} />
    {/if}
  </div>
</div>
