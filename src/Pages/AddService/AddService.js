import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const {title, price, _id} = useLoaderData()
    const {user} = useContext(AuthContext)

    const handlePlaceReview =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'No Email';
        const images = form.images.value;
        const message = form.message.value;

        const order ={
                service: _id,
                serviceName:title,
                price,
                customer:name,
                email,
                images,
                message

        }
        if(!images){
            alert('Places Input One Image')
        }
        else{
            fetch('http://localhost:4000/reviewData',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.acknowledged){
                    alert('Review Placed Successfully')
                    form.reset();
                }
            })
            .catch(err =>console.error(err))

        }
    }

    return (
        <div>
            <div className='text-center'> 
            <h5>Title:{title}</h5>
                <p>Price:{price}</p>
            </div>
          <div className='m-2 p-3 w-50 mx-auto border border-4 border-primary'>
            <form onSubmit={handlePlaceReview}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Your Name</label>
                <input type="text" name='name' placeholder='Your Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Add Images</label>
                <input type="images" name='images' placeholder='Your Images' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' placeholder='Your Email' defaultValue={user?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Add Message Info</label>
                <input type="text" name='message' placeholder='Message Info Area' className="py-5 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            
            
            <button type="submit" className="btn btn-primary">Add Review</button>
        </form>
        </div>
       </div>
    );
};

export default AddService;