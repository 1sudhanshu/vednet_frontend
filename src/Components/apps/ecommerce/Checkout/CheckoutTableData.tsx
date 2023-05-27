import { FirstName, LastName, Phone, EmailAddress, Country, CountryMenu, Address, TownCity, StateCountry, PostalCode, CheckMeOut, PlaceOrder, } from '../../../../Constant';
import { Btn } from '../../../../AbstractElements';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CheckoutTableData = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
        if (data !== '') {
            alert('You submitted the form and stuff!');
            navigate(`${process.env.PUBLIC_URL}/ECommerce/Invoice`);
        }
    };
    return (
            <Col xl="6" sm="12">
                <Form onSubmit={handleSubmit(onSubmit)} className="form-bookmark needs-validation" >
                    <Row>
                        <FormGroup className="mb-3 col-sm-6">
                            <Label>{FirstName}</Label>
                            <input className='form-control' type="text"  {...register('firstName', { required: true })} />
                            <span className='text-danger'>{errors.firstName && 'First name is required'}</span>
                        </FormGroup>
                        <FormGroup className="mb-3 col-sm-6">
                            <Label>{LastName}</Label>
                            <input className='form-control' type="text"  {...register('lasName', { required: true })} />
                            <span className='text-danger'>{errors.lastName && 'Last name is required'}</span>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="mb-3 col-sm-6">
                            <Label>{Phone}</Label>
                            <input className='form-control' type="number"  {...register('phone', { required: true })} />
                            <span className='text-danger'>{errors.phone && 'Please enter number for phone.'}</span>
                        </FormGroup>
                        <FormGroup className="mb-3 col-sm-6">
                            <Label>{EmailAddress}</Label>
                            <input className='form-control' type="text"  {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                            <span className='text-danger'>{errors.email && 'Please enter proper email address .'}</span>
                        </FormGroup>
                    </Row>
                    <FormGroup className="mb-3">
                        <Label>{Country}</Label>
                        <Input type="select" name="selectMulti">
                            {CountryMenu.map((items, i) =>  <option key={i}>{items}</option> )}
                        </Input>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="inputAddress5">{Address}</Label>
                        <input className='form-control' type="text"  {...register('address', { required: true, min: 20, max: 120 })} />
                        <span className='text-danger'>{errors.address && 'Please right your address .'}</span>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="inputCity">{TownCity}</Label>
                        <input className='form-control' type="text"  {...register('city', { required: true })} />
                        <span className='text-danger'>{errors.city && 'select one city'}</span>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="inputAddress2">{StateCountry}</Label>
                        <input className='form-control' type="text"  {...register('state', { required: true })} />
                        <span className='text-danger'>{errors.state && 'select one state'}</span>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for="inputAddress6">{PostalCode}</Label>
                        <input className='form-control' type="text"  {...register('pincode', { pattern: /\d+/ })} />
                        <span className='text-danger'>{errors.pincode && 'Required integer'}</span>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <Label>{CheckMeOut}</Label>
                        </div>
                    </FormGroup>
                    <div className="text-end order-place mb-3"><Btn  color= 'primary' >{PlaceOrder}</Btn> </div>
                </Form>
            </Col>
    );
};
export default CheckoutTableData;