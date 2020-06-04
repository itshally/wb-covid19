// just using this for web monetization  testing

if (document.monetization) {
    console.log('document monetization defined')
    document.monetization.addEventListener("monetizationstart", () => {
      console.log('monetization started')
      document.getElementById("exclusive").classList.remove("hidden");
    });
}
