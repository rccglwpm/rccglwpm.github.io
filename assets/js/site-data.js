/**
 * RCCG Living Water Middlesbrough — central content configuration.
 * Public details checked against publicly accessible sources in August 2026.
 * Keep operational details here so the site remains easy to maintain without a CMS.
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
    residentPastor: 'Pastor Dr Ken Duru',
    timeZone: 'Europe/London'
  },
  links: {
    website: 'https://rccglwpm.org.uk/',
    facebook: 'https://www.facebook.com/RCCGLWMiddlesbrough/',
    instagram: 'https://www.instagram.com/rccglwpm/',
    youtube: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams',
    directions: 'https://www.google.com/maps/search/?api=1&query=109B+Marton+Road%2C+Middlesbrough%2C+TS1+2DU',
    checkin: 'https://evaextra.com/checkin',
    evaextra: 'https://evaextra.com/',
    giving: '', // Add an approved giving URL. Empty = contact fallback.
    formEndpoint: '' // Optional church-approved hosted form endpoint. Empty = mailto fallback.
  },
  services: [
    {
      weekday: 0,
      day: 'Sunday',
      start: '10:00',
      time: '10:00 AM',
      title: 'Sunday Worship',
      description: 'A joyful gathering for worship, prayer, Bible teaching and fellowship.',
      tag: 'Everyone welcome',
      featured: true,
      // UX window for keeping this gathering attached to the attendance CTA after its start; not a published service duration.
      displayWindowMinutes: 120
    },
    {
      weekday: 3,
      day: 'Wednesday',
      start: '18:00',
      time: '6:00 PM',
      title: 'Digging Deep',
      description: 'Midweek Bible study for deeper learning, questions and practical discipleship.',
      tag: 'Bible study',
      // UX window for keeping this gathering attached to the attendance CTA after its start; not a published service duration.
      displayWindowMinutes: 120
    },
    {
      weekday: 5,
      day: 'Friday',
      start: '18:00',
      time: '6:00 PM',
      title: 'Corporate Prayer',
      description: 'A focused time of prayer for individuals, families, the church and wider community.',
      tag: 'Prayer',
      // UX window for keeping this gathering attached to the attendance CTA after its start; not a published service duration.
      displayWindowMinutes: 120
    }
  ],
  ministries: [
    { icon: '✦', title: 'Children', text: 'Safe, joyful, age-appropriate spaces where children discover God’s love and His Word.', image: 'assets/images/web/ministry-children.webp' },
    { icon: '↗', title: 'Youth', text: 'Faith, friendship, purpose and relevant discipleship for teenagers and young adults.', image: 'assets/images/web/ministry-youth.webp' },
    { icon: '◉', title: 'Women', text: 'Friendship, prayer, encouragement and spiritual growth for women at every life stage.', image: 'assets/images/web/ministry-women.webp' },
    { icon: '◇', title: 'Men', text: 'The Excellent Men: brotherhood, discipleship and practical encouragement for men to grow and lead well.', image: 'assets/images/web/ministry-men.webp' },
    { icon: '♫', title: 'Choir & Worship', text: 'Serving the church through music, worship, creativity and the arts.', image: 'assets/images/web/ministry-worship.webp' },
    { icon: '▣', title: 'Media & Technical', text: 'Helping people connect through sound, visuals, livestreaming and digital communication.', image: 'assets/images/web/ministry-media.webp' },
    { icon: '☼', title: 'Sunday School', text: 'Structured Bible learning that strengthens foundations and encourages mature faith.', image: 'assets/images/web/ministry-school.webp' },
    { icon: '♡', title: 'Community Care', text: 'Practical support, food assistance, evangelism and outreach to the wider community.', image: 'assets/images/web/ministry-care.webp' }
  ],
  gallery: [
    {
      image: 'assets/images/web/hero-community.webp',
      alt: 'Church family gathered at the front of the church during a special family moment',
      eyebrow: 'Church family',
      title: 'Faith shared across generations',
      text: 'Celebrating people, families and meaningful moments together.'
    },
    {
      image: 'assets/images/web/worship-community.webp',
      alt: 'A joyful worshipper smiling during a church gathering',
      eyebrow: 'Worship',
      title: 'Joy in God’s presence',
      text: 'Worship that is heartfelt, welcoming and full of life.'
    },
    {
      image: 'assets/images/web/ministry-children.webp',
      alt: 'A young person smiling and taking part in a church gathering',
      eyebrow: 'Next generation',
      title: 'Growing together',
      text: 'Creating space for children and young people to belong and flourish.'
    },
    {
      image: 'assets/images/web/ministry-women.webp',
      alt: 'Two women warmly embracing during a church event',
      eyebrow: 'Community',
      title: 'Real relationships',
      text: 'Friendship, encouragement and care are at the heart of church life.'
    },
    {
      image: 'assets/images/web/ministry-worship.webp',
      alt: 'Worship team members ministering during a church service',
      eyebrow: 'Serving',
      title: 'Using our gifts together',
      text: 'Many people make each gathering welcoming, creative and meaningful.'
    },
    {
      image: 'assets/images/web/welcome-family.webp',
      alt: 'A family walking outdoors together near the church community',
      eyebrow: 'Belonging',
      title: 'A place for the whole family',
      text: 'Come as you are and discover a community where you can grow.'
    }
    //    {
    //   image: 'assets/images/web/family-new.jpg',
    //   alt: 'A family arriving together near the church community',
    //   eyebrow: 'Belonging',
    //   title: 'A place for the whole family',
    //   text: 'Come as you are and discover a community where you can grow.'
    // }
    //  {
    //   image: 'assets/images/web/pastor-mrs.jpg',
    //   alt: 'A family arriving together near the church community',
    //   eyebrow: 'Belonging',
    //   title: 'A place for the whole family',
    //   text: 'Come as you are and discover a community where you can grow.'
    // }
  ],
  messages: [
    { label: 'SERMON', title: 'Listen to Sunday messages', meta: 'YouTube · full-length Sunday services', url: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams' },
    { label: 'BIBLE STUDY', title: 'Listen to Digging Deep teaching', meta: 'YouTube · Bible study', url: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams' },
    { label: 'WORSHIP', title: 'Experience worship moments', meta: 'YouTube · live services', url: 'https://www.youtube.com/@rccglivingwatermiddlesbrou8286/streams' }
  ],
  // Add approved, current events here. When empty, the site displays a social-media follow-up instead of fabricated event cards.
  events: []
};
