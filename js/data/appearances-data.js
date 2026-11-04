// "Find me next" banner — where Nathan will be in person.
//
// HOW TO UPDATE: add one entry per event below, then commit and push.
// - Past events hide themselves automatically once their end time passes,
//   so you never have to delete old entries (but you can, to keep it tidy).
// - The banner shows only the NEXT upcoming event, and hides itself entirely
//   when nothing is scheduled.
// - Times are Pacific. Keep the -08:00 offset (standard time, Nov–Mar)
//   or use -07:00 for daylight time (Mar–Nov).
//
// Fields:
//   type     Short label shown in the banner, e.g. "Open House", "Community Event"
//   title    Name used for the calendar invite
//   address  Street address (used for the Directions link)
//   city     City and state, e.g. "Novato, CA"
//   start    ISO date-time, e.g. "2026-11-07T13:00:00-08:00"
//   end      ISO date-time
//   note     Optional extra line, e.g. "Stop by and say hi!"
//   link     Optional URL for a "Details" link (e.g. a listing site)

const APPEARANCES = [
  {
    type: "Open House",
    title: "Open House with Nathan Irving",
    address: "10 Pebble Beach Drive",
    city: "Novato, CA",
    start: "2026-11-07T13:00:00-08:00",
    end: "2026-11-07T16:00:00-08:00",
    note: "",
    link: ""
  },
  {
    type: "Open House",
    title: "Open House with Nathan Irving",
    address: "10 Pebble Beach Drive",
    city: "Novato, CA",
    start: "2026-11-08T13:00:00-08:00",
    end: "2026-11-08T16:00:00-08:00",
    note: "",
    link: ""
  }
];
