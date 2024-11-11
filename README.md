# @skeane/calendar

📆 a Calendar library built for react.

## Features

- ✨ easy to install
- ✨ works well on mobile, tablet, and desktop
- ✨ features month / week / agenda views
- ✨ customizable

## Installation

Using npm:

1. Install the package:

##

        npm install @skeane/calendar

2. Import the styles in your main javascript file

##

        import "@skeane/calendar/dist/style.css";

## Usage:

Example:

```
import "@skeane/calendar/dist/style.css";
import Calendar from "@skeane/calendar";

const Demo = () => {
    const events = {
        ...event details go here
    }

    return (
        <Calendar events={events}>
    )
}
export default Demo
```

## `<Calendar> Props`

### Required Props:

@skeane/calendar is meant to be easily added to your application; there are no required props, but most users will want to include events.

### Optional Props:

your calendar can include the following props
| Name | Type | Description |
| ------- | ------ | ------------------------------------------ |
| bgColor | string | sets a background color for your calendar. |
| color | string | sets text color for your calendar. |
| events | object | used for populating your calendar with events |
