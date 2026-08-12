/**
 * RCCG Living Water Middlesbrough — central content configuration.
 * Public details checked against publicly accessible sources in August 2026.
 * Replace placeholder content/images with church-approved material before launch.
 */
export const siteData = {
  church: {
    name: 'RCCG Living Water Middlesbrough',
    shortName: 'Living Water',
    address: '109B Marton Road, Middlesbrough, TS1 2DU',
    phoneDisplay: '07904 776789',
    phoneHref: '+447904776789',
    email: 'rccglwfollowupteam@rccglwpm.org.uk',
    charityNumber: '1194680',
    residentPastor: 'Pastor Dr Ken Duru'
  },
  links: {
    facebook: 'https://www.facebook.com/RCCGLWMiddlesbrough/',
    instagram: 'https://www.instagram.com/rccglwpm/',
    youtube: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams',
    directions: 'https://www.google.com/maps/search/?api=1&query=109B+Marton+Road%2C+Middlesbrough%2C+TS1+2DU',
    giving: '', // Add approved giving URL. Empty = contact fallback.
    formEndpoint: '', // Optional Formspree/Getform endpoint. Empty = mailto fallback.
    newsletterEndpoint: '' // Optional newsletter endpoint.
  },
  services: [
    {
      day: 'Sunday',
      time: '10:00 AM',
      title: 'Sunday Worship',
      description: 'A joyful gathering for worship, prayer, Bible teaching and fellowship.',
      tag: 'Everyone welcome',
      featured: true
    },
    {
      day: 'Wednesday',
      time: '6:00 PM',
      title: 'Digging Deep',
      description: 'Midweek Bible study for deeper learning, questions and practical discipleship.',
      tag: 'Bible study'
    },
    {
      day: 'Friday',
      time: '6:00 PM',
      title: 'Corporate Prayer',
      description: 'A focused time of prayer for individuals, families, the church and wider community.',
      tag: 'Prayer'
    }
  ],
  ministries: [
    { icon: '✦', title: 'Children', text: 'Safe, joyful, age-appropriate spaces where children discover God’s love and His Word.', image: 'assets/images/ministry-children.jpg' },
    { icon: '↗', title: 'Youth', text: 'Faith, friendship, purpose and relevant discipleship for teenagers and young adults.', image: 'assets/images/ministry-youth.jpg' },
    { icon: '◉', title: 'Women', text: 'Friendship, prayer, encouragement and spiritual growth for women at every life stage.', image: 'assets/images/ministry-women.jpg' },
    { icon: '◇', title: 'Men', text: 'The excellent men. Brotherhood, discipleship and practical encouragement for men to grow and lead well.', image: 'assets/images/ministry-men.jpeg' },
    { icon: '♫', title: 'Choir & Worship', text: 'Serving the church through music, worship, creativity and the arts.', image: 'assets/images/ministry-worship.jpg' },
    { icon: '▣', title: 'Media & Technical', text: 'Helping people connect through sound, visuals, livestreaming and digital communication.', image: 'assets/images/ministry-media.jpeg' },
    { icon: '☼', title: 'Sunday School', text: 'Structured Bible learning that strengthens foundations and encourages mature faith.', image: 'assets/images/ministry-school.jpg' },
    { icon: '♡', title: 'Community Care', text: 'Practical support, food assistance, evangelism and outreach to the wider community.', image: 'assets/images/ministry-care.jpg' }
  ],
  messages: [
    { label: 'SERMON', title: 'Listen to Sunday messages', meta: 'YouTube · full lenght sunday service', url: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams' },
    { label: 'BIBLE STUDY', title: 'Listen to Digging Deep teaching', meta: 'Full length · Bible Study', url: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams' },
    { label: 'WORSHIP', title: 'Experience real worship moment', meta: 'Live services · full length', url: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams' }
  ],
  events: [
    { month: 'ADD', day: '01', title: 'Upcoming church event', text: 'Replace with a real event title, date, time and short description.', type: 'Church-wide' },
    { month: 'ADD', day: '02', title: 'Community outreach', text: 'Use this card for food support, evangelism, local volunteering or community activity.', type: 'Community' },
    { month: 'ADD', day: '03', title: 'Youth / family gathering', text: 'Use this card for youth, children, family or fellowship events.', type: 'Families' }
  ]
};
