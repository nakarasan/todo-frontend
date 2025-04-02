import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { string, object } from 'yup';
import { Button, Input, TextArea } from 'components';
import { IFormValue, ITaskFormProps } from 'types/task';

function TaskForm(props: FormikProps<IFormValue> & ITaskFormProps) {
  return (
    <div className='py-8 px-[6vw]'>
      <form onSubmit={props.handleSubmit}>
        <h1 className='font-bold text-[24px]'>Add a Task</h1>
        <div className='w-full space-y-6'>
          <Input
            name='title'
            label='Title'
            type='number'
            placeholder='Enter title.'
            values={props.values}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            errors={props.errors}
            touches={props.touched}
          />
          <TextArea
            name='description'
            placeholder='Enter description.'
            label='Description'
            values={props.values}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            errors={props.errors}
            touches={props.touched}
          />

          <div className='flex flex-col md:flex-row justify-end'>
            <Button
              name='Add'
              type='submit'
              disabled={props.isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default withFormik<ITaskFormProps, IFormValue>({
  validationSchema: object().shape({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
  }),
  handleSubmit: (values, { props, ...actions }) => {
    props.onSubmit(values, actions);
  },
})(TaskForm);
