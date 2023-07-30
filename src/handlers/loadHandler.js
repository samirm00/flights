import dom from '../dom.js';
import data from '../data.js';
import sortedFlights from '../utils/sortFlights.js';
import createFlight from '../components/createFlight.js';

const loadHandler = () => {
    const sortedData = sortedFlights(data.flights);

    sortedData.forEach((flightData) => {
        const flightDom = createFlight(flightData);
        dom.container.append(flightDom);
    });
};

export default loadHandler;
