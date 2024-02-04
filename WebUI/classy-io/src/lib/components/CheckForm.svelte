<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Fileupload, Helper, Label, Checkbox, Button } from "flowbite-svelte";

  let checks = [false, false, false]; // Represents the state of each check

  let checkboxes = [
    { label: "Offset Mesh Offset", checked: false },
    { label: "Vector Analysis", checked: false },
    { label: "Label Analysis", checked: false },
  ];

  let dispatcher = createEventDispatcher();

  const checkFunctions = checkboxes.map((checkbox, index) => () => {
    checkbox.checked = true;
  });

  function runChecks() {
    dispatcher("checks", getCheckedLabels());
  }

  function getCheckedLabels() {
    return checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.label);
  }
</script>

<form action="" class="grid grid-cols-2 gap-5 mt-20 px-10 justify-center">
  {#each checkboxes as checkbox (checkbox.label)}
    <Label for={checkbox.label}>{checkbox.label}</Label>
    <Checkbox id={checkbox.label} bind:checked={checkbox.checked}></Checkbox>
  {/each}
  <div class="w-full col-span-2 mt-10">
    <Button class="w-full" on:click={runChecks}>Run Checks</Button>
  </div>
</form>
