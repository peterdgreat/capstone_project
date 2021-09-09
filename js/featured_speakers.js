const speakersList = document.querySelectorAll('.f-speaker');
const speakers = [
  {
    speakerName: 'Samuel Ajayi',
    title: 'Conference Convener',
    background: 'A Husband, Father ,Believer and Graduate Assistant at Florida State University .',
    img: 'img/sam_speaker.jpg',
  },
  {
    speakerName: 'Pastor Sola Mene',
    title: 'Lead Pastor at Petra Ministries International',
    background: 'Husband, Father,Pastor, Bible Teacher, Intercessor, Marriage Counselor, a child of God.',
    img: 'img/pst_Sola_Mene.jpg',
  },
  {
    speakerName: 'Itunu Ajayi',
    title: 'A Teacher',
    background: 'A wife, Mother, Teacher and a believer.',
    img: 'img/Itunu_Ajayi.jpg',
  },
  {
    speakerName: 'Pastor Reuben',
    title: 'Pastor at CAC Upper Room Assembly',
    background: 'Husband, Father, Pastor at CAC Upper Room Assembly',
    img: 'img/pst_Ajayi.jpg',
  },
];

const imgs = (() => {
  const img = document.createElement('img');
  return img;
});

for (let eachSpeaker = 0; eachSpeaker < speakersList.length; eachSpeaker += 1) {
  const speakerNodes = speakersList[eachSpeaker].childNodes;
  speakerNodes[1].appendChild(imgs()).src = speakers[eachSpeaker].img;
  const speakerInfoNodes = speakerNodes[3].childNodes;
  speakerInfoNodes[1].innerHTML = speakers[eachSpeaker].speakerName;
  speakerInfoNodes[3].innerHTML = speakers[eachSpeaker].title;
  speakerInfoNodes[5].innerHTML = speakers[eachSpeaker].background;
}
