import React from 'react';
import EventByAntd from './EventByAntd.jsx';
import EventByMui from './EventByMui.jsx';
import EventByBootstrap from './EventByBootstrap.jsx';

export default function EventPage() {
    return (
        <div>
            <EventByAntd />
            {/* <EventByMui />
            <EventByBootstrap /> */}
        </div>
    );
}
