import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Address {
    street: String
    city: String
    postalCode: String
    phoneNumber: String
  }
  type Coordinate {
    latitude: String
    longitude: String
  }
  type Image {
    uri: String
  }
  type OpeningHours {
    day: String
    open: String
    close: String
  }
  type Profile {
    isEmailVerified: Boolean,
    website: String
    email: String
    phoneNumber: String
  }
  type Groups {
    telegram: String
    whatsapp: String
  }
  type Club {
    id: ID!
    coordinates: Coordinate
    address: Address
    title: String
    description: String
    image: Image
    openingHours: [OpeningHours]
    profile: Profile
    groups: Groups
  }
  type Query {
    clubs: [Club!]!
    club(id: ID!): Club
  }
`;

const images = [
  { uri: 'https://i.imgur.com/sNam9iJ.jpg' },
  { uri: 'https://i.imgur.com/N7rlQYt.jpg' },
  { uri: 'https://i.imgur.com/UDrH0wm.jpg' },
  { uri: 'https://i.imgur.com/Ka8kNST.jpg' },
];

const openingHours = [
  {
    day: 'Montag',
    open: '9:00',
    close: '17:30',
  },
  {
    day: 'Dienstag',
    open: '9:00',
    close: '17:30',
  },
  {
    day: 'Mittwoch',
    open: '9:00',
    close: '17:30',
  },
  {
    day: 'Donnerstag',
    open: '9:00',
    close: '17:30',
  },
  {
    day: 'Freitag',
    open: '9:00',
    close: '17:30',
  },
  {
    day: 'Samstag',
    open: '9:00',
    close: '12:30',
  },
  {
    day: 'Sonntag',
    open: null,
    close: null,
  },
];

const owner = {
  email: 'contato@denistoledo.com.br',
  clubId: 1,
};

const clubs = [
  {
    id: 1,
    coordinates: {
      latitude: 52.52,
      longitude: 13.405,
    },
    owner: 'contato@denistoledo.com.br',
    address: {
      street: 'Marienstraße 67',
      city: 'Berlin',
      postalCode: '10117',
    },
    title: 'Green Leaf Lounge',
    description: 'Experience the best cannabis strains in central Berlin.',
    image: images[0],
    openingHours,
    profile: {
      isEmailVerified: true,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 2,
    coordinates: {
      latitude: 52.4783,
      longitude: 13.3298,
    },
    address: {
      street: 'Oranienstraße 190',
      city: 'Berlin',
      postalCode: '10999',
    },
    title: 'Kreuzberg Kush Corner',
    description:
      'Find your favorite Kush varieties in the vibrant Kreuzberg district.',
    image: images[1],
    openingHours,
    profile: {
      isEmailVerified: true,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 3,
    coordinates: {
      latitude: 52.53,
      longitude: 13.385,
    },
    address: {
      street: 'Kollwitzstraße 42',
      city: 'Berlin',
      postalCode: '10405',
    },
    title: 'Prenzlauer Heights Dispensary',
    description:
      'Elevate your senses with high-quality cannabis in Prenzlauer Berg.',
    image: images[2],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 4,
    coordinates: {
      latitude: 52.5022,
      longitude: 13.3949,
    },
    address: {
      street: 'Leipziger Platz 12',
      city: 'Berlin',
      postalCode: '10117',
    },
    title: 'City Green Gardens',
    description:
      'Explore a green oasis with diverse cannabis options in Berlin Mitte.',
    image: images[3],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 5,
    coordinates: {
      latitude: 52.4831,
      longitude: 13.4136,
    },
    address: {
      street: 'Warschauer Straße 33',
      city: 'Berlin',
      postalCode: '10243',
    },
    title: 'Friedrichshain Fields',
    description:
      'Enjoy the relaxing ambiance and premium cannabis in Friedrichshain.',
    image: images[2],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 6,
    coordinates: {
      latitude: 52.4946,
      longitude: 13.4305,
    },
    address: {
      street: 'Stralauer Allee 3',
      city: 'Berlin',
      postalCode: '10245',
    },
    title: 'East Side Herbal Hub',
    description:
      'Discover unique herbal blends on the vibrant east side of Berlin.',
    image: images[0],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 7,
    coordinates: {
      latitude: 52.466,
      longitude: 13.3946,
    },
    address: {
      street: 'Alt-Treptow 3',
      city: 'Berlin',
      postalCode: '12435',
    },
    title: 'Kreuzkölln Cannabis Corner',
    description:
      'Blend of Kreuzberg and Neukölln vibes with top-notch cannabis.',
    image: images[3],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 8,
    coordinates: {
      latitude: 52.5368,
      longitude: 13.3872,
    },
    address: {
      street: 'Danziger Straße 56',
      city: 'Berlin',
      postalCode: '10435',
    },
    title: 'Weißensee Weed Wonderland',
    description: 'Step into a wonderland of diverse weed options in Weißensee.',
    image: images[2],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 9,
    coordinates: {
      latitude: 52.4611,
      longitude: 13.3054,
    },
    address: {
      street: 'Marienfelder Allee 66',
      city: 'Berlin',
      postalCode: '12277',
    },
    title: 'Tempelhof THC Terrace',
    description: 'Relax and unwind at the terrace with a view in Tempelhof.',
  },
  {
    id: 10,
    coordinates: {
      isEmailVerified: false,
      latitude: 52.509,
      longitude: 13.4395,
    },
    address: {
      street: 'Frankfurter Allee 77',
      city: 'Berlin',
      postalCode: '10247',
    },
    title: 'Gleisdreieck Greenhouse',
    description:
      'Unique strains await you in the Gleisdreieck urban greenhouse.',
    image: images[1],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 11,
    coordinates: {
      latitude: 52.5254,
      longitude: 13.3695,
    },
    address: {
      street: 'Alexanderstraße 1',
      city: 'Berlin',
      postalCode: '10178',
    },
    title: 'Alexanderplatz Cannabis Corner',
    description: 'Explore a diverse selection of cannabis near Alexanderplatz.',
    image: images[0],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 12,
    coordinates: {
      latitude: 52.4838,
      longitude: 13.3499,
    },
    address: {
      street: 'Bergmannstraße 5',
      city: 'Berlin',
      postalCode: '10961',
    },
    title: 'Marijuana Mansion in Moabit',
    description:
      'Indulge in the luxury of premium marijuana in the heart of Moabit.',
    image: images[3],
    openingHours,
    profile: {
      isEmailVerified: false,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 13,
    coordinates: {
      latitude: 52.488,
      longitude: 13.378,
    },
    address: {
      street: 'Karl-Marx-Allee 33',
      city: 'Berlin',
      postalCode: '10178',
    },
    title: 'Spree-side Sativa Spot',
    description: 'Enjoy Sativa strains by the Spree River in Berlin.',
    image: images[0],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 14,
    coordinates: {
      latitude: 52.5233,
      longitude: 13.3933,
    },
    address: {
      street: 'Unter den Linden 77',
      city: 'Berlin',
      postalCode: '10117',
    },
    title: 'Mauerpark Medley',
    description: 'A medley of cannabis options awaits you at Mauerpark.',
    image: images[2],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 15,
    coordinates: {
      latitude: 52.4714,
      longitude: 13.4179,
    },
    address: {
      street: 'Sonnenallee 33',
      city: 'Berlin',
      postalCode: '12045',
    },
    title: 'Neukölln Nugs Nook',
    description: 'Find your favorite nugs at the cozy Neukölln Nook.',
    image: images[3],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 16,
    coordinates: {
      latitude: 52.4966,
      longitude: 13.4362,
    },
    address: {
      street: 'Warschauer Straße 33',
      city: 'Berlin',
      postalCode: '10243',
    },
    title: 'Warschauer Weed Wharf',
    description: 'Dock into diverse weed options at the Warschauer Wharf.',
    image: images[0],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 17,
    coordinates: {
      latitude: 52.5115,
      longitude: 13.444,
    },
    address: {
      street: 'Frankfurter Allee 77',
      city: 'Berlin',
      postalCode: '10247',
    },
    title: 'Tiergarten THC Terrace',
    description: 'Enjoy a terrace experience with THC near Tiergarten.',
    image: images[1],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 18,
    coordinates: {
      latitude: 52.5291,
      longitude: 13.4033,
    },
    address: {
      street: 'Invalidenstraße 33',
      city: 'Berlin',
      postalCode: '10115',
    },
    title: 'Potsdamer Platz Pot Palace',
    description: 'Discover a palace of pot varieties near Potsdamer Platz.',
    image: images[0],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 19,
    coordinates: {
      latitude: 52.4796,
      longitude: 13.3493,
    },
    address: {
      street: 'Bergmannstraße 5',
      city: 'Berlin',
      postalCode: '10961',
    },
    title: 'Kreuzberg Kief Kingdom',
    description: 'Immerse yourself in the kingdom of kief in Kreuzberg.',
    image: images[3],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: false,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 20,
    coordinates: {
      latitude: 52.52,
      longitude: 13.3784,
    },
    address: {
      street: 'Karl-Liebknecht-Straße 33',
      city: 'Berlin',
      postalCode: '10178',
    },
    title: 'Mitte Marijuana Marketplace',
    description: 'Explore a marketplace of marijuana options in Berlin Mitte.',
    image: images[2],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: true,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 21,
    coordinates: {
      latitude: 52.5387,
      longitude: 13.4171,
    },
    address: {
      street: 'Danziger Straße 56',
      city: 'Berlin',
      postalCode: '10435',
    },
    title: 'Pankow Pot Paradise',
    description: 'Escape to a pot paradise in the lush greenery of Pankow.',
    image: images[1],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: true,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 22,
    coordinates: {
      latitude: 52.4662,
      longitude: 13.3233,
    },
    address: {
      street: 'Alt-Treptow 3',
      city: 'Berlin',
      postalCode: '12435',
    },
    title: 'Marienfelde Medicated Meadow',
    description: 'Relax in the medicated meadow of Marienfelde.',
    image: images[0],
    openingHours,
    profile: {
      website: 'https://denistoledo.dev/',
      isEmailVerified: true,
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 23,
    coordinates: {
      latitude: 52.5013,
      longitude: 13.3938,
    },
    address: {
      street: 'Leipziger Platz 12',
      city: 'Berlin',
      postalCode: '10117',
    },
    title: 'Checkpoint Charlie Cannabis Club',
    description:
      'Experience premium cannabis near historic Checkpoint Charlie.',
    image: images[1],
    openingHours,
    profile: {
      isEmailVerified: true,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
  {
    id: 24,
    coordinates: {
      latitude: 52.5353,
      longitude: 13.4205,
    },
    address: {
      street: 'Danziger Straße 56',
      city: 'Berlin',
      postalCode: '10435',
    },
    title: 'Weißensee Weed Wholesalers',
    description: 'Wholesale weed options available in Weißensee.',
    image: images[2],
    openingHours,
    profile: {
      isEmailVerified: true,
      website: 'https://denistoledo.dev/',
      email: 'contato@denistoledo.com.br',
      phoneNumber: '+4901744310644',
    },
    groups: {
      telegram: 'https://t.me/+tG_k3dM1xKxiODcy',
      whatsapp: 'https://chat.whatsapp.com/CfKAeDO0pK0Ij5sn8P7a4U',
    },
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    clubs: () => clubs,
    club: (_: any, { id }: { id: string }) =>
      clubs.find((club) => club.id === Number(id)),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
