import React from 'react';

import ClubDetails from '../../components/club-details';

export default function Details({
  route: {
    params: { club },
  },
}: {
  route: any;
  navigation: any;
}) {
  return <ClubDetails club={club} />;
}
