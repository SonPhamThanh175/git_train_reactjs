import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCart.propTypes = {
    onSubmit: PropTypes.func,
}

function AddToCart({onSubmit = null }) {
    const schema = yup.object().shape({
       quantity : yup
        .number()
        .required('Please enter quantity')
        .min(1,'Please enter at least 1')
        .typeError('Please enter a number'),
    })

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
        // shouldUnregister: true,
      })

      const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField
                    name='quantity'
                    label='Quantity'
                    form={form}
                />
                <Button style= {{width: '250px', padding: '8px 20px', backgroundColor:'#3F51B5'}}
                    type='submit'
                    color='white'
                    size='large'
                >
                    ADD TO CART
                </Button>
            </form>
  )
}

export default AddToCart
