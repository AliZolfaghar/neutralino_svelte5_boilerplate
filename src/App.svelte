<script>
  import { computer, os } from '@neutralinojs/lib'
  import Counter from './components/Counter.svelte';

  let osInfo = $state(null)
  let envUser = $state(null)
  let error = $state(null)

  async function getSystemInfo() {
    try {
      osInfo = await computer.getOSInfo()
      const key = NL_OS === 'Windows' ? 'USERNAME' : 'USER'
      envUser = await os.getEnv(key)
    } catch (e) {
      error = e.message
    }
  }
</script>

<main>
  <h1>Svelte 5 + Neutralinojs</h1>

  <Counter />

  <button onclick={getSystemInfo}>اطلاعات سیستم</button>

  {#if error}
    <p style="color:red">خطا: {error}</p>
  {/if}

  {#if osInfo}
    <ul>
      <li>سیستم عامل: {osInfo.name}</li>
      <li>نسخه: {osInfo.version}</li>
      <li>کاربر: {envUser}</li>
    </ul>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 2rem;
    font-family: sans-serif;
  }
  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
  }
  li {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
</style>