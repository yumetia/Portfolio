import { createClient } from "@sanity/client"

export const sanity = createClient({
  projectId: "pkgq1odc",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
})

export const sanityProjects = async () =>{
  // sanity client fetch projects based on the currrent lang

  const query = `*[_type=="project"]{
  title,
  description{
    en,
    de,
    fr,
    ja
  },
  github,
  demo,
  tech,
  image[]{
      asset->{
        url
      }
    }
  }
  `
  const res = await sanity.fetch(query)
  return res;
}
