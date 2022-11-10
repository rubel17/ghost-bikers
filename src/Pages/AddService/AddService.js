import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const {title, price, _id, rating, description} = useLoaderData();
    const {user} = useContext(AuthContext)

    const handlePlaceServices =event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const email = user?.email || 'No Email';
        const picture = form.picture.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const orders ={
                service: _id,
                serviceName:title,
                price,
                title,
                email,
                picture,
                description,
                rating

        }
        if(!picture){
            toast.error('Places Input One Image');
        }
        //https://ghost-bikers-server.vercel.app
        else{
            fetch('https://ghost-bikers-server.vercel.app/GhostBikers',{
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(orders)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.acknowledged){
                    toast.success('Review Placed Successfully');
                    form.reset();
                }
            })
            .catch(err =>console.error(err))

        }
    }

    return (
        <div>
            <div className='text-center m-3'> 
            <h5>Title:{title}</h5>
                <p>Price:{price}</p>
            </div>
          <div className='m-2 p-3 w-50 mx-auto border border-4 border-primary'>
          <h4>Add Your Service</h4>
            <form onSubmit={handlePlaceServices}>
            <div className="mb-3">
                <label className="form-label">Your title</label>
                <input defaultValue={title} type="text" name='title' placeholder='Your title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Add Images</label>
                <input type="picture" name='picture' placeholder='Your picture' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name='email' placeholder='Your Email' defaultValue={user?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Rating</label>
                <input type="numver" name='rating' placeholder='Rating' defaultValue={rating} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Add Description</label>
                <input defaultValue={description} type="text" name='description' placeholder='Description Area' className="py-5 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            
            
            <button type="submit" className="btn btn-primary">Add Service</button>
            <ToastContainer />
        </form>
        </div>
       </div>
    );
};

export default AddService;