// imports all assets related to the projects and return the arrays containing all of them 

const generateMVCScreenshots = () => {
  const images = import.meta.glob(
    "/src/assets/projects/mockupResponsive/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" }
  )

  return Object.values(images) as string[]
}

export default generateMVCScreenshots
