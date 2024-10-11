import Input from "../components/Input";
import {useState} from "react";
import usersApi from "../api/usesApi";
import authApi from "../api/auth";
import {toast} from "react-toastify";
import productsApi from "../api/productsApi";
import {useNavigate} from "react-router-dom";


function Sell() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        about: '',
        img: '',
        price: 9,
    });

    const handleChange = ({ target }) => {
        console.log(`Changing ${target.name} to ${target.value}`);
        setData({...data, [target.name]: target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("Form submitted with data:", data);
        try {
            console.log('Attempting to create product...');
            const product = await productsApi.createProduct(data);
            console.log('Product created:', product);
            navigate('/'); // Or history.push('/') based on your React Router version
        } catch (err) {
            console.error('Error creating product:', err); // Log the full error for debugging
            if (err.response && err.response.status >= 400 && err.response.status < 500) {
                toast.error(err.response.data);
            } else {
                toast.error('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className={'container'}>
            <h1>Sell Screen</h1>
            <form onSubmit={handleSubmit}>
                <Input id={'title'} label={'Title'} value={data.title} handleChange={handleChange} required/>
                <Input id={'about'} label={'About'} value={data.about} handleChange={handleChange} required/>
                <Input type={'url'} id={'img'} label={'Image'} value={data.img} handleChange={handleChange} required/>
                <Input type={'number'} id={'price'} label={'Price'} value={data.price} handleChange={handleChange} required/>
                <button type={'submit'} className={'btn btn-success'}>Submit</button>
            </form>
        </div>
    );
}

export default Sell;