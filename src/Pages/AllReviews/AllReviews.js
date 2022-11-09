import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReview from './AllReview';
import Table from 'react-bootstrap/Table';
import useTitle from '../../hooks/useTitle';

const AllReviews = () => {
    const reviews = useLoaderData([]);
    useTitle('All Reviews');

    return (
        <div className='w-75 mx-auto border p-2'>
            <Table>
            <thead>
                <tr>
                <th>Service</th>
                <th>Review</th>
                <th>Price</th>
                <th>Email</th>
                </tr>
            </thead>

            <tbody>
            {
        reviews.map(review =><AllReview
            key={review._id}
            review={review}
        ></AllReview>)
        }
        </tbody>
        </Table>
        </div>
    );
};

export default AllReviews;