<template>
  <div class="clients-container">
    <div>
      <p class="clients-content">
        We are working with leading organizations to prepare them for a future
        where utilizing the data is a necessity. We are designing products which
        can withstand digital disruption and keep bringing value to the
        companies willing to change with time.
      </p>
    </div>
    <div ref="companyGoingClients" class="client-box" @click="customerReload()">
      <nuxt-link to="/CUSTOMERS" class="clients-button">
        Meet Our Clients
      </nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.clients-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
}
.clients-content {
  line-height: 1.5;
  font-weight: lighter;
  text-align: center;
}
.client-box {
  margin: 50px 0 55px 0;
}
.clients-button {
  background: linear-gradient(to right, #145484 50%, #1868a4 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  font-weight: bolder;
  padding: 15px 50px;
  border-radius: 30px;
  transition: all 0.3s ease-out;
  color: white;
  outline: none;
}
.clients-button:hover {
  background-position: left bottom;
  cursor: pointer;
}
.clients-button:not(:hover) {
  background-position: right bottom;
}

@media screen and (max-width: 1200px) {
  .clients-container {
    margin-top: 5rem;
  }
}
</style>