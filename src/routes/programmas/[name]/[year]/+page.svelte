<script>
  import ImageScrollEffect from "./ImageScrollEffect.svelte";
  import { darkMode } from "$lib/stores.js";
  import { base } from "$app/paths";
  import BackgroundGraphics from "../../../backgroundGraphics.svelte";

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  });

  export let data;

  let scrollAnimationFrame;
  let mouseX;
  let fallContainer;

  function startScrolling(event) {
    fallContainer = event.currentTarget;
    scroll(event);
  }

  function stopScrolling() {
    cancelAnimationFrame(scrollAnimationFrame);
  }

  function scroll(event) {
    if(event.clientX){
      mouseX = event.clientX;
    }

    if (mouseX < innerWidth / 2 - innerWidth*0.1) {
        fallContainer.scrollLeft -= 2; // Scroll left
    } else if (mouseX > innerWidth / 2 + innerWidth*0.1){
        fallContainer.scrollLeft += 2; // Scroll right
    }

    scrollAnimationFrame = requestAnimationFrame(scroll);

  }
</script>

<style>
  #move-buttons{
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
  }

  a{
    width: 100%;
    border-width: 0;
    padding: 8px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    position: relative;
    left: 0px;
    transition: left 0.5s ease;
  }
  a.dark-mode{
    background-color: #164270;
    color: #EAF1DB;
    width: 30vw;
  }
  a.light-mode{
    background-color: #C3D898;
    color: #1C3144;
    width: 30vw;
  }
  a:hover{
    position: relative;
    left: 10px;
    transition: left 0.5s ease;
  }
  
  .scrollable{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 30px;
    overflow: hidden;
    height: 400px;
    width: 100vw;
    margin: 30px 0px 50px 0px;
  }

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100vw;
    margin: 30px 0px 50px 0px;
  }


  @media(max-width: 800px){
    .scrollable{
      overflow: auto;
    }
  }

  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: space-between;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  #container.light-mode {
    color: black
  }
  #container.dark-mode{
    color: #EAF1DB;
  }
  h1.light-mode{
    background-color: #F0F0F0;
    z-index: 2;
  }
  h1.dark-mode{
    background-color: #1C3144;
    z-index: 2;
  }
</style>

<BackgroundGraphics></BackgroundGraphics>
<div id="container" class={isDarkMode ? "dark-mode" : "light-mode"}>
  <h1 class={isDarkMode ? "dark-mode" : "light-mode"}>
    {data.name} {data.year_slug}. gadā
  </h1>
  <div>
    <div class={data.courses.length > 0 ? "scrollable" : "center"} role="dialog" on:mouseenter={startScrolling} on:mouseleave={stopScrolling}>
      {#each data.courses as {img, altText, title, teaser, content}}
        <ImageScrollEffect image={img} altText={altText} title={title} teaser={teaser} content={content} stopScrolling={stopScrolling}/>
      {/each}
      {#if data.courses.length <= 0}
        <p>Nav kursu aprakstu. Ja vēlies papildināt šo sadaļu, padaloties ar savu pieredzi, raksti uz kājenē norādīto e-pastu!</p>
      {/if}
    </div>
  </div>
  
  <div id="move-buttons">
    {#if data.year_slug != "1"}
      <a class={isDarkMode ? "dark-mode" : "light-mode"} href="{base}/programmas/{data.programme_slug}/{Number(data.year_slug) - 1}">Iepriekšējais gads</a>
    {/if}
    {#if data.year_slug != data.max_years}
      <a class={isDarkMode ? "dark-mode" : "light-mode"} href="{base}/programmas/{data.programme_slug}/{Number(data.year_slug) + 1}">Nākamais gads</a>
    {/if}
  </div>
</div>