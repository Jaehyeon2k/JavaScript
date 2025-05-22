// 계절별 꽃 사진 데이터(앨범)
const flowerData = {
    spring: [
        { src: "spring/개나리.jpg", alt: "개나리" },
        { src: "spring/금낭화.jpg", alt: "금낭화" },
        { src: "spring/꽃미리.jpg", alt: "꽃미리" },
        { src: "spring/꽃잔디.jpg", alt: "꽃잔디" },
        { src: "spring/답꽃.jpg", alt: "답꽃" },
        { src: "spring/딸기꽃.jpg", alt: "딸기꽃" },
        { src: "spring/라일락.jpg", alt: "라일락" },
        { src: "spring/마가렛.jpg", alt: "마가렛" },
        { src: "spring/매발톱꽃.jpg", alt: "매발톱꽃" },
        { src: "spring/매화.jpg", alt: "매화" },
        { src: "spring/명자나무꽃.jpg", alt: "명자나무꽃" },
        { src: "spring/목련.jpg", alt: "목련" },
        { src: "spring/민들레.jpg", alt: "민들레" },
        { src: "spring/바람꽃.jpg", alt: "바람꽃" },
        { src: "spring/배꽃.jpg", alt: "배꽃" },
        { src: "spring/벛꽃.jpg", alt: "벛꽃" },
        { src: "spring/복수초.jpg", alt: "복수초" },
        { src: "spring/봄까치꽃.jpg", alt: "봄까치꽃" },
        { src: "spring/산수유.jpg", alt: "산수유" },
        { src: "spring/수선화.jpg", alt: "수선화" },
        { src: "spring/유채.jpg", alt: "유채" },
        { src: "spring/제비꽃.jpg", alt: "제비꽃" },
        { src: "spring/조팝나무꽃.jpg", alt: "조팝나무꽃" },
        { src: "spring/죽단화.jpg", alt: "죽단화" },
        { src: "spring/진달래.jpg", alt: "진달래" },
        { src: "spring/철쭉.jpg", alt: "철쭉" },
        { src: "spring/튤립.jpg", alt: "튤립" },
        { src: "spring/한련화.jpg", alt: "한련화" },
        { src: "spring/할미꽃.jpg", alt: "할미꽃" },
        { src: "spring/후리지아.jpg", alt: "후리지아" }
    ],summer: [
        { src: "summer/글라디올러스.png", alt: "글라디올러스" },
        { src: "summer/나리꽃.png", alt: "나리꽃" },
        { src: "summer/나팔꽃.png", alt: "나팔꽃" },
        { src: "summer/능금나무꽃.png", alt: "능금나무꽃" },
        { src: "summer/능소화.png", alt: "능소화" },
        { src: "summer/달리아.png", alt: "달리아" },
        { src: "summer/도라지꽃.png", alt: "도라지꽃" },
        { src: "summer/라벤더.png", alt: "라벤더" },
        { src: "summer/루드베키아.png", alt: "루드베키아" },
        { src: "summer/마리골드.png", alt: "마리골드" },
        { src: "summer/매발톱.png", alt: "매발톱" },
        { src: "summer/맨드라미.png", alt: "맨드라미" },
        { src: "summer/무궁화.png", alt: "무궁화" },
        { src: "summer/베고니아.png", alt: "베고니아" },
        { src: "summer/봉숭아.png", alt: "봉숭아" },
        { src: "summer/분꽃.png", alt: "분꽃" },
        { src: "summer/비비추꽃.png", alt: "비비추꽃" },
        { src: "summer/아스타.png", alt: "아스타" },
        { src: "summer/에키네시아.png", alt: "에키네시아" },
        { src: "summer/옥잠화.png", alt: "옥잠화" },
        { src: "summer/용담.png", alt: "용담" },
        { src: "summer/월하향.png", alt: "월하향" },
        { src: "summer/은방울.jpg", alt: "은방울" },
        { src: "summer/접시꽃.png", alt: "접시꽃" },
        { src: "summer/제라늄.png", alt: "제라늄" },
        { src: "summer/칸나.png", alt: "칸나" },
        { src: "summer/코레옵시스.png", alt: "코레옵시스" },
        { src: "summer/큰금게국.png", alt: "큰금게국" },
        { src: "summer/페튜니아.png", alt: "페튜니아" },
        { src: "summer/히아신스.jpg", alt: "히아신스" }
      ],autumn: [
        { src: "autumn/코스모스.png", alt: "코스모스" },
        { src: "autumn/국화.png", alt: "국화" },
        { src: "autumn/구절초.png", alt: "구절초" },
        { src: "autumn/꽃향유.png", alt: "꽃향유" },
        { src: "autumn/층꽃나무.png", alt: "층꽃나무" },
        { src: "autumn/쑥부쟁이.png", alt: "쑥부쟁이" },
        { src: "autumn/감국.png", alt: "감국" },
        { src: "autumn/산국.png", alt: "산국" },
        { src: "autumn/범부채.png", alt: "범부채" },
        { src: "autumn/매화취.png", alt: "매화취" },
        { src: "autumn/과꽃.png", alt: "과꽃" },
        { src: "autumn/수국.png", alt: "수국" },          
        { src: "autumn/가우라.png", alt: "가우라" },
        { src: "autumn/백일홍.png", alt: "백일홍" },
        { src: "autumn/애기범부채.png", alt: "애기범부채" },
        { src: "autumn/갈대꽃.png", alt: "갈대꽃" },
        { src: "autumn/억새꽃.png", alt: "억새꽃" },
        { src: "autumn/박꽃.png", alt: "박꽃" },
        { src: "autumn/절굿대꽃.png", alt: "절굿대꽃" },
        { src: "autumn/엉겅퀴.png", alt: "엉겅퀴" },
        { src: "autumn/며느리배꼽.png", alt: "며느리배꼽" },
        { src: "autumn/솔체꽃.png", alt: "솔체꽃" },
        { src: "autumn/해국.png", alt: "해국" },
        { src: "autumn/꽃다지.png", alt: "꽃다지" },
        { src: "autumn/아스타.png", alt: "아스타" },  
        { src: "autumn/금잔화.png", alt: "금잔화" },
        { src: "autumn/금방망이.png", alt: "금방망이" },
        { src: "autumn/천일홍.png", alt: "천일홍" },
        { src: "autumn/들국화.png", alt: "들국화" },
        { src: "autumn/사철채송화.png", alt: "사철채송화" }
      ],winter: [
        { src: "winter/동백꽃.png", alt: "동백꽃" },
        { src: "winter/크리스마스로즈.png", alt: "크리스마스로즈" },
        { src: "winter/포인세티아.png", alt: "포인세티아" },
        { src: "winter/시클라멘.png", alt: "시클라멘" },
        { src: "winter/스노우드롭.png", alt: "스노우드롭" },
        { src: "winter/윈터아코나이트.png", alt: "윈터아코나이트" },
        { src: "winter/프림로즈.png", alt: "프림로즈" },
        { src: "winter/겨울딸기꽃.png", alt: "겨울딸기꽃" },
        { src: "winter/겨울제라늄.png", alt: "겨울제라늄" },
        { src: "winter/헬레보루스.png", alt: "헬레보루스" },
        { src: "winter/복수초.png", alt: "복수초" },         
        { src: "winter/납매.png", alt: "납매" }, 
        { src: "winter/겨울팬지.png", alt: "겨울팬지" },
        { src: "winter/겨울비올라.png", alt: "겨울비올라" },
        { src: "winter/겨울데이지.png", alt: "겨울데이지" },
        { src: "winter/안스리움.png", alt: "안스리움" },
        { src: "winter/칼라플라워.png", alt: "칼라플라워" },
        { src: "winter/아마릴리스.png", alt: "아마릴리스" },
        { src: "winter/겨울튤립.png", alt: "겨울튤립" },
        { src: "winter/노란수선화.png", alt: "노란수선화" },
        { src: "winter/금어초.png", alt: "금어초" },
        { src: "winter/카네이션.png", alt: "카네이션" },
        { src: "winter/네메시아.png", alt: "네메시아" },
        { src: "winter/진저꽃.png", alt: "진저꽃" },
        { src: "winter/꽃양배추.png", alt: "꽃양배추" },
        { src: "winter/겨울앵초.png", alt: "겨울앵초" },
        { src: "winter/알스트로메리아.png", alt: "알스트로메리아" },
        { src: "winter/스트렙토카르푸스.png", alt: "스트렙토카르푸스" },
        { src: "winter/겨울라넌큘러스.png", alt: "겨울라넌큘러스" },
        { src: "winter/리시안셔스.png", alt: "리시안셔스" }
      ]
      
      

};
// 각 계절 페이지의 현재 인덱스를 저장하는 객체
let pageIndex = {
    spring: 1,
    summer: 1,
    autumn: 1,
    winter: 1
};

// 사용자가 계절 버튼을 눌렀을 때 실행되는 함수
const showSeason = (season) => {
    // 메인 메뉴 숨김
    document.getElementById('main').style.display = 'none';

    // 다른 모든 계절 구역 숨기기
    ['spring', 'summer', 'autumn', 'winter'].forEach(s => {
        document.getElementById(s).style.display = 'none';
    });

    // body 태그에 선택한 계절의 class 추가 (배경색용)
    document.body.className = season;

    // 해당 계절 페이지를 첫 페이지로 초기화
    pageIndex[season] = 1;

    // 해당 계절 페이지 출력
    renderPage(season);
};

// 계절별 꽃 목록을 실제 페이지에 표시하는 함수
const renderPage = (season) => {
    const section = document.getElementById(season); // 계절별 구역 가져오기
    section.style.display = 'flex'; // 계절 페이지 보이게 하기

    const container = document.getElementById(`${season}-flower-page`);
    container.innerHTML = ''; // 기존에 표시된 이미지 지우기

    // 페이지에 보여줄 꽃 이미지 범위 계산 (10개씩)
    const start = (pageIndex[season] - 1) * 10;
    const end = start + 10;
    const flowers = flowerData[season].slice(start, end);

    // 각 꽃 객체를 이미지 태그로 만들어서 페이지에 추가
    flowers.forEach(flower => {
        const img = document.createElement('img'); // <img> 태그 생성
        img.src = flower.src;                      // 이미지 경로 설정
        img.alt = flower.alt;                      // 이미지 설명 설정
        img.onclick = () => showModal(img);        // 클릭 시 이미지(썸네일) 표시
        container.appendChild(img);                // 페이지에 추가
    });
};

// "다음" 버튼 클릭 시 다음 페이지로 이동
const nextPage = (season) => {
    const maxPage = Math.ceil(flowerData[season].length / 10); // 전체 페이지 수
    if (pageIndex[season] < maxPage) {
        pageIndex[season]++;
        renderPage(season); // 새 페이지 출력
    }
};

// 버튼 클릭 시 이전 페이지로 이동
const prevPage = (season) => {
    if (pageIndex[season] > 1) {
        pageIndex[season]--;
        renderPage(season); // 새 페이지 출력
    }
};

// 메인 페이지로 되돌아가는 함수
const showMain = () => {
    // 모든 계절 페이지 숨기기
    ['spring', 'summer', 'autumn', 'winter'].forEach(s => {
        document.getElementById(s).style.display = 'none';
    });

    // 메인 페이지 보이기
    document.getElementById('main').style.display = 'flex';

};

// 이미지 클릭 시 이미지를 보여지게 하는 함수
const showModal = (imgElement) => {
    const model = document.getElementById('modal'); // 모달 창
    const modelImg = document.getElementById('modal-img'); // 큰 이미지
    const modelName = document.getElementById('modal-name'); // 이미지 이름

    // 이미지와 이름 설정
    modelImg.src = imgElement.src;
    modelName.textContent = imgElement.alt;
    // 창 보이게 하기 
    model.classList.add('active');
};

// 이미지를 닫는 함수
const hideModal = () => {
    document.getElementById('modal').classList.remove('active'); // 숨김
};