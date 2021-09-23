// To handle how the React App talks to the Sanity Studio
import sanityClient from '@sanity/client'


export default sanityClient({
    projectId: "ex7pi0az",
    dataset: "production"
})