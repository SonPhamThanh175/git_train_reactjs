import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
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
                <Typography style={{margin:'12px 0 0 12px'}}>
                    Quantity
                </Typography>
                <QuantityField
                    name='quantity'
                    label='Quantity'
                    form={form}
                />
                <Button 
                    type='submit'
                    color='primary'
                    size='large'
                    variant='contained'
                    style={{width: '250px'}}
                >
                    ADD TO CART
                </Button>
            </form>
  )
}

export default AddToCart
