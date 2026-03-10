import { createClient } from "@sanity/client"

export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_KEY,
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
      "rncp": coalesce(rncp,[]),
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
        export const sanityExperiences = async () =>{
          // sanity client fetch projects based on the currrent lang
          
          const query = `*[_type=="experiences"]{
            role,
            at,
            period,
            description{
              en,
              de,
              fr,
              ja
              },
              image{
                asset->{
                  url
                  }
                  }
                  }
                  `
                  const res = await sanity.fetch(query)
                  return res;
                }
                
                
