export const navigation = [
  { label: 'Overview', path: '/', description: 'Business performance at a glance' },
  { label: 'Leads', path: '/leads', description: 'Lead pipeline, sources and conversion history' },
  { label: 'Quotations', path: '/quotations', description: 'Quote status, service value and lead history' },
  { label: 'Deals & Revenue', path: '/deals', description: 'Deal pipeline, priorities and revenue collection' },
  { label: 'Orders & Payments', path: '/orders', description: 'Order progress, payments and outstanding balances' },
  { label: 'Team activity', path: '/team', description: 'Sales and operations team performance' },
  { label: 'Reports', path: '/reports', description: 'Exportable business reporting' },
];
export const detailRows = {
  Leads: [ ['L-209610','Nancy Singh','Google Ads','Qualified','₹18,500'], ['L-209611','Sneha Choudhary','Website','Converted','₹42,000'], ['L-209612','Tannu Kumari','Referral','New','₹12,000'], ['L-209613','Aman Verma','Google Ads','Unqualified','₹0'] ],
  Quotations: [ ['Q-10467','Private Limited Company','Nancy Singh','Pending','₹54,326'], ['Q-10466','LLP Registration','Sneha Choudhary','Pending','₹13,527'], ['Q-10465','Trademark','Tannu Kumari','Accepted','₹2,496'], ['Q-10464','ISO Certification','Aman Verma','Rejected','₹7,117'] ],
  'Deals & Revenue': [ ['D-822','Private Limited Company','High','In progress','₹65,428'], ['D-821','LLP Registration','Medium','Won','₹22,500'], ['D-820','Trademark','Medium','In progress','₹15,000'], ['D-819','Annual Compliance','High','Won','₹9,700'] ],
  'Orders & Payments': [ ['O-2168','Private Limited Company','In progress','Partially paid','₹28,500'], ['O-2167','ISO Certification','Completed','Paid','₹7,117'], ['O-2166','LLP Registration','Pending','Unpaid','₹13,527'], ['O-2165','Trademark','In progress','Partially paid','₹1,200'] ],
  'Team activity': [ ['Nancy Singh','65','32','12','₹52,498'], ['Sneha Choudhary','4','3','2','₹40,000'], ['Tannu Kumari','8','3','2','₹32,420'], ['Aman Verma','14','4','0','₹12,000'] ],
  Reports: [ ['October 2026','Business performance','Oct 1 – Oct 31','Ready','CSV'], ['Lead funnel','Acquisition & conversion','Last 30 days','Ready','CSV'], ['Revenue collections','Deals & payments','Last 30 days','Ready','CSV'] ],
};
