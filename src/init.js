const data = {
    flights: [
        {
            id: 1,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-05 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-05 14:40:00',
            destination: 'CGP',
            stops: 0,
        },
        {
            id: 2,
            name: 'VQ-906',
            plane: 'A320',
            departureDate: '2023-08-20 09:00:00',
            origin: 'SFO',
            arrivalDate: '2023-08-20 12:15:00',
            destination: 'JFK',
            stops: 0,
        },
        {
            id: 3,
            name: 'VQ-907',
            plane: 'BOEING737',
            departureDate: '2023-08-25 14:20:00',
            origin: 'LAX',
            arrivalDate: '2023-08-25 18:40:00',
            destination: 'ORD',
            stops: 1,
        },
        {
            id: 4,
            name: 'VQ-904',
            plane: 'ATR725',
            departureDate: '2023-08-10 09:10:00',
            origin: 'CGP',
            arrivalDate: '2023-08-10 10:05:00',
            destination: 'DAC',
            stops: 0,
        },
        {
            id: 5,
            name: 'VQ-905',
            plane: 'BOEING747',
            departureDate: '2023-08-15 16:30:00',
            origin: 'LHR',
            arrivalDate: '2023-08-16 02:45:00',
            destination: 'JFK',
            stops: 1,
        },
        {
            id: 6,
            name: 'VQ-903',
            plane: 'ATR725',
            departureDate: '2023-08-05 13:45:00',
            origin: 'DAC',
            arrivalDate: '2023-08-05 14:40:00',
            destination: 'CGP',
            stops: 0,
        },
    ],
};

const container = document.getElementById('container');

const loadHandler = () => {
    const sortedFlights = data.flights.sort(
        (a, b) =>
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime(),
    );

    sortedFlights.forEach((flightData) => {
        // container
        const flight = document.createElement('div');
        flight.classList.add('flight');

        // name
        const name = document.createElement('div');
        name.classList.add('name');
        name.innerText = flightData.name;

        // plane
        const plane = document.createElement('div');
        plane.classList.add('plane');
        plane.innerText = flightData.plane;

        // departureDate
        const departureDate = document.createElement('div');
        departureDate.classList.add('departureDate');
        departureDate.innerText = flightData.departureDate;

        // origin
        const origin = document.createElement('div');
        origin.classList.add('origin');
        origin.innerText = flightData.origin;

        // arrivalDate
        const arrivalDate = document.createElement('div');
        arrivalDate.classList.add('arrivalDate');
        arrivalDate.innerText = flightData.arrivalDate;

        // destination
        const destination = document.createElement('div');
        destination.classList.add('destination');
        destination.innerText = flightData.destination;
        // stops
        const stops = document.createElement('div');
        stops.classList.add('stops');
        stops.innerText = flightData.stops;

        flight.append(
            name,
            plane,
            departureDate,
            origin,
            arrivalDate,
            destination,
            stops,
        );

        container.append(flight);
    });
};

window.addEventListener('load', loadHandler);
