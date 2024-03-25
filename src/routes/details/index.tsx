import { gql, useQuery } from '@apollo/client';
import React from 'react';

import ClubDetails from '../../components/club-details';

const GET_CLUB = gql`
  query GetClub($id: ID!) {
    club(id: $id) {
      coordinates {
        latitude
        longitude
      }
      address {
        street
        postalCode
        phoneNumber
      }
      title
      description
      image {
        uri
      }
      openingHours {
        day
        open
        close
      }
      profile {
        website
        email
        phone
      }
      groups {
        telegram
        whatsapp
      }
    }
  }
`;

export default function DetailsScreen({
  route: {
    params: { id },
  },
}: {
  route: any;
  navigation: any;
}) {
  const { loading, error, data } = useQuery(GET_CLUB, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return null;

  return <ClubDetails club={data.club} />;
}
