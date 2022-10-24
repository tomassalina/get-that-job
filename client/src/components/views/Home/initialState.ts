import { JobPost } from '../Jobs/type'
import CompanyLogo from '../../../assets/logos/baby-swim.png'

const defaultAboutCompany =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nunc viverra velit tincidunt, non vehicula augue vehicula. Donec viverra luctus nisl, sed vehicula ligula. Vivamus maximus metus a magna fermentum ullamcorper. Phasellus ultrices vestibulum ligula ut pellentesque. Quisque quis congue quam. Nunc porttitor risus lorem, in blandit augue iaculis vitae. Cras sit amet fringilla neque. Fusce ac elit ut quam ultrices bibendum. Curabitur vitae dignissim quam. Suspendisse aliquet massa id orci volutpat ullamcorper. Nunc at ante sem. Etiam elementum, mi eget aliquam lobortis, elit libero tempus ex, vel pretium nisi risus ac augue.'

const defaultAboutPosition =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam fringilla, luctus lectus dictum, volutpat lacus. Vivamus lacinia felis ut mauris lacinia elementum. Sed faucibus dapibus egestas. Etiam dolor neque, posuere at purus cursus, molestie eleifend lacus. Aenean eu diam eu enim commodo accumsan ut sit amet odio. Nam maximus varius leo, et porttitor ante sodales ut. Pellentesque euismod commodo nunc ut tincidunt. Sed fringilla nunc leo, a euismod ipsum aliquet placerat. Integer suscipit semper mi, sit amet mollis augue mollis in. Proin vestibulum accumsan elit, id pellentesque diam fermentum eget. Aliquam mattis quis quam ut faucibus. Duis finibus nulla nec enim eleifend dapibus.'

const defaultRequirements = `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Aenean aliquam turpis eget egestas porta.
- Quisque tristique nunc ut sem pretium bibendum.
- Phasellus sit amet turpis laoreet, mattis elit ut, luctus ligula.
- Nullam blandit arcu eget justo hendrerit finibus.`

const defaultOptionalRequirements = `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
createdOn: '08/30/2022'
status: 'waiting'
- Maecenas vel metus imperdiet, malesuada dolor a, pulvinar tellus.`

export const initialJobPosts: Array<JobPost> = [
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e8012',
    title: 'The job title',
    companyName: 'The company name SA',
    companyLogo: CompanyLogo,
    category: 'manufacturing',
    type: 'full time',
    salaryRange: { min: 2000, max: 2500 },
    aboutCompany: defaultAboutCompany,
    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,
    createdOn: '08/30/2022',
    status: 'waiting',
    applicants: [],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e8011',
    title: 'The job title',
    companyName: 'The company name SA',
    companyLogo: CompanyLogo,
    category: 'manufacturing',
    type: 'full time',
    salaryRange: { min: 2000, max: 2500 },
    aboutCompany: defaultAboutCompany,
    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,
    createdOn: '08/30/2022',
    status: 'waiting',
    applicants: [],
  },
]
