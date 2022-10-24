import { JobPost } from './type'

import BabySwimLogo from '../../assets/logos/baby-swim.png'
import FastBananaLogo from '../../assets/logos/fast-banana.png'
import SpaceCubeLogo from '../../assets/logos/space-cube.png'
import TheDanceStudioLogo from '../../assets/logos/the-dance-studio.png'
import GreensLogo from '../../assets/logos/greens.png'
import TheWebWorksLogo from '../../assets/logos/the-web-works.png'
import YogaBabyLogo from '../../assets/logos/the-yoga-baby.png'
import CroftsAccountantsLogo from '../../assets/logos/crofts-accountants.png'
import AutoSpeedLogo from '../../assets/logos/autospeed.png'

const defaultAboutPosition =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam fringilla, luctus lectus dictum, volutpat lacus. Vivamus lacinia felis ut mauris lacinia elementum. Sed faucibus dapibus egestas. Etiam dolor neque, posuere at purus cursus, molestie eleifend lacus. Aenean eu diam eu enim commodo accumsan ut sit amet odio. Nam maximus varius leo, et porttitor ante sodales ut. Pellentesque euismod commodo nunc ut tincidunt. Sed fringilla nunc leo, a euismod ipsum aliquet placerat. Integer suscipit semper mi, sit amet mollis augue mollis in. Proin vestibulum accumsan elit, id pellentesque diam fermentum eget. Aliquam mattis quis quam ut faucibus. Duis finibus nulla nec enim eleifend dapibus.'

const defaultCompanyAbout =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nunc viverra velit tincidunt, non vehicula augue vehicula. Donec viverra luctus nisl, sed vehicula ligula. Vivamus maximus metus a magna fermentum ullamcorper. Phasellus ultrices vestibulum ligula ut pellentesque. Quisque quis congue quam. Nunc porttitor risus lorem, in blandit augue iaculis vitae. Cras sit amet fringilla neque. Fusce ac elit ut quam ultrices bibendum. Curabitur vitae dignissim quam. Suspendisse aliquet massa id orci volutpat ullamcorper. Nunc at ante sem. Etiam elementum, mi eget aliquam lobortis, elit libero tempus ex, vel pretium nisi risus ac augue.'

const defaultRequirements = `- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Aenean aliquam turpis eget egestas porta.
- Quisque tristique nunc ut sem pretium bibendum.
- Phasellus sit amet turpis laoreet, mattis elit ut, luctus ligula.
- Nullam blandit arcu eget justo hendrerit finibus.`

const defaultOptionalRequirements = `- Lorem ipsum dolor sit amet, consectetur adipiscing elit. - Maecenas vel metus imperdiet, malesuada dolor a, pulvinar tellus.`

export const initialJobsList: JobPost[] = [
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'full time',
    category: 'sales',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '5e5e94db-332a-46b4-9334-f9cb6e2171e5',
      name: 'Baby Swim',
      logo: BabySwimLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b2',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'part time',
    category: 'marketing and advertising',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: 'Fast Banana',
      logo: FastBananaLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b3',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'full time',
    category: 'software and technology',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: 'The dance studio',
      logo: TheDanceStudioLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b4',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'part time',
    category: 'software and technology',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: 'Space cube',
      logo: SpaceCubeLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b5',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'full time',
    category: 'environmental and energy',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: 'Greens',
      logo: GreensLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b6',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'full time',
    category: 'blockchain and cryptocurrencies',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: 'The web works',
      logo: TheWebWorksLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b7',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'freelance',
    category: 'education',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: 'Yoga Baby',
      logo: YogaBabyLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b8',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'part time',
    category: 'blockchain and cryptocurrencies',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '40e019a9-5bfe-4dd2-be8a-bed0dc7e80b1',
      name: "Croft's accountants",
      logo: CroftsAccountantsLogo,
      about: defaultCompanyAbout,
    },
    applicants: ['96c5fd9f-5d62-49f1-9e22-5f78852bf457'],
  },
  {
    id: '30e019a9-5bfe-4dd2-be8a-bed0dc7e80b9',
    title: 'The job title',
    createdOn: '08/30/2022',

    salaryRange: { min: 2000, max: 2500 },
    type: 'full time',
    category: 'software and technology',
    status: 'waiting',

    aboutPosition: defaultAboutPosition,
    requirements: defaultRequirements,
    optionalRequirements: defaultOptionalRequirements,

    company: {
      id: '5e5e94db-332a-46b4-9334-f9cb6e2171e5',
      name: 'AutoSpeed',
      logo: AutoSpeedLogo,
      about: defaultCompanyAbout,
    },
    applicants: [
      '96c5fd9f-5d62-49f1-9e22-5f78852bf457',
      '96c5fd9f-5d62-49f1-9e22-5f78852bf458',
    ],
  },
]
