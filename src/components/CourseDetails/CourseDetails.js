import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {slug} = useParams()

   console.log(slug)
    return (
        <div>
            
        </div>
    );
};

export default CourseDetails;