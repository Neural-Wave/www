<template>
  <div class="flex flex-col gap-20 m-[50px] sm:m-[100px]">
    <div class="flex flex-col gap-5">
      <a href="https://maps.app.goo.gl/A9hDDrykV7KnXVhW6" target="_blank">
        <img class="border border-nw-border rounded-lg" src="../assets/location/map.png" alt="USI campus map">
      </a>

      <div class="flex flex-wrap gap-5">
        <div class="flex gap-3 items-center">
          <img class="h-7 w-7" src="../assets/icons/one.svg" alt="dot one">
          <span>Hackathon Location (Aula Magna)</span>
        </div>

        <div class="flex gap-3 items-center">
          <img class="h-7 w-7" src="../assets/icons/two.svg" alt="dot one">
          <span>Showers and Changing Rooms (Sector C, Floor -1)</span>
        </div>

        <div class="flex gap-3 items-center">
          <img class="h-5" src="../assets/icons/bus.svg" alt="dot one">
          <span>Bus n.6 (Stazione FFS - Cornaredo)</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <span class="text-2xl font-bold">How to Get There?</span>

      <div class="flex flex-col gap-2">
        <span class="text-xl font-bold">By Bus</span>
        <span>From the square in front of the Lugano railway station (Lugano FFS), you can take the Bus n.6 towards Cornaredo. You need to get off at the "Univeristà" station. You can click <a class="underline" href="https://maps.app.goo.gl/xG6GHdnSHBfz2ngm7" target="_blank">here</a> to see the directions on the map.</span>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-xl font-bold">By Foot</span>
        <span>Walk to Piazza Cioccaro, in the centre of Lugano, or take the funicular from inside the station. Cross Piazza Cioccaro and take Via Soave, turn left onto Via Pessina and walk to Piazza Dante. Cross the piazza, turn left onto Via Pretorio, and walk until you reach the bus station. Pass the bus station and keep going straight along Corso Pestalozzi until you reach the entrance to a parking garage and a park gate (Parco Ciani), then turn left onto Via Lucchini, and walk straight along Via Lucchini and Via Lambertenghi until you reach the campus. Finally, turn left until you reach the "Aula Magna" (n.1 on the map above).</span>
      </div>

      <div class="flex flex-col gap-2">
        <span class="text-xl font-bold">By Plane</span>
        <span>Milano-Malpensa, Milano-Linate and Milano-Orio al Serio Airports are within a radius of 60-100 km from Lugano. There are <a class="underline" href="https://www.tilo.ch/en/collegamenti/S50.html" target="_blank">trains</a> to and from Milano-Malpensa Airport directly to Lugano FFS.</span>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <span class="text-2xl font-bold">Hackathon Location - Aula Magna</span>

      <div class="flex flex-col lg:flex-row gap-5">
        <img class="border border-nw-border rounded-lg lg:w-[50%] lg:h-[50%]" src="../assets/location/aula-magna-campus.jpg" alt="aula magna as seen from outside">
        <img class="border border-nw-border rounded-lg lg:w-[50%] lg:h-[50%]" src="../assets/location/aula-magna.jpg" alt="aula magna as seen from inside">
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <span class="text-2xl font-bold">USI - Faculty of Informatics</span>

      <img class="border border-nw-border rounded-lg lg:w-[50%] lg:h-[50%]" src="../assets/background/usi-20.jpg" alt="logo of the 20 years of USI informatics">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LocationView'
}
</script>
