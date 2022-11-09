import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const EditReview = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='m-2 p-3 w-50 mx-auto border border-4 border-primary'>
            <h4>Edit Your Review</h4>

            <form>
            <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" name='name' placeholder='Your Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Add Images</label>
                <input type="images" name='images' placeholder='Your Images' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" name='email' placeholder='Your Email' defaultValue={user?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly/>
            </div>
            <div className="mb-3">
                <label className="form-label">Add Message Info</label>
                <input type="text" name='message' placeholder='Message Info Area' className="py-5 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            
            
            <button type="submit" className="btn btn-primary">Update Review</button>
        </form>
        
        </div>
    );
};

export default EditReview;