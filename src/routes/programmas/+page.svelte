<script>
  import { base } from "$app/paths";
  import ProgramItem from "./ProgramItem.svelte";

</script>
<style>
  .container{
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
</style>

<div class="container">
  <ProgramItem 
  reversed={1} 
  image = "lu-raina-bulvaris.jpg"
  imageAlt = "Latvijas Universitātes ēka raiņa bulvārī, kurā noteik lekcijas datorzinātņu studentiem, ap kuru pulcējušies studenti."
  title = "Datorzinātņu bakalaurs"
  link = "{base}/programmas/datoriki"
  description= "Datoriķi, pilnā vārdā bakalaura studiju programma „Datorzinātnes” par savām mājām vel šobrīd sauc Raiņa bulvāri. Pašlaik programmas direktore ir Dr.dat., prof. Zane Bičevska. Nākot mācīties šeit varēsi iemācīties kodēt C++, programmēt virzi un citas ar tehnoloģijām saistītas prasmes."
  />
  <ProgramItem 
  reversed={0} 
  image = "lu-dabas-maja.jpg"
  imageAlt = "Latvijas Universitātes dabas māja, kurā notiek ģeogrāfijas studijas."
  title = "Ģeogrāfijas bakalaurs"
  link = "{base}/programmas/geografi"
  description= "Ģeogrāfi, kas studē bakalaura studiju programmā „Ģeogrāfija”, ir iekārtojušies LU dabas mājā. Programmu pārrauga tās direktore Asociētā profesore Elīna Apsīte-Beriņa. Nākot mācīties šeit varēs iemācīties plašu spektru zināšanau kas ir par un ap ģeogrāfiju, kā arī mācības bieži vedīs ārā dabā!"
  />
  <ProgramItem 
  reversed={1} 
  image = "lu-zinatnu-maja.jpg"
  imageAlt = "Latvijas Universitātes zinātņu māja, kurā notiek medicīnas studijas."
  title = "Ārstniecības bakalaurs"
  link = "{base}/programmas/mediki"
  description= "Ārsti mācās Latvijas Universitātes zinātņu mājā. Mācību programmu „Arstniecība” pārrauga tās direktore Lekt. Ina Mežiņa-Mamajeva. Šajā programmā mācās visi mūsu nākotneš ģimenes ārsti, ķirurgi un visi pārējie speciālisti, ko var sastapt slimnīcas gaiteņos."
  />
</div>
