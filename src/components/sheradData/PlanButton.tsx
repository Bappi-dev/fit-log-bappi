'use client'
import { WorkoutContext } from '@/context/WorkoutProvider';
import React, { useContext } from 'react';

const PlanButton = () => {
     const context = useContext(WorkoutContext)
     console.log('clicl buitn' , context);
    return (
        <div>
            <button>Plan</button>
        </div>
    );
};

export default PlanButton;