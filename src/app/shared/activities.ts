import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        'id': 1,
        'name': 'Willowsford',
        'date': new Date('11/24/2017'),
        'distance': 5.6,
        'comments': 'Nice day, cool temps',
        'gpxData': '../../assets/gpx/Willowsford.gpx'
    },
    {
        'id': 2,
        'name': 'Morning Ride',
        'date': new Date('08/23/2017'),
        'distance': 8.0,
        'comments': 'Nice morning ride',
        'gpxData': '../../assets/gpx/Morning_Ride.gpx'
    },
    {
        'id': 3,
        'name': 'Evening Ride',
        'date': new Date('08/23/2017'),
        'distance': 9.0,
        'comments': 'Santa Cruz Testing, Billy\'s bike',
        'gpxData': '../../assets/gpx/Evening_Ride.gpx'
    },
    {
        'id': 4,
        'name': 'Morning_Ride-2',
        'date': new Date('08/22/2017'),
        'distance': 4.5,
        'comments': 'First morning ride',
        'gpxData': '../../assets/gpx/Morning_Ride-2.gpx'
    }
];
