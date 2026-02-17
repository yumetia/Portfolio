// imports all assets related to the projects and return the arrays containing all of them 

const stoneRainScreenshots = () => {
  const images = import.meta.glob(
    "/src/assets/projects/stoneRain/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" }
  )

  return Object.values(images) as string[]
}

export default stoneRainScreenshots
