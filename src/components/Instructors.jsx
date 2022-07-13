import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_INSTRUCTORS = gql`
  query getInstructors {
    instructors {
      id
      firstName
      middleName
      lastName
      gender
      dateOfBirth
      address
      email
      password
      phone
      nationality
      education
      courseId {
        id
        name
        duration
        description
        status
      }
    }
  }
`;

const Instructors = () => {
  return <div>Instructors</div>;
};

export default Instructors;
