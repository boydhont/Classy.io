<script lang="ts">
  import { Fileupload, Helper, Label, Checkbox, Button } from "flowbite-svelte";
  let value: string;
  let showChecks = false;

  let checks = [false, false, false]; // Represents the state of each check

  // Define the checks
  const checkFunctions = [
    () => {
      checks[0] = true;
    },
    () => {
      checks[1] = true;
    },
    () => {
      checks[2] = true;
    },
  ];

  function runChecks() {
    checkFunctions.forEach((checkFunction, index) => {
      setTimeout(checkFunction, index * 1000); // Run each check with a delay of 1 second
    });
  }
</script>

<div class="h-full px-48 py-40">
  <div class="px-20 bg-neutral-100 py-20 rounded-xl">
    <div class="w-full flex justify-center">
      <h1 class="text-4xl tracking-wider">CLASSY.IO</h1>
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
    {:else}
      <form action="" class="grid grid-cols-2 gap-5 mt-20 px-20 justify-center">
        <Label>Offset Mesh Offset</Label>
        <Checkbox bind:checked={checks[0]}></Checkbox>
        <Label>Vector Analysis</Label>
        <Checkbox bind:checked={checks[1]}></Checkbox>
        <Label>Label Analysis</Label>
        <Checkbox bind:checked={checks[2]}></Checkbox>
        <div class="w-full col-span-2">
          <Button class="w-full" on:click={runChecks}>Run Checks</Button>
        </div>
      </form>
    {/if}
  </div>
</div>
