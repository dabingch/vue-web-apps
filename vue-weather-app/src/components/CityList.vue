<template>
  <div
    v-for="city in savedCities"
    :key="city.id"
  >
    <CityCard
      :city="city"
      @click="goToCityView(city)"
    />
  </div>

  <p v-if="savedCities.length === 0">
    No locations added. To start tracking a location, search in
    the field above.
  </p>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import CityCard from "./CityCard.vue";

const savedCities = ref([]);
const getCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));

    const requests = [];
    savedCities.value.forEach((city) => {
      console.log(city);
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/3.0/oncall?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=84ec4efc272208a7aed9cc7d2d22398e&units=imperial`
        )
      );
    });

    const weatherData = await Promise.all(requests);

    weatherData.forEach((value, index) => {
      savedCities.value[index].weather = value.data;
    });
  }
};
await getCities();

const router = useRouter();
const goToCityView = (city) => {
  router.push({
    name: "cityView",
    params: { state: city.state, city: city.city },
    query: {
      lat: city.coords.lat,
      lng: city.coords.lng,
    },
  });
};
</script>