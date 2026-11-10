// "Find me next" banner — where Nathan will be in person.
//
// HOW TO UPDATE: add one entry per event below, then commit and push.
// - Past events hide themselves automatically once their end time passes,
//   so you never have to delete old entries (but you can, to keep it tidy).
// - The homepage shows a card for EVERY event in the next 7 days (side by side
//   on desktop, stacked on phones). Events further out stay hidden until they
//   come within 7 days, and the section hides entirely when nothing is coming up.
//   Change WINDOW_DAYS in js/appearances-banner.js to show more or fewer days.
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
    address: "24 Cottage Lane",
    city: "Novato, CA",
    start: "2026-11-14T14:00:00-08:00",
    end: "2026-11-14T16:00:00-08:00",
    note: "Hamilton Cottages, a 62+ community. Guest parking on the right as you enter Cottage Lane.",
    link: ""
  },
  {
    type: "Open House",
    title: "Open House with Nathan Irving",
    address: "24 Cottage Lane",
    city: "Novato, CA",
    start: "2026-11-15T14:00:00-08:00",
    end: "2026-11-15T16:00:00-08:00",
    note: "Hamilton Cottages, a 62+ community. Guest parking on the right as you enter Cottage Lane.",
    link: ""
  }
];
