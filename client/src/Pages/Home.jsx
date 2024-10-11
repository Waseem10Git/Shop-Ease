import {useContext, useEffect} from "react";
import userContext from "../context/userContext";
import {Link} from "react-router-dom";
import productsApi from "../api/productsApi";
import '../css/home.css';
import Product from "../components/Product";
import useData from "../hooks/useData"

function Home() {
    const {data: products, loading, error, request} = useData();
    const {user, setUser} = useContext(userContext);

    useEffect(() => {
        request(productsApi.fetchProducts)
    }, []);

    return(
        <div className={'container'}>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

            <div>
                <div className="container-fluid mt-2 mb-5">
                    <div className="products">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
                                    <span className="font-weight-bold text-uppercase">Hello {user.username}</span>
                                    <div>
                                        <Link to='/sell' className="btn btn-warning float-end">Sell</Link>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    {products ? products.map(product => (
                                        <Product key={product._id} product={product} />
                                    )) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;