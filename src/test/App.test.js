import React from 'react';
import { render, waitFor } from '@testing-library/react';
import {fetchShow as mockFetchShow, formatSeasons as mockFormatSeasons} from '../utils/formatSeasons';
import App from '../App';

const mockData = [
    {
     "id": 1,
     "user": 3,
     "name": "Ben Franklin"
    },
    {
    "id": 2,
     "user": 10,
     "name": "George Washington"   
    }
]

const mockSeasons = [
    {
        name:"Gullivers Travels",
        season: 1
    },
    {
        name: "Gullivers Travels",
        season: 2
    }
]

jest.mock('../utils/formatSeasons')

test('Render App component', async () =>{
    mockFetchShow.mockResolvedValueOnce({data: mockData})
    mockFormatSeasons.mockResolvedValueOnce({data: mockSeasons})
    const { getByTestId } = render (<App />)

})