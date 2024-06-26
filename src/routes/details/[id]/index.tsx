import { gql, useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import React from 'react';

import ClubDetails from '../../../components/club-details';
import { ScreenProps as RootScreenProps } from '../../__layout/types';

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

export const Details = () => {
  const { params } = useRoute<RootScreenProps<'Details'>['route']>();
  const { id } = params as { id: string };
  const { loading, error, data } = useQuery(GET_CLUB, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return null;

  return <ClubDetails club={data.club} />;
};
