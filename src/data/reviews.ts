import type { Review, MerchantRecord } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Lu-Aldin',
    title: 'Satisfactory delivery',
    content: 'Excellent copper. Arrived eventually.',
    rating: 5,
    date: '1752 BC',
    city: 'Ur',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Anonymous Merchant',
    title: 'Standard commercial transaction',
    content: 'A reputable merchant. Weights were calculated according to customary practices.',
    rating: 5,
    date: '1751 BC',
    city: 'Eridu',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Merchant of Ur',
    title: 'Longstanding trade relationship',
    content: 'Would trade again. Storehouse staff were polite despite busy loading hours on the Euphrates dock.',
    rating: 5,
    date: '1750 BC',
    city: 'Ur',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Trader from Eridu',
    title: 'Fair dealings',
    content: 'Fair weights observed. Received copper ingots for my bronze foundry project.',
    rating: 5,
    date: '1749 BC',
    city: 'Eridu',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Servant of Arbitum',
    title: 'Abundant supply',
    content: 'He has many ingots in his courtyard. Delivery messenger completed transit across regional routes.',
    rating: 5,
    date: '1748 BC',
    city: 'Lagash',
    verified: true
  }
];

export const HISTORICAL_RECORD_NANNI: MerchantRecord = {
  id: 'uet-v-81',
  code: 'UET V 81 / BM 131236',
  title: 'Correspondence regarding a disputed copper delivery',
  sender: 'Nanni (Noble Trader & Palace Benefactor)',
  recipient: 'Ea-Nasir (House Principal)',
  locationFound: 'Residence of Ea-Nasir, Ur (Room 3 Archive)',
  dateEst: 'ca. 1750 BC',
  status: 'DISPUTED BY MERCHANT',
  excerpt: 'You put ingots which were not good before my messenger and said: "If you want to take them, take them; if you do not want to take them, go away!"',
  fullTranslation: `Tell Ea-Nasir: Nanni sends the following message:

When you came, you said to me as follows: "I will give Gimil-Sin fine quality copper ingots." You left then but you did not do what you promised me. You put ingots which were not good before my messenger (Sit-Sin) and said: "If you want to take them, take them; if you do not want to take them, go away!"

What do you take me for, that you treat somebody like me with such contempt? I have sent as messengers gentlemen like ourselves to collect the bag with my money (deposited with you) but you have treated me with contempt by sending them back to me empty-handed several times, and that through enemy territory.

Is there anyone among the merchants who trade with Dilmun who has treated me in this way? You alone treat my messenger with contempt! On account of the one (trifling) mina of silver which I owe you, you feel free to speak in such a way, whereas I have given to the palace on your behalf 1,080 pounds of copper, and Umi-abum has likewise given 1,080 pounds of copper...

How have you treated me for that copper? You have withheld my money bag in enemy territory; it is now up to you to restore my money to me in full.

Take notice that from now on I will not accept here any copper from you that is not of fine quality. I shall select and take the ingots individually in my own yard, and I shall exercise against you my right of rejection because you have treated me with contempt.`,
  merchantResponse: `MERCHANT STATEMENT: The House of Ea-Nasir acknowledges receipt of this correspondence. The ingots presented to the buyer's agent met standard Magan commercial grade at the time of inspection. Differences in visual patina are characteristic of unrefined smelting techniques and do not constitute breach of merchant agreement. This tablet remains filed under active ledger clarification.`
};
