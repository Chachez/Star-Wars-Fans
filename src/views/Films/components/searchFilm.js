import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Controls from '../../../components/Controls';
import {
  searchFilm,
  addHistoricalSearch,
} from '../../../redux/actions/filmActions';

const MainContent = styled('div')(({ theme }) => ({
  alignItems: 'center',
  padding: theme.spacing(2, 5),
  marginTop: theme.spacing(5),
}));

const SearchFilm = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Controls.Label title='Film Search' variant='h4' />
      <MainContent>
        <Formik
          initialValues={{
            searchParams: '',
          }}
          validationSchema={Yup.object().shape({
            searchParams: Yup.string().required('Search parameter is required'),
          })}
          onSubmit={async (fields, { resetForm }) => {
            await dispatch(searchFilm(fields)).then((res) => {
              // Only gets dispatched if results are found
              res.data.results.length !== 0 &&
                dispatch(addHistoricalSearch(fields));
            });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={Controls.InputField}
                label='Search for a film'
                name='searchParams'
                error={Boolean(touched.searchParams && errors.searchParams)}
                helperText={<ErrorMessage name='searchParams' />}
              />
              <button type='submit'>submit</button>
            </Form>
          )}
        </Formik>
      </MainContent>
    </Fragment>
  );
};

export default SearchFilm;
